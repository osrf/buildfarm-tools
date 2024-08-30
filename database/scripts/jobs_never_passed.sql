SELECT bs.job_name,
    COUNT(*) as failed_build_count,
    server_status.project,
    server_status.domain
FROM build_status bs
INNER JOIN server_status ON server_status.job_name = bs.job_name
WHERE bs.job_name NOT IN (
    SELECT job_name
    FROM build_status
    WHERE status = 'SUCCESS'
)
GROUP BY bs.job_name
ORDER BY failed_build_count DESC;