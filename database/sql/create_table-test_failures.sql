CREATE TABLE IF NOT EXISTS test_failures(
    id INTEGER PRIMARY KEY NOT NULL,
    error_name TEXT NOT NULL,
    package_name TEXT NOT NULL,
    job_name TEXT NOT NULL,
    build_number INT NOT NULL
);