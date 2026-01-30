SELECT
    t.github_issue,
    t.status,
    t.assignee,
    t.priority,
    t.created_at,
    t.issue_last_activity
FROM test_fail_issues t
INNER JOIN server_status s
    ON s.job_name = t.job_name
WHERE t.status LIKE "%@param1@%"
  AND t.github_issue IS NOT NULL;
