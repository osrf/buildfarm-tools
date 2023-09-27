SELECT build_status.job_name,
    build_status.build_number,
    test_failures.error_name,
    test_failures.package_name,
    build_status.build_datetime
FROM test_failures
    INNER JOIN build_status ON (
        test_failures.build_number = build_status.build_number
        AND test_failures.job_name = build_status.job_name
    )
WHERE build_status.build_datetime > DATETIME('now', '-1 day')
    AND (test_failures.error_name, test_failures.job_name) NOT IN (
        SELECT DISTINCT error_name,
            job_name
        FROM test_fail_issues
        WHERE status = 'OPEN'
    ) -- Default: filter errors with an open issue
ORDER BY build_status.job_name DESC