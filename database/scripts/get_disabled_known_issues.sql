SELECT error_name,
    github_issue
FROM test_fail_issues
WHERE status = "DISABLED"
GROUP BY github_issue;