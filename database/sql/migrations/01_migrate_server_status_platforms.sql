-- One-time migration for existing buildfarmer.db snapshots.
-- This materializes the platform normalization rules in server_status so the
-- dashboard queries do not need to parse job names repeatedly.

ALTER TABLE server_status ADD COLUMN platform_os TEXT;
ALTER TABLE server_status ADD COLUMN platform_arch TEXT;

UPDATE server_status
SET
    platform_os = CASE
        WHEN job_name LIKE '%homebrew%' THEN 'homebrew'
        WHEN job_name LIKE '%debbuilder' THEN 'ubuntu'
        WHEN job_name LIKE '%osx%' THEN 'osx'
        WHEN job_name LIKE '%win%' OR job_name LIKE '%clwin%' OR job_name LIKE '%clowin%' THEN 'windows'
        WHEN job_name LIKE '%linux%'
          OR job_name LIKE '%jammy%'
          OR job_name LIKE '%noble%'
          OR job_name LIKE '%focal%'
          OR job_name LIKE '%rhel%'
          OR job_name LIKE '%resolute%' THEN 'linux'
        ELSE 'unknown'
    END,
    platform_arch = CASE
        WHEN job_name LIKE '%aarch64%' THEN 'aarch64'
        WHEN job_name LIKE '%debbuilder' THEN 'amd64'
        WHEN job_name LIKE 'nightly_linux%'
          OR job_name LIKE 'packaging%' THEN 'amd64'
        WHEN job_name LIKE '%arm64%' THEN 'arm64'
        WHEN job_name LIKE '%amd64%' THEN 'amd64'
        WHEN job_name LIKE '%win%' OR job_name LIKE '%clwin%' OR job_name LIKE '%clowin%' THEN 'amd64'
        ELSE 'unknown'
    END
WHERE platform_os IS NULL OR platform_arch IS NULL;