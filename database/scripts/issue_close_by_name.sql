UPDATE test_fail_issues
SET status = "CLOSED"
WHERE status = "OPEN"
    AND error_name = "@param1@"
    AND job_name = "@param2@"