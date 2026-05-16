SELECT 
    s.domain,
    b.job_name,
    b.build_number,
    b.buildtime / 60000.0 as buildtime_min,
    b.build_datetime
FROM build_status b
JOIN server_status s ON b.job_name = s.job_name
WHERE 
    s.domain IN ('https://ci.ros2.org', 'http://build.ros2.org')
    AND b.status IN ('SUCCESS', 'UNSTABLE')
ORDER BY b.build_datetime