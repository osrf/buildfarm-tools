SELECT error_name,
    github_issue,
    status,
    job_name,
    server_status.project
FROM test_fail_issues
LEFT JOIN server_status ON test_fail_issues.job_name = server_status.job_name
WHERE status IN (
    "COMPLETED",
    "OBLIVIATED",
    "DISABLED"
)
GROUP BY github_issue, job_name;