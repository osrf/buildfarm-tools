SELECT error_name,
    github_issue
FROM test_fail_issues
WHERE status = "OPEN"
GROUP BY github_issue;