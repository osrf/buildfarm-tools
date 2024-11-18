CREATE TABLE IF NOT EXISTS test_fail_issues(
    error_name VARCHAR(250) NOT NULL,
    package_name VARCHAR(70) NOT NULL,
    job_name VARCHAR(40) NOT NULL,
    github_issue VARCHAR(300),
    status TEXT DEFAULT "OPEN" CHECK (
        status IN (
            "OPEN",
            "CLOSED",
            "DISABLED",
            "WONTFIX"
        )
    ) NOT NULL ON CONFLICT REPLACE DEFAULT "OPEN"
);
