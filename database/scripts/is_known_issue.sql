SELECT error_name,
    test_fail_issues.job_name,
    github_issue,
    status,
    server_status.project,
    server_status.domain
FROM test_fail_issues
    INNER JOIN server_status ON test_fail_issues.job_name = server_status.job_name
WHERE error_name LIKE "%@param1@%";