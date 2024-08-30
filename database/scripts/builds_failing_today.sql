SELECT bf.job_name,
    bf.build_number,
    bs.build_datetime,
    bf.failure_reason,
    bf.last_section,
    server_status.project,
    server_status.domain
FROM build_status bs
    INNER JOIN build_failures bf ON bs.build_number = bf.build_number
    INNER JOIN server_status ON server_status.job_name = bf.job_name
    AND bs.job_name = bf.job_name
WHERE bs.build_datetime > DATETIME('now', '-1 day')