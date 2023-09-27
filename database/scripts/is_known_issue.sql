SELECT error_name,
    job_name,
    github_issue,
    status
FROM test_fail_issues
WHERE error_name LIKE "%@param1@%";