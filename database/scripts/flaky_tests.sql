-- Collect failing runs in the 20-day window. Platform labels come from
-- job_platforms; issue links come from the issue_links view.
WITH failure_runs_20 AS (
  SELECT DISTINCT
    tf.error_name AS test_name,
    tf.package_name AS package,
    tf.job_name,
    tf.build_number,
    bs.build_datetime,
    jp.platform_os AS os,
    jp.platform_arch AS arch
  FROM test_failures tf
  JOIN build_status bs
    ON bs.job_name = tf.job_name
   AND bs.build_number = tf.build_number
  LEFT JOIN job_platforms jp
    ON jp.job_name = tf.job_name
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-20 days')
    AND bs.status IN ('SUCCESS', 'FAILURE', 'UNSTABLE')
),
candidate_jobs AS (
  SELECT DISTINCT
    fr.test_name,
    fr.package,
    fr.job_name
  FROM failure_runs_20 fr
),
runs_20 AS (
  -- All observed runs for candidate jobs in the same 20-day window.
  SELECT DISTINCT
    cj.test_name,
    cj.package,
    bs.job_name,
    bs.build_number
  FROM candidate_jobs cj
  JOIN build_status bs
    ON bs.job_name = cj.job_name
  WHERE bs.build_datetime IS NOT NULL
    AND datetime(bs.build_datetime) >= datetime('now', '-20 days')
    AND bs.status IN ('SUCCESS', 'FAILURE', 'UNSTABLE')
),
counts AS (
  SELECT
    r.test_name,
    r.package,
    COUNT(*) AS total_runs,
    COUNT(fr.test_name) AS failure_count
  FROM runs_20 r
  LEFT JOIN failure_runs_20 fr
    ON fr.test_name = r.test_name
   AND fr.package = r.package
   AND fr.job_name = r.job_name
   AND fr.build_number = r.build_number
  GROUP BY r.test_name, r.package
),
flaky_candidates AS (
  SELECT
    c.test_name,
    c.package,
    c.failure_count,
    c.total_runs,
    ROUND(100.0 * c.failure_count / c.total_runs, 2) AS fail_rate_pct
  FROM counts c
  WHERE c.failure_count >= 3
    AND (c.total_runs - c.failure_count) >= 1
    AND c.total_runs > 0
),
platforms AS (
  SELECT DISTINCT
    fr.test_name,
    fr.package,
    fr.os,
    fr.arch
  FROM failure_runs_20 fr
  JOIN flaky_candidates fc
    ON fc.test_name = fr.test_name
   AND fc.package = fr.package
)
-- Drop any test that already belongs to the active regression set.
SELECT
  fc.test_name,
  fc.package,
  fc.failure_count,
  fc.total_runs,
  fc.fail_rate_pct,
  (
    SELECT json_group_array(json_object('os', p.os, 'arch', p.arch))
    FROM platforms p
    WHERE p.test_name = fc.test_name
      AND p.package = fc.package
  ) AS affected_platforms,
  il.linked_issue
FROM flaky_candidates fc
LEFT JOIN (
  SELECT test_name, package, MAX(linked_issue) AS linked_issue
  FROM issue_links
  GROUP BY test_name, package
) il
  ON il.test_name = fc.test_name
 AND il.package = fc.package
WHERE NOT EXISTS (
  SELECT 1
  FROM active_failures af
  WHERE af.test_name = fc.test_name
    AND af.package = fc.package
)
ORDER BY fc.failure_count DESC, fc.fail_rate_pct DESC, fc.test_name ASC;
