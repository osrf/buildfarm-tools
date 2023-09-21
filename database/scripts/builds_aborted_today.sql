SELECT job_name,
    build_number
FROM build_status
WHERE build_datetime > DATETIME('now', '-1 day')
    AND status = "ABORTED"
ORDER BY build_datetime DESC;