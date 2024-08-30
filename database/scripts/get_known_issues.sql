SELECT error_name,
    test_fail_issues.job_name,
    github_issue,
    status,
    server_status.project,
    server_status.domain
FROM test_fail_issues
    INNER JOIN server_status ON server_status.job_name = test_fail_issues.job_name
WHERE status LIKE "%@param1@%";
