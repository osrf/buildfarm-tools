-- Reusable view for tests that are still actively broken across the buildfarms.
-- The view keeps the streak logic in one place so downstream queries do not need
-- to repeat the same windowing and platform parsing rules.
CREATE VIEW IF NOT EXISTS active_failures AS
WITH failure_events AS (
    -- Collect all failure events in the last 90 days and normalize the job name
    -- into the platform labels used by the dashboard.
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
    -- Keep only the latest failure per test/package/job so we can reason about
    -- the current streak instead of every historical occurrence.
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
    -- Exclude jobs where the same test has passed recently. That prevents a test
    -- from being treated as persistently broken when the latest signal is healthy.
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
active_failure_rows AS (
    -- Keep only tests with a real consecutive failure streak.
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
)
-- Final projection exposed by the view and reused by dashboard queries.
SELECT
    test_name,
    package,
    job_name,
    build_date,
    consecutive_failures,
    os,
    arch
FROM active_failure_rows;