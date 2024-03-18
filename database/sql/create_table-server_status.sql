CREATE TABLE IF NOT EXISTS server_status(
    job_name TEXT PRIMARY KEY NOT NULL,
    server_status TEXT,
    release TEXT,
    os_name TEXT,
    project TEXT
);