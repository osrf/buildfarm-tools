/*
This query returns the failure percentage of a list of jobs that have failed
at least once in the last @param2@ days in the node @param3@ with the @param1@ test failure.

Input parameters:
    param1: error name
    param2: time period (e.g.: 7 days)
    param3: node name

Output columns:
    node_name,
    job_name,
    last_fail,
    first_fail,
    build_count,
    failure_count,
    failure_percentage
 */
WITH recent_builds AS (
	SELECT job_name,
		node_name,
		COUNT(*) AS build_count
	FROM build_status
	WHERE build_datetime >= DATE('now', '-@param2@') 
		AND node_name LIKE '%@param3@%'
	GROUP BY node_name, job_name
),
recent_failures AS (
	SELECT build_status.node_name,
		build_status.job_name,
		COUNT(*) failure_count,		
		MAX(build_status.build_datetime) last_failure_datetime,
		MIN(build_status.build_datetime) first_failure_datetime
	FROM build_status INNER JOIN test_failures ON
		build_status.build_number = test_failures.build_number
		AND build_status.job_name = test_failures.job_name
	WHERE build_status.build_datetime >= DATE('now', '-30 days')
		AND test_failures.error_name LIKE '@param1@'
		AND build_status.node_name LIKE '%@param3@%'
	GROUP BY build_status.node_name, build_status.job_name
) 
SELECT build_status.node_name,
	build_status.job_name,
	DATE(recent_failures.last_failure_datetime) last_fail,
	DATE(recent_failures.first_failure_datetime) first_fail,
    recent_builds.build_count,
    recent_failures.failure_count,
    ROUND(
        CAST(recent_failures.failure_count AS FLOAT) / recent_builds.build_count * 100,
        2
    ) AS failure_percentage
FROM build_status,
    recent_builds,
    recent_failures
WHERE recent_builds.node_name = build_status.node_name
    AND recent_failures.node_name = build_status.node_name
	AND recent_builds.job_name = build_status.job_name
    AND recent_failures.job_name = build_status.job_name
    AND recent_failures.failure_count > 0
    AND build_status.node_name LIKE '%@param3@%'
GROUP BY build_status.node_name, build_status.job_name
ORDER BY last_fail DESC;