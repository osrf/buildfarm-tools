SELECT DISTINCT
    github_issue,
    status
FROM test_fail_issues
WHERE status LIKE "%@param1@%";
