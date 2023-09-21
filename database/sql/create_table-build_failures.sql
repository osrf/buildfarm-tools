CREATE TABLE IF NOT EXISTS build_failures (
    job_name TEXT,
    build_number INTEGER,
    log_output TEXT,
    failure_reason TEXT,
    last_section TEXT,
    PRIMARY KEY (job_name, build_number)
);