-- # Print the complete list of job names
SELECT DISTINCT job_name
FROM build_status
ORDER BY job_name DESC;