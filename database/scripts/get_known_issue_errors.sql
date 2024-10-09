SELECT job_name,
    error_name
FROM test_fail_issues
WHERE github_issue = "@param1@"
GROUP BY github_issue,
    job_name;