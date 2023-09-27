CREATE TABLE IF NOT EXISTS build_status(
    job_name TEXT NOT NULL,
    build_number INT NOT NULL,
    build_datetime DATETIME NOT NULL,
    buildtime INT NOT NULL,
    status TEXT DEFAULT 'UNKNOWN' CHECK (
        status IN (
            'SUCCESS',
            'FAILURE',
            'ABORTED',
            'UNSTABLE',
            'UNKNOWN'
        )
    ) NOT NULL ON CONFLICT REPLACE DEFAULT 'UNKNOWN',
    log_size INT NOT NULL,
    failures INT,
    passed INT,
    skipped INT,
    node_name TEXT,
    PRIMARY KEY (job_name, build_number)
);