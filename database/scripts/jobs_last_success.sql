SELECT last_success_times.job_name,
    last_success_times.last_success_time,
    server_status.project,
    server_status.domain
FROM (
    SELECT bs.job_name, MAX(bs.build_datetime) AS last_success_time
    FROM build_status bs
    INNER JOIN server_status ss ON bs.job_name = ss.job_name
    WHERE bs.status = 'SUCCESS'
    GROUP BY bs.job_name
) AS last_success_times
INNER JOIN server_status ON last_success_times.job_name = server_status.job_name
ORDER BY last_success_time ASC;