SELECT error_name,
    github_issue
FROM test_fail_issues
WHERE status IN (
    "COMPLETED",
    "OBLIVIATED",
    "DISABLED"
)
GROUP BY github_issue;