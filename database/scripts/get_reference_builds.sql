-- Usage:
-- ./sql_run.sh get_reference_builds.sql "<error>" 
-- ProTip: Pipe output to awk to have markdown results and paste directly into a report
--   <command> | awk -F '|' '{print "- ["$1"#"$2"]("$NF")"}'


SELECT
	test_failures.job_name,
	MAX(test_failures.build_number) AS last_failure,
	server_status.domain || '/job/' || test_failures.job_name || '/' || MAX(test_failures.build_number) AS reference_build
FROM
	test_failures
	JOIN build_status ON build_status.job_name = test_failures.job_name
	AND build_status.build_number = test_failures.build_number
	JOIN server_status ON test_failures.job_name = server_status.job_name
WHERE
	test_failures.error_name LIKE "%@param1@%"
	AND build_status.build_datetime >= DATE('now', '-15 days')
GROUP BY
	test_failures.job_name
