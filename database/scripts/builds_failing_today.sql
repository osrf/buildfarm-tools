SELECT bf.job_name,
    bf.build_number,
    bs.build_datetime,
    bf.failure_reason,
    bf.last_section
FROM build_status bs
    INNER JOIN build_failures bf ON bs.build_number = bf.build_number
    AND bs.job_name = bf.job_name
WHERE bs.build_datetime > DATETIME('now', '-1 day')