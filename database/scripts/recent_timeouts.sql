SELECT build_status.job_name,
	build_status.build_number,
	build_status.build_datetime,
	build_status.buildtime,
	build_status.status
FROM build_status
	JOIN server_status ON build_status.job_name == server_status.job_name
WHERE server_status.domain == '@param1@'
	AND build_status.buildtime > 32400000 -- 9 hours
	AND build_status.build_datetime > DATE('now',  '-60 days')
ORDER BY build_status.build_datetime DESC;

