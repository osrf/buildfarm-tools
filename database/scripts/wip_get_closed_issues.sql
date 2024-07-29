SELECT test_failures.error_name,
	   test_failures.job_name,
	   test_failures.build_number,
	   test_fail_issues.github_issue,
	   build_status.build_datetime
FROM test_fail_issues 
JOIN test_failures ON 
	test_fail_issues.error_name == test_failures.error_name AND
	test_fail_issues.job_name == test_failures.job_name
JOIN build_status ON
 	build_status.job_name == test_fail_issues.job_name AND
 	build_status.build_number == test_failures.build_number
WHERE test_fail_issues.status LIKE "CLOSED"
ORDER BY build_status.build_datetime DESC;
