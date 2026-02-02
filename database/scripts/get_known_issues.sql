SELECT
    test_fail_issues.github_issue,
    test_fail_issues.status,
    test_fail_issues.assignee,
    test_fail_issues.priority,
    test_fail_issues.created_at,
    test_fail_issues.issue_last_activity
FROM test_fail_issues
INNER JOIN server_status
    ON server_status.job_name = test_fail_issues.job_name
WHERE test_fail_issues.status LIKE "%@param1@%";
