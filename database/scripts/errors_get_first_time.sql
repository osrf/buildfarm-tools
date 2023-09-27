SELECT test_failures.error_name,
    test_failures.package_name,
    test_failures.job_name,
    test_failures.build_number,
    build_status.build_datetime,
    build_status.node_name
FROM test_failures
    INNER JOIN build_status ON (
        test_failures.build_number = build_status.build_number
        AND test_failures.job_name = build_status.job_name
    )
WHERE test_failures.error_name LIKE "%@param1@%"
ORDER BY build_status.build_datetime ASC
LIMIT 25
