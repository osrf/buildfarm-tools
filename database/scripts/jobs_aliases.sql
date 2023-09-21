-- Temp tables used to filter some of the results
CREATE temp TABLE ROS_JOBS AS
SELECT DISTINCT job_name
FROM build_status
WHERE (
        job_name NOT LIKE '%ign%'
        AND job_name NOT LIKE '%gz%'
        AND job_name NOT LIKE '%gazebo%'
        AND job_name NOT LIKE '%sdformat%'
    )
ORDER BY job_name DESC;
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
CREATE temp TABLE ROS_ROLLING_JOBS AS
SELECT DISTINCT job_name
FROM build_status
WHERE job_name NOT LIKE '%ign%'
    AND job_name NOT LIKE '%gz%'
    AND job_name NOT LIKE '%gazebo%'
    AND job_name NOT LIKE '%Gci%'
    AND job_name NOT LIKE '%Fci%'
    AND job_name NOT LIKE '%repeated%'
    AND job_name NOT LIKE '%sdformat%'
ORDER BY job_name DESC;
CREATE temp TABLE ROS_ROLLING_JOBS_PRIORITY AS
SELECT DISTINCT job_name
FROM build_status
WHERE job_name NOT LIKE '%ign%'
    AND job_name NOT LIKE '%gz%'
    AND job_name NOT LIKE '%gazebo%'
    AND job_name NOT LIKE '%Gci%'
    AND job_name NOT LIKE '%Fci%'
    AND job_name NOT LIKE '%repeated%'
    AND job_name NOT LIKE '%osx%'
    AND job_name NOT LIKE '%win_rep%'
    AND job_name NOT LIKE '%rhel%'
    AND job_name NOT LIKE '%focal%'
    AND job_name NOT LIKE '%connext%'
    AND job_name NOT LIKE '%sdformat%'
ORDER BY job_name DESC;