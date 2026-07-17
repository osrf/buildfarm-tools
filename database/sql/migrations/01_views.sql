-- ── job_platforms ─────────────────────────────────────────────────────────────
-- Derives normalised platform labels from os_name and job_name.
-- server_status.platform_os / platform_arch are NULL on all existing rows;
-- this view computes the correct values without a table backfill.
DROP VIEW IF EXISTS job_platforms;
CREATE VIEW job_platforms AS
SELECT
    job_name,
    CASE
        WHEN os_name IN ('win', 'Windows') THEN 'windows'
        WHEN os_name LIKE 'Brew%' THEN 'macos'
        ELSE 'linux'
    END AS platform_os,
    CASE
        WHEN job_name LIKE '%-arm64'
          OR job_name LIKE '%-aarch64%'
          OR os_name = 'aarch64_Ubuntu' THEN 'aarch64'
        ELSE 'amd64'
    END AS platform_arch
FROM server_status;

-- ── issue_links ───────────────────────────────────────────────────────────────
-- Best non-obliviated GitHub issue per (test_name, package, job_name).
-- Queries that need test/package granularity (no job) add GROUP BY on top.
DROP VIEW IF EXISTS issue_links;
CREATE VIEW issue_links AS
SELECT
    error_name AS test_name,
    package_name AS package,
    job_name,
    status,
    MAX(github_issue) AS linked_issue
FROM test_fail_issues
WHERE status NOT IN ('OBLIVIATED', 'COMPLETED', 'DISABLED')
  AND github_issue IS NOT NULL
  AND github_issue != ''
GROUP BY error_name, package_name, job_name, status;

-- ── active_failures ───────────────────────────────────────────────────────────
-- Tests that are still actively broken: latest failure per job within 90 days,
-- still failing within the last 3 days, with no recent pass.
-- Depends on job_platforms for platform labels.
DROP VIEW IF EXISTS "main"."active_failures";

CREATE VIEW active_failures AS
WITH time_windows AS ( -- Calculate the date thresholds exactly once
    SELECT 
        datetime('now', '-90 days') AS window_90d,
        datetime('now', '-3 days') AS window_3d
),
failure_events AS (
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
        jp.platform_os AS os,
        jp.platform_arch AS arch,
        ROW_NUMBER() OVER (
            PARTITION BY tf.error_name, tf.package_name, tf.job_name 
            ORDER BY tf.build_number DESC
        ) AS rn
    FROM test_failures tf
    JOIN build_status bs
        ON bs.job_name = tf.job_name
       AND bs.build_number = tf.build_number
    CROSS JOIN time_windows tw
    LEFT JOIN job_platforms jp
        ON jp.job_name = tf.job_name
    WHERE bs.build_datetime IS NOT NULL
      AND bs.build_datetime >= tw.window_90d
            AND bs.status IN ('SUCCESS', 'UNSTABLE')
            AND (COALESCE(bs.passed, 0) + COALESCE(bs.failures, 0) + COALESCE(bs.skipped, 0)) > 0
),
latest_failure_per_job AS (
    SELECT
        fe.test_name,
        fe.package,
        fe.job_name,
        fe.build_number,
        fe.build_datetime,
        fe.build_date,
        fe.consecutive_failures,
        fe.os,
        fe.arch
    FROM failure_events fe
    CROSS JOIN time_windows tw
    WHERE fe.rn = 1
      AND fe.build_datetime >= tw.window_3d
),
passes_in_last_3_days AS (
    SELECT DISTINCT
        lf.test_name,
        lf.package,
        lf.job_name
    FROM latest_failure_per_job lf
    JOIN build_status bs
        ON bs.job_name = lf.job_name
    CROSS JOIN time_windows tw
    LEFT JOIN test_failures tf
        ON tf.job_name = bs.job_name
       AND tf.build_number = bs.build_number
       AND tf.error_name = lf.test_name
       AND tf.package_name = lf.package
    WHERE bs.build_datetime IS NOT NULL
      AND bs.build_datetime >= tw.window_3d
      AND (COALESCE(bs.passed, 0) + COALESCE(bs.failures, 0) + COALESCE(bs.skipped, 0)) > 0
      AND tf.error_name IS NULL
)
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
    AND lf.consecutive_failures >= 3;