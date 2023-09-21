-- The only problem with this is that it will need / to be escaped in the parameter
UPDATE test_fail_issues
SET status = "CLOSED"
WHERE status = "OPEN"
    AND github_issue = "@param1@"