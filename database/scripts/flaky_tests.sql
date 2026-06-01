WITH failure_events_90 AS (
  SELECT
    tf.error_name AS test_name,
    tf.package_name AS package,
    tf.job_name,
    tf.build_number,
    bs.build_datetime,
    CASE
      WHEN tf.age >= 0 THEN tf.age + 1
      ELSE 1
    END AS consecutive_failures
  FROM test_failures tf
  JOIN build_status bs
    ON bs.job_name = tf.job_name
   AND bs.build_number = tf.build_number
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-90 days')
),
latest_failure_per_job_3d AS (
  SELECT
    x.test_name,
    x.package,
    x.job_name,
    x.build_datetime,
    x.consecutive_failures
  FROM (
    SELECT
      fe.*,
      ROW_NUMBER() OVER (
        PARTITION BY fe.test_name, fe.package, fe.job_name
        ORDER BY datetime(fe.build_datetime) DESC, fe.build_number DESC
      ) AS rn
    FROM failure_events_90 fe
  ) x
  WHERE x.rn = 1
    AND datetime(x.build_datetime) >= datetime('now', '-3 days')
),
passes_in_last_3_days AS (
  SELECT DISTINCT
    lf.test_name,
    lf.package,
    lf.job_name
  FROM latest_failure_per_job_3d lf
  JOIN build_status bs
    ON bs.job_name = lf.job_name
  LEFT JOIN test_failures tf
    ON tf.job_name = bs.job_name
   AND tf.build_number = bs.build_number
   AND tf.error_name = lf.test_name
   AND tf.package_name = lf.package
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-3 days')
    AND (COALESCE(bs.passed, 0) + COALESCE(bs.failures, 0) + COALESCE(bs.skipped, 0)) > 0
    AND tf.error_name IS NULL
),
active_test_names AS (
  SELECT DISTINCT
    lf.test_name
  FROM latest_failure_per_job_3d lf
  LEFT JOIN passes_in_last_3_days p
    ON p.test_name = lf.test_name
   AND p.package = lf.package
   AND p.job_name = lf.job_name
  WHERE p.test_name IS NULL
    AND lf.consecutive_failures >= 2
),
failure_runs_20 AS (
  SELECT DISTINCT
    tf.error_name AS test_name,
    tf.package_name AS package,
    tf.job_name,
    tf.build_number,
    bs.build_datetime,
    CASE
      WHEN tf.job_name LIKE '%-jammy-%' OR tf.job_name LIKE '%_jammy_%' THEN 'jammy'
      WHEN tf.job_name LIKE '%-noble-%' OR tf.job_name LIKE '%_noble_%' THEN 'noble'
      WHEN tf.job_name LIKE '%-focal-%' OR tf.job_name LIKE '%_focal_%' THEN 'focal'
      WHEN tf.job_name LIKE '%-homebrew-%' OR tf.job_name LIKE '%_homebrew_%' THEN 'homebrew'
      WHEN tf.job_name LIKE '%linux%' THEN 'linux'
      WHEN tf.job_name LIKE '%osx%' THEN 'osx'
      WHEN tf.job_name LIKE '%win%' OR tf.job_name LIKE '%clwin%' OR tf.job_name LIKE '%clowin%' THEN 'windows'
      ELSE 'unknown'
    END AS os,
    CASE
      WHEN tf.job_name LIKE '%-aarch64%' OR tf.job_name LIKE '%_aarch64%' THEN 'aarch64'
      WHEN tf.job_name LIKE '%-arm64%' OR tf.job_name LIKE '%_arm64%' THEN 'arm64'
      WHEN tf.job_name LIKE '%-amd64%' OR tf.job_name LIKE '%_amd64%' THEN 'amd64'
      ELSE 'unknown'
    END AS arch
  FROM test_failures tf
  JOIN build_status bs
    ON bs.job_name = tf.job_name
   AND bs.build_number = tf.build_number
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-20 days')
),
candidate_jobs AS (
  SELECT DISTINCT
    fr.test_name,
    fr.package,
    fr.job_name
  FROM failure_runs_20 fr
),
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
LEFT JOIN active_test_names atn
  ON atn.test_name = fc.test_name
WHERE atn.test_name IS NULL
ORDER BY fc.failure_count DESC, fc.fail_rate_pct DESC, fc.test_name ASC;
