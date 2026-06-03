WITH RECURSIVE dates(date) AS (
    SELECT date('now', '-89 days')
    UNION ALL
    SELECT date(date, '+1 day')
    FROM dates
    WHERE date < date('now')
),
known_jobs AS (
    SELECT DISTINCT
        tf.job_name,
        tf.package_name
    FROM test_failures tf
    WHERE tf.error_name = '@param1@'
),
daily_runs AS (
    SELECT DISTINCT
        date(bs.build_datetime) AS date
    FROM build_status bs
    INNER JOIN known_jobs kj
        ON kj.job_name = bs.job_name
    WHERE bs.build_datetime IS NOT NULL
      AND date(bs.build_datetime) BETWEEN date('now', '-89 days') AND date('now')
),
daily_failures AS (
    SELECT DISTINCT
        date(bs.build_datetime) AS date
    FROM test_failures tf
    INNER JOIN build_status bs
        ON bs.job_name = tf.job_name
       AND bs.build_number = tf.build_number
    INNER JOIN known_jobs kj
        ON kj.job_name = tf.job_name
       AND kj.package_name = tf.package_name
    WHERE tf.error_name = '@param1@'
      AND bs.build_datetime IS NOT NULL
      AND date(bs.build_datetime) BETWEEN date('now', '-89 days') AND date('now')
)
SELECT
    dates.date,
    CASE
        WHEN daily_failures.date IS NOT NULL THEN 0
        WHEN daily_runs.date IS NOT NULL THEN 1
        ELSE NULL
    END AS result
FROM dates
LEFT JOIN daily_runs
    ON daily_runs.date = dates.date
LEFT JOIN daily_failures
    ON daily_failures.date = dates.date
ORDER BY dates.date;