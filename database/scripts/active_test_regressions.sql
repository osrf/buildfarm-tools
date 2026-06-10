-- Collapse issue tracking rows to one linked GitHub issue per test/package/job.
WITH issue_links AS (
  SELECT
    tfi.error_name AS test_name,
    tfi.package_name AS package,
    tfi.job_name,
    MAX(
      CASE
        WHEN tfi.status != 'OBLIVIATED' AND tfi.github_issue IS NOT NULL AND tfi.github_issue != ''
          THEN tfi.github_issue
      END
    ) AS linked_issue
  FROM test_fail_issues tfi
  GROUP BY tfi.error_name, tfi.package_name, tfi.job_name
),
-- Rebuild the set of affected platforms from the shared active-failure view.
platforms AS (
  SELECT DISTINCT
    af.test_name,
    af.package,
    af.os,
    af.arch
  FROM active_failures af
)
SELECT
  af.test_name,
  af.package,
  MIN(af.build_date) AS first_seen_date,
  MAX(af.consecutive_failures) AS consecutive_failures,
  (
    SELECT json_group_array(json_object('os', p.os, 'arch', p.arch))
    FROM platforms p
    WHERE p.test_name = af.test_name
      AND p.package = af.package
  ) AS affected_platforms,
  MAX(il.linked_issue) AS linked_issue
-- Aggregate to one row per test/package and keep the most relevant issue link.
FROM active_failures af
LEFT JOIN issue_links il
  ON il.test_name = af.test_name
 AND il.package = af.package
 AND il.job_name = af.job_name
GROUP BY af.test_name, af.package
ORDER BY consecutive_failures DESC, first_seen_date ASC;
