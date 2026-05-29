WITH failure_events AS (
  SELECT
    tf.error_name AS test_name,
    tf.package_name AS package,
    tf.job_name,
    tf.build_number,
    bs.build_datetime,
    date(bs.build_datetime) AS build_date,
    CASE
      WHEN tf.age >= 0 THEN tf.age + 1
      ELSE 1
    END AS consecutive_failures,
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
    AND datetime(bs.build_datetime) >= datetime('now', '-90 days')
),
latest_failure_per_job AS (
  SELECT
    x.test_name,
    x.package,
    x.job_name,
    x.build_number,
    x.build_datetime,
    x.build_date,
    x.consecutive_failures,
    x.os,
    x.arch
  FROM (
    SELECT
      fe.*,
      ROW_NUMBER() OVER (
        PARTITION BY fe.test_name, fe.package, fe.job_name
        ORDER BY datetime(fe.build_datetime) DESC, fe.build_number DESC
      ) AS rn
    FROM failure_events fe
  ) x
  WHERE x.rn = 1
    AND datetime(x.build_datetime) >= datetime('now', '-3 days')
),
passes_in_last_3_days AS (
  SELECT DISTINCT
    lf.test_name,
    lf.package,
    lf.job_name
  FROM latest_failure_per_job lf
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
active_failures AS (
  SELECT
    lf.test_name,
    lf.package,
    lf.job_name,
    lf.build_date,
    lf.consecutive_failures,
    lf.os,
    lf.arch
  FROM latest_failure_per_job lf
  LEFT JOIN passes_in_last_3_days p
    ON p.test_name = lf.test_name
   AND p.package = lf.package
   AND p.job_name = lf.job_name
  WHERE p.test_name IS NULL
    AND lf.consecutive_failures >= 2
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
),
platforms AS (
  SELECT DISTINCT
    af.test_name,
    af.package,
    af.os,
    af.arch
  FROM active_failures af
)
SELECT
  af.test_name,
  af.package,
  MIN(af.build_date) AS first_seen_date,
  MAX(af.consecutive_failures) AS consecutive_failures,
  (
    SELECT json_group_array(json_object('os', p.os, 'arch', p.arch))
    FROM platforms p
    WHERE p.test_name = af.test_name
      AND p.package = af.package
  ) AS affected_platforms,
  MAX(il.linked_issue) AS linked_issue
FROM active_failures af
LEFT JOIN issue_links il
  ON il.test_name = af.test_name
 AND il.package = af.package
 AND il.job_name = af.job_name
GROUP BY af.test_name, af.package
ORDER BY consecutive_failures DESC, first_seen_date ASC;
