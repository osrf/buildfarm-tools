-- Add composite indexes to reduce full scans and temporary indexes during
-- active regression dashboard queries.

CREATE INDEX IF NOT EXISTS idx_tf_job_build
ON test_failures(job_name, build_number);

CREATE INDEX IF NOT EXISTS idx_tf_err_pkg_job_build
ON test_failures(error_name, package_name, job_name, build_number);

CREATE INDEX IF NOT EXISTS idx_tf_err_pkg_job_age_build
ON test_failures(error_name, package_name, job_name, age, build_number);

CREATE INDEX IF NOT EXISTS idx_bs_build_datetime
ON build_status(build_datetime);

CREATE INDEX IF NOT EXISTS idx_bs_job_datetime_build
ON build_status(job_name, build_datetime, build_number);

CREATE INDEX IF NOT EXISTS idx_bs_datetime_job_build
ON build_status(build_datetime, job_name, build_number);

CREATE INDEX IF NOT EXISTS idx_bs_job_build_with_results
ON build_status(job_name, build_number)
WHERE (COALESCE(passed, 0) + COALESCE(failures, 0) + COALESCE(skipped, 0)) > 0;

CREATE INDEX IF NOT EXISTS idx_tfi_err_pkg_job_status_issue
ON test_fail_issues(error_name, package_name, job_name, status, github_issue);
