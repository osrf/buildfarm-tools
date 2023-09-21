CREATE temp TABLE GZ_JOBS AS
SELECT DISTINCT job_name
FROM build_status
WHERE (
        job_name LIKE '%ign%'
        OR job_name LIKE '%gz%'
        OR job_name LIKE '%gazebo%'
        OR job_name LIKE '%sdformat%'
    )
ORDER BY job_name DESC;
SELECT COUNT(*) total_count,
    test_failures.error_name,
    test_failures.job_name
FROM test_failures
    INNER JOIN build_status ON (
        test_failures.build_number = build_status.build_number
        AND test_failures.job_name = build_status.job_name
    )
WHERE build_status.build_datetime > DATETIME('now', '-@param1@')
    AND test_failures.job_name IN GZ_JOBS
GROUP BY test_failures.error_name
HAVING COUNT(*) > 2
ORDER BY total_count DESC;