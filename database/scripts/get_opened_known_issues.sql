SELECT test_fail_issues.error_name,
    test_fail_issues.github_issue,
    test_fail_issues.status,
    test_fail_issues.job_name,
    server_status.project
FROM test_fail_issues
LEFT JOIN server_status ON test_fail_issues.job_name = server_status.job_name
WHERE test_fail_issues.status NOT IN (
    "COMPLETED",
    "OBLIVIATED",
    "DISABLED"
);