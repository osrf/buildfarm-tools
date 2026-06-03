WITH issue_rows AS (
    SELECT
        tfi.github_issue AS issue_id,
        CASE
            WHEN tfi.github_issue LIKE 'https://github.com/%/issues/%' THEN
                REPLACE(
                    REPLACE(
                        SUBSTR(tfi.github_issue, LENGTH('https://github.com/') + 1),
                        '/issues/',
                        '#'
                    ),
                    '/pull/',
                    '#'
                )
            ELSE tfi.github_issue
        END AS title,
        tfi.status,
        tfi.priority,
        tfi.assignee,
        date(tfi.issue_last_activity) AS last_activity_date,
        date(tfi.created_at) AS created_at,
        ROW_NUMBER() OVER (
            PARTITION BY tfi.github_issue
            ORDER BY date(tfi.issue_last_activity) DESC,
                     date(tfi.updated_at) DESC,
                     date(tfi.created_at) DESC,
                     tfi.status = 'OPEN' DESC,
                     tfi.job_name
        ) AS rn
    FROM test_fail_issues tfi
    WHERE tfi.github_issue IS NOT NULL
      AND tfi.github_issue != ''
),
last_seen AS (
    SELECT
        tfi.github_issue AS issue_id,
        MAX(date(bs.build_datetime)) AS last_seen_in_build_date
    FROM test_fail_issues tfi
    INNER JOIN test_failures tf
        ON tf.job_name = tfi.job_name
       AND tf.error_name = tfi.error_name
       AND tf.package_name = tfi.package_name
    INNER JOIN build_status bs
        ON bs.job_name = tf.job_name
       AND bs.build_number = tf.build_number
    WHERE bs.build_datetime IS NOT NULL
    GROUP BY tfi.github_issue
)
SELECT
    ir.issue_id,
    ir.title,
    ir.status,
    ir.priority,
    ir.assignee,
    ir.last_activity_date,
    ls.last_seen_in_build_date,
    CASE
        WHEN ls.last_seen_in_build_date IS NULL THEN 1
        WHEN julianday('now') - julianday(ls.last_seen_in_build_date) > 20 THEN 1
        ELSE 0
    END AS stale
FROM issue_rows ir
LEFT JOIN last_seen ls
    ON ls.issue_id = ir.issue_id
WHERE ir.rn = 1
  AND (
        ir.status = 'OPEN'
        OR (
            ir.status != 'OPEN'
            AND ls.last_seen_in_build_date >= date('now', '-30 days')
        )
  )
ORDER BY ir.last_activity_date DESC, ir.issue_id ASC;