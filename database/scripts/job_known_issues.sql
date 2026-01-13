-- SQL Srcipt to find which known issues are affecting a job.
-- Usage: `./sql_run.sh job_known_issues.sql <job_name_pattern>`
-- Additionally, you can apply formating using the following awk command:
-- `| awk -F '|' '{print "- ["$1"#"$2"]("$NF"), on "$3": `"$4"`"}'`

SELECT test_failures.job_name,
	max(build_status.build_number) as last_failure,
	DATE(max(build_status.build_datetime)) as last_failure_date,
	test_fail_issues.github_issue,
	server_status.domain || '/job/' || test_failures.job_name || '/' || MAX(test_failures.build_number) AS reference_build
FROM test_failures
	INNER JOIN server_status ON server_status.job_name == test_failures.job_name
	INNER JOIN build_status ON build_status.build_number == test_failures.build_number
	AND build_status.job_name == test_failures.job_name
	INNER JOIN test_fail_issues ON test_fail_issues.error_name == test_failures.error_name
	AND test_fail_issues.job_name == test_failures.job_name
WHERE test_failures.job_name LIKE '%@param1@%'
	AND test_fail_issues.status == 'OPEN'
GROUP BY test_failures.job_name,
	test_fail_issues.github_issue
ORDER BY build_status.build_datetime DESC