-- Return active regressions at job granularity with build references suitable
-- for suspect_commits.py (job_name + last successful build + first failing build).
WITH active_jobs AS (
  SELECT
    af.test_name,
    af.package,
    af.job_name
  FROM active_failures af
  GROUP BY af.test_name, af.package, af.job_name
),
latest_failure_builds AS (
  -- Locate the latest failed build number for every active test/package/job.
  SELECT
    tf.error_name AS test_name,
    tf.package_name AS package,
    tf.job_name,
    MAX(tf.build_number) AS latest_failure_build
  FROM test_failures tf
  JOIN active_jobs aj
    ON aj.test_name = tf.error_name
   AND aj.package = tf.package_name
   AND aj.job_name = tf.job_name
  GROUP BY tf.error_name, tf.package_name, tf.job_name
),
latest_failure AS (
  -- Resolve latest failure metadata from the latest failed build number.
  SELECT
    lfb.test_name,
    lfb.package,
    lfb.job_name,
    lfb.latest_failure_build,
    bs.build_datetime AS latest_failure_datetime,
    MIN(
      CASE
        WHEN tf.age >= 0 THEN tf.age + 1
        ELSE 1
      END
    ) AS consecutive_failures
  FROM latest_failure_builds lfb
  JOIN test_failures tf
    ON tf.error_name = lfb.test_name
   AND tf.package_name = lfb.package
   AND tf.job_name = lfb.job_name
   AND tf.build_number = lfb.latest_failure_build
  JOIN build_status bs
    ON bs.job_name = lfb.job_name
   AND bs.build_number = lfb.latest_failure_build
  WHERE bs.build_datetime IS NOT NULL
  GROUP BY
    lfb.test_name,
    lfb.package,
    lfb.job_name,
    lfb.latest_failure_build,
    bs.build_datetime
),
first_failure AS (
  -- In the current failing streak, find the first failed build (age = 0)
  -- without a per-row correlated subquery.
  SELECT
    lf.test_name,
    lf.package,
    lf.job_name,
    lf.latest_failure_build,
    lf.latest_failure_datetime,
    lf.consecutive_failures,
    COALESCE(MAX(tf0.build_number), lf.latest_failure_build) AS first_failure_build
  FROM latest_failure lf
  LEFT JOIN test_failures tf0
    ON tf0.error_name = lf.test_name
   AND tf0.package_name = lf.package
   AND tf0.job_name = lf.job_name
   AND tf0.build_number <= lf.latest_failure_build
   AND tf0.age = 0
  GROUP BY
    lf.test_name,
    lf.package,
    lf.job_name,
    lf.latest_failure_build,
    lf.latest_failure_datetime,
    lf.consecutive_failures
),
last_success AS (
  -- Find the latest build before first_failure_build where this test passed
  -- (the test did run and no failure row exists for that build).
  SELECT
    ff.test_name,
    ff.package,
    ff.job_name,
    ff.first_failure_build,
    MAX(bs.build_number) AS last_success_build
  FROM first_failure ff
  JOIN build_status bs
    ON bs.job_name = ff.job_name
   AND bs.build_number < ff.first_failure_build
  LEFT JOIN test_failures tf
    ON tf.error_name = ff.test_name
   AND tf.package_name = ff.package
   AND tf.job_name = bs.job_name
   AND tf.build_number = bs.build_number
  WHERE (COALESCE(bs.passed, 0) + COALESCE(bs.failures, 0) + COALESCE(bs.skipped, 0)) > 0
    AND tf.error_name IS NULL
  GROUP BY ff.test_name, ff.package, ff.job_name, ff.first_failure_build
),
issue_links AS (
  SELECT
    tfi.error_name AS test_name,
    tfi.package_name AS package,
    tfi.job_name,
    MAX(
      CASE
        WHEN tfi.status != 'OBLIVIATED' AND tfi.github_issue IS NOT NULL AND tfi.github_issue != ''
          THEN tfi.github_issue
      END
    ) AS linked_issue
  FROM test_fail_issues tfi
  GROUP BY tfi.error_name, tfi.package_name, tfi.job_name
)
SELECT
  ff.test_name,
  ff.package,
  ff.job_name,
  ff.consecutive_failures,
  ff.first_failure_build,
  ls.last_success_build,
  ff.latest_failure_build,
  date(ff.latest_failure_datetime) AS last_failure_date,
  il.linked_issue
FROM first_failure ff
LEFT JOIN last_success ls
  ON ls.test_name = ff.test_name
 AND ls.package = ff.package
 AND ls.job_name = ff.job_name
 AND ls.first_failure_build = ff.first_failure_build
LEFT JOIN issue_links il
  ON il.test_name = ff.test_name
 AND il.package = ff.package
 AND il.job_name = ff.job_name
ORDER BY ff.consecutive_failures DESC, ff.test_name ASC, ff.package ASC, ff.job_name ASC;