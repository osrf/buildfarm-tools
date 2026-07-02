-- Reusable view for tests that are still actively broken across the buildfarms.
-- The view keeps the streak logic in one place so downstream queries do not need
-- to repeat the same windowing and platform parsing rules.
CREATE VIEW IF NOT EXISTS active_failures AS
WITH failure_events AS (
    -- Collect all failure events in the last 90 days and read the normalized
    -- platform labels from server_status.
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
        COALESCE(ss.platform_os, 'unknown') AS os,
        COALESCE(ss.platform_arch, 'unknown') AS arch
    FROM test_failures tf
    JOIN build_status bs
        ON bs.job_name = tf.job_name
       AND bs.build_number = tf.build_number
    LEFT JOIN server_status ss
        ON ss.job_name = tf.job_name
        WHERE bs.build_datetime IS NOT NULL
            AND bs.build_datetime >= datetime('now', '-90 days')
),
latest_failure_builds AS (
    -- Resolve the latest failed build by job sequence number. Jenkins build
    -- numbers are monotonic within each job, so MAX(build_number) represents
    -- the latest event for a given test/package/job.
    SELECT
        fe.test_name,
        fe.package,
        fe.job_name,
        MAX(fe.build_number) AS latest_build_number
    FROM failure_events fe
    GROUP BY fe.test_name, fe.package, fe.job_name
),
latest_failure_per_job AS (
    -- Keep only the latest failure per test/package/job so we can reason about
    -- the current streak instead of every historical occurrence.
    SELECT
        fe.test_name,
        fe.package,
        fe.job_name,
        fe.build_number,
        fe.build_datetime,
        fe.build_date,
        MIN(fe.consecutive_failures) AS consecutive_failures,
        fe.os,
        fe.arch
    FROM failure_events fe
    JOIN latest_failure_builds lfb
        ON lfb.test_name = fe.test_name
       AND lfb.package = fe.package
       AND lfb.job_name = fe.job_name
       AND lfb.latest_build_number = fe.build_number
    WHERE fe.build_datetime >= datetime('now', '-3 days')
    GROUP BY
        fe.test_name,
        fe.package,
        fe.job_name,
        fe.build_number,
        fe.build_datetime,
        fe.build_date,
        fe.os,
        fe.arch
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
            AND bs.build_datetime >= datetime('now', '-3 days')
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