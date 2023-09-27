CREATE TABLE IF NOT EXISTS last_time_updated(
    job_name TEXT PRIMARY KEY NOT NULL,
    last_build_number int
);
