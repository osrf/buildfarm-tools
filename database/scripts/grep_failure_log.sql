/*
DISCLAIMER: 
buildfarmer.db only saves the last 100 lines of the log. 
Some logs are longer than 100 lines, so this query will not 
be able to find all the failures.
Also, this query only looks at failed builds. That means the 
result will not include jobs that have never failed.

This query will return a list of jobs that have failed with
the given string percentage over all the builds that failed
in the given time period.

param1: String to grep for (e.g.: "error")
param2: Time period (e.g.: 7 days)
*/

WITH recent_builds AS (
    SELECT job_name,
        COUNT(*) build_count
    FROM build_status
    WHERE build_datetime >= DATE('now', '-@param2@')
    GROUP BY job_name
),
recent_failures AS (
    SELECT build_status.job_name,
        COUNT(*) failure_count
    FROM build_status,
        build_failures
    WHERE build_status.build_number = build_failures.build_number
        AND build_status.job_name = build_failures.job_name
        AND build_status.build_datetime >= DATE('now', '-@param2@')
        AND build_failures.log_output LIKE '%@param1@%'
    GROUP BY build_status.job_name
)
SELECT build_status.job_name,
    DATE(MAX(build_status.build_datetime)) last_time,
    DATE(MIN(build_status.build_datetime)) first_time,
    recent_builds.build_count,
    recent_failures.failure_count,
    ROUND(
        CAST(recent_failures.failure_count AS FLOAT) / recent_builds.build_count * 100,
        2
    ) AS failure_percentage
FROM build_status,
    recent_builds,
    recent_failures
WHERE recent_builds.job_name = build_status.job_name
    AND recent_failures.job_name = build_status.job_name
    AND recent_failures.failure_count > 0
GROUP BY build_status.job_name
ORDER BY last_time DESC;