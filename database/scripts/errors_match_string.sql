--# Get all the errors in the last 14 days matching a string
SELECT test_failures.error_name,
    test_failures.package_name,
    build_status.build_datetime,
    build_status.job_name,
    build_status.build_number
FROM test_failures
    INNER JOIN build_status ON (
        test_failures.build_number = build_status.build_number
        AND test_failures.job_name = build_status.job_name
    )
WHERE build_status.build_datetime > DATETIME('now', '-14 day')
    AND test_failures.error_name NOT IN (
        SELECT DISTINCT error_name
        FROM test_fail_issues
    )
    AND test_failures.error_name LIKE '%@param1@%' -- and test_failures.job_name in ROS_JOBS
ORDER BY build_status.job_name DESC