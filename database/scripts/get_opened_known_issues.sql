SELECT error_name,
    github_issue
FROM test_fail_issues
WHERE status IN (
    "BLOCKED",
    "HELP WANTED",
    "PENDING FIX",
    "INVESTIGATING",
    "NOT ASSIGNED"
)
GROUP BY github_issue;