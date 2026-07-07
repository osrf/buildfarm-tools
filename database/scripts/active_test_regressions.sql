WITH platforms_distinct AS (
  SELECT DISTINCT
    af.test_name,
    af.package,
    af.os,
    af.arch
  FROM active_failures af
),
platforms_json AS (
  SELECT 
    test_name,
    package,
    json_group_array(json_object('os', os, 'arch', arch)) AS affected_platforms
  FROM platforms_distinct
  GROUP BY test_name, package
)
SELECT
  af.test_name,
  af.package,
  MIN(af.build_date)           AS first_seen_date,
  MAX(af.consecutive_failures) AS consecutive_failures,
  pj.affected_platforms,
  MAX(il.linked_issue)         AS linked_issue
FROM active_failures af
LEFT JOIN platforms_json pj
  ON pj.test_name = af.test_name
 AND pj.package   = af.package
LEFT JOIN issue_links il
  ON il.test_name = af.test_name
 AND il.package   = af.package
 AND il.job_name  = af.job_name
GROUP BY af.test_name, af.package
ORDER BY consecutive_failures DESC, first_seen_date ASC;
