SELECT 
    github_issue,
    status,
    assignee,
    priority,
    created_at,
    issue_last_activity
FROM test_fail_issues
WHERE status != "CLOSED"
GROUP BY github_issue;