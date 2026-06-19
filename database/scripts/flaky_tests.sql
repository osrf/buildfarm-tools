-- Collect failing runs in the 20-day window and reuse the normalized platform
-- labels already stored in server_status.
WITH failure_runs_20 AS (
  SELECT DISTINCT
    tf.error_name AS test_name,
    tf.package_name AS package,
    tf.job_name,
    tf.build_number,
    bs.build_datetime,
    COALESCE(ss.platform_os, 'unknown') AS os,
    COALESCE(ss.platform_arch, 'unknown') AS arch
  FROM test_failures tf
  JOIN build_status bs
    ON bs.job_name = tf.job_name
   AND bs.build_number = tf.build_number
  LEFT JOIN server_status ss
    ON ss.job_name = tf.job_name
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-20 days')
),
-- Limit the rest of the query to jobs where the test has at least one failure.
candidate_jobs AS (
  SELECT DISTINCT
    fr.test_name,
    fr.package,
    fr.job_name
  FROM failure_runs_20 fr
),
-- Count all observed runs for the candidate jobs in the same 20-day window.
runs_20 AS (
  SELECT DISTINCT
    cj.test_name,
    cj.package,
    bs.job_name,
    bs.build_number
  FROM candidate_jobs cj
  JOIN build_status bs
    ON bs.job_name = cj.job_name
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-20 days')
    AND (COALESCE(bs.passed, 0) + COALESCE(bs.failures, 0) + COALESCE(bs.skipped, 0)) > 0
),
-- Turn the raw runs into failure counts and total run counts per test/package.
counts AS (
  SELECT
    r.test_name,
    r.package,
    COUNT(*) AS total_runs,
    SUM(
      CASE
        WHEN fr.test_name IS NOT NULL THEN 1
        ELSE 0
      END
    ) AS failure_count
  FROM runs_20 r
  LEFT JOIN failure_runs_20 fr
    ON fr.test_name = r.test_name
   AND fr.package = r.package
   AND fr.job_name = r.job_name
   AND fr.build_number = r.build_number
  GROUP BY r.test_name, r.package
),
-- Apply the flaky-test threshold.
flaky_candidates AS (
  SELECT
    c.test_name,
    c.package,
    c.failure_count,
    c.total_runs,
    ROUND(100.0 * c.failure_count / c.total_runs, 2) AS fail_rate_pct
  FROM counts c
  WHERE c.failure_count >= 3
    AND (c.total_runs - c.failure_count) >= 1
    AND c.total_runs > 0
),
-- Collect the platform mix only for the tests that survived the threshold.
platforms AS (
  SELECT DISTINCT
    fr.test_name,
    fr.package,
    fr.os,
    fr.arch
  FROM failure_runs_20 fr
  JOIN flaky_candidates fc
    ON fc.test_name = fr.test_name
   AND fc.package = fr.package
),
-- Reuse the best known GitHub issue per test/package.
issue_links AS (
  SELECT
    tfi.error_name AS test_name,
    tfi.package_name AS package,
    MAX(
      CASE
        WHEN tfi.status != 'OBLIVIATED' AND tfi.github_issue IS NOT NULL AND tfi.github_issue != ''
          THEN tfi.github_issue
      END
    ) AS linked_issue
  FROM test_fail_issues tfi
  GROUP BY tfi.error_name, tfi.package_name
)
-- Drop any test that already belongs to the active regression set.
SELECT
  fc.test_name,
  fc.package,
  fc.failure_count,
  fc.total_runs,
  fc.fail_rate_pct,
  (
    SELECT json_group_array(json_object('os', p.os, 'arch', p.arch))
    FROM platforms p
    WHERE p.test_name = fc.test_name
      AND p.package = fc.package
  ) AS affected_platforms,
  il.linked_issue
FROM flaky_candidates fc
LEFT JOIN issue_links il
  ON il.test_name = fc.test_name
 AND il.package = fc.package
LEFT JOIN (
  SELECT DISTINCT test_name
  FROM active_failures
) atn
  ON atn.test_name = fc.test_name
WHERE atn.test_name IS NULL
ORDER BY fc.failure_count DESC, fc.fail_rate_pct DESC, fc.test_name ASC;
