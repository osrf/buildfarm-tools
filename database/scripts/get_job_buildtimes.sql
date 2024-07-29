SELECT build_datetime,
    build_number,
    DATE(build_datetime),
    status,
    buildtime
FROM build_status
WHERE job_name LIKE "%@param1@%"
ORDER BY build_number DESC;