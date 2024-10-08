SELECT tf.job_name,
    tf.build_number,
    tf.error_name,
    bs.build_datetime,
    bs.node_name,
    tf.age,
    server_status.project,
    server_status.domain
FROM build_status bs
    INNER JOIN last_time_updated lt ON (
        lt.last_build_number = bs.build_number
        AND lt.job_name = bs.job_name
    )
    INNER JOIN test_failures tf ON (
        lt.last_build_number = tf.build_number
        AND lt.job_name = tf.job_name
    )
    INNER JOIN server_status ON server_status.job_name = tf.job_name
WHERE bs.build_datetime > DATETIME('now', '-4 days') -- Outdated job threshold
ORDER BY bs.job_name DESC
