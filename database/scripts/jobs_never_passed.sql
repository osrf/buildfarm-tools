SELECT bs.job_name,
    COUNT(*) as failed_build_count
FROM build_status bs
INNER JOIN server_status ss ON bs.job_name = ss.job_name
WHERE bs.job_name NOT IN (
    SELECT job_name
    FROM build_status
    WHERE status = 'SUCCESS'
)
GROUP BY bs.job_name
ORDER BY failed_build_count DESC;