SELECT job_name, last_success_time
FROM (
    SELECT bs.job_name, MAX(bs.build_datetime) AS last_success_time
    FROM build_status bs
    INNER JOIN server_status ss ON bs.job_name = ss.job_name
    WHERE bs.status = 'SUCCESS'
    GROUP BY bs.job_name
) AS last_success_times
ORDER BY last_success_time ASC;