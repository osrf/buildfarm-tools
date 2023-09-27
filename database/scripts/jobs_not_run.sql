CREATE temp TABLE GZ_JOBS AS
SELECT DISTINCT job_name
FROM build_status
WHERE (
        job_name LIKE '%ign%'
        OR job_name LIKE '%gz%'
        OR job_name LIKE '%gazebo%'
        OR job_name LIKE '%sdformat%'
    )
ORDER BY job_name DESC;
SELECT job_name
FROM GZ_JOBS
WHERE job_name NOT IN(
        SELECT DISTINCT job_name
        FROM build_status
        WHERE build_datetime > DATETIME('now', '-21 day')
            AND job_name IN GZ_JOBS
    );