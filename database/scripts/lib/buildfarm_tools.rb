# frozen_string_literal: true

require 'open3'
require 'csv'

module BuildfarmToolsLib
  class BuildfarmToolsError < RuntimeError; end

  KNOWN_REASONS = Set.new([
                            'Jenkins channel closing down (Agent disconnected)',
                            'Network error: Failed to clone github repo'
                          ])

  CONSECUTIVE_THRESHOLD = 3
  FLAKY_BUILDS_THRESHOLD = 3
  FLAKY_BUILDS_DEFAULT_RANGE = '15 days'
  WARNING_AGE_CONSTANT = -1

  JOB_PRIORITIES = CSV.read('lib/job_priorities.csv', converters: :numeric).to_h

  def self.build_regressions_today(filter_known: false)
    # Keys: job_name, build_number, build_datetime, failure_reason, last_section
    out = run_command('./sql_run.sh builds_failing_today.sql')
    out.filter! { |e| !KNOWN_REASONS.include? e['failure_reason'] } if filter_known
    out
  end

  def self.known_issues(status: '')
    # Keys: error_name, job_name, github_issue, status
    run_command("./sql_run.sh get_known_issues.sql", args: [status.upcase])
  end

  def self.error_appearances_in_job(test_name, job_name)
    # Keys: error_name, job_name, build_number, build_datetime, node_name
    run_command('./sql_run.sh error_appearances_in_job.sql', args: [test_name, job_name])
  end

  def self.test_regressions_all(filter_known: false, include_reports: true)
    # Keys: job_name, build_number, error_name, build_datetime, node_name
    out = run_command('./sql_run.sh errors_check_last_build.sql')
    if filter_known
      known_errors = known_issues(status: 'open')
      known_errors.concat known_issues(status: 'disabled')
      known_error_names = Set.new(known_errors.map { |e| e['error_name'] })
      out.filter! { |e| !known_error_names.include? e['error_name'] }
    end
    if include_reports
      out.each do |e|
        e['reports'] = test_regression_reported_issues e['error_name']
      end
    end
    out
  end

  def self.test_regressions_today(filter_known: false, only_consistent: false, group_issues: false, report_regressions: [])
    # Keys: job_name, build_number, error_name, build_datetime, node_name
    out = report_regressions.clone(freeze: false) # Clone because we return a modified version
    out = test_regressions_all(filter_known: filter_known) if out.empty?
    if only_consistent
      out.filter! { |tr| tr['age'].to_i >= CONSECUTIVE_THRESHOLD || tr['age'].to_i == WARNING_AGE_CONSTANT }
      out.sort_by! { |tr| -tr['age'].to_i }
    end
    out.each do |e|
      e['reports'] = test_regression_reported_issues e['error_name']
    end
    if group_issues
      # Group by (job_name, age)
      out = out.group_by { |o| [o['job_name'], o['age']] }.to_a.map { |e| e[1] }
    end
    out
  end

  def self.flaky_test_regressions(filter_known: false, group_issues: false, time_range: FLAKY_BUILDS_DEFAULT_RANGE, report_regressions: [])
    # Keys: job_name, build_number, error_name, build_datetime, node_name, flakiness
    out = []
    today_regressions = report_regressions
    today_regressions = test_regressions_all(filter_known: filter_known) if today_regressions.empty?
    today_regressions.each do |tr|
      next if !tr['age'].to_i.nil? && (tr['age'].to_i >= CONSECUTIVE_THRESHOLD || tr['age'].to_i == WARNING_AGE_CONSTANT)

      tr_flakiness = test_regression_flakiness(tr['error_name'], time_range: time_range)
      if tr_flakiness.nil?
        puts "WARNING: Error parsing flakiness output for '#{tr['error_name']}' in #{tr['job_name']}##{tr['build_number']}"
        next
      end
      if tr_flakiness.any? { |item| item['failure_count'].to_i >= FLAKY_BUILDS_THRESHOLD }
        tr['flakiness'] = tr_flakiness
        out << tr
      end
    end
    out.sort_by! { |e| -e['flakiness'][0]['failure_percentage'].to_f }
    if group_issues
      out = out.group_by { |o| o['flakiness'] }.values
    end
    out
  end

  def self.test_regression_flakiness(error_name, time_range: FLAKY_BUILDS_DEFAULT_RANGE)
    # Keys: job_name, last_fail, first_fail, build_count, failure_count, failure_percentage
    tr_flakiness = run_command('./sql_run.sh calculate_flakiness_jobs.sql', args:[error_name, time_range])
    tr_flakiness.sort_by { |e| -e['failure_percentage'].to_f }
  end

  def self.test_regression_reported_issues(error_name, status: nil)
    # Keys: github_issue, status
    is_known_issue = run_command('./sql_run.sh is_known_issue.sql', args: [error_name])
    is_known_issue.select! { |issue| issue['status'] == status } if status
    is_known_issue.map { |issue| { 'github_issue' => issue['github_issue'], 'status' => issue['status'] } }.uniq
  end

  def self.jobs_last_success
    run_command('./sql_run.sh jobs_last_success.sql')
  end

  def self.jobs_never_passed
    run_command('./sql_run.sh jobs_never_passed.sql')
  end

  def self.jobs_last_success_date(older_than_days: 0)
    # Keys: job_name, last_success
    out = []
    jobs_never_passed.each do |e|
      out << {"job_name" => e["job_name"], "last_success" => "Never"}
    end

    jobs_last_success.each do |e|
      last_success = DateTime.parse(e['last_success_time']) 
      next if last_success > (Date.today - older_than_days)
      out << {"job_name" => e["job_name"], "last_success" => last_success.strftime('%Y-%m-%d')}
    end
    out
  end

  def self.test_regressions_known
    out = known_issues(status: 'open')
    out.concat known_issues(status: 'disabled')
    out = out.group_by { |e| e["github_issue"] }.to_a.map { |e| e[1] }
    out.each do |error_list|
      priority = issue_priority(error_list.first["github_issue"])
      error_list.each do |error|
        error["priority"] = priority
      end
    end
    out
  end

  def self.issue_priority(issue_link)
    sql_out = run_command('./sql_run.sh get_known_issues_job_link.sql', args: [issue_link])
    errors = sql_out.map {|e| e['error_name']}.uniq
    jobs = sql_out.map {|e| e['job_name']}.uniq

    error_score_jobs = {}

    errors.each do |e|
      jobs.each do |job|
        flaky_result = run_command('./sql_run.sh calculate_flakiness_jobs.sql', args: [e, FLAKY_BUILDS_DEFAULT_RANGE, job])
        next if flaky_result.empty?
        # This is not guaranteed to be 'not consistent', we need to re-check if the last 3 builds were failing because of this
        flaky_ratio = flaky_result.first['failure_percentage'].to_f/100.0

        job_priority = JOB_PRIORITIES[job]
        job_priority = job_priority*1.5 if flaky_ratio == 1
        
        error_score_jobs[job] = [] if error_score_jobs[job].nil?
        error_score_jobs[job] << (job_priority*flaky_ratio)
      end
    end
    
    # Get only maximum score for each job
    error_score_jobs.each_value.map {|e| e.max}.sum.round(3)
  end

  def self.run_command(cmd, args: [], keys: [])
    cmd += " '#{args.shift}'" until args.empty?
    begin
      Open3.popen3(cmd) do |_, o, _, _|
        parse_sql_output(o.read.chomp, keys)
      end
    rescue StandardError => e
      raise BuildfarmToolsError, e
    end
  end

  def self.parse_sql_output(output, keys = [])
    # This function parses the output of an SQL query and returns an array of hashes
    # The keys of the hashes are the column names of the SQL query or the keys passed as parameter
    # Note: The SQL query must be formatted using sql_run.sh command

    return [] if output.empty?

    output = output.split("\n")
    output_array = []
    keys = output.shift.split('|') if keys.empty?

    output.each do |line|
      line = line.split('|')
      line_hash = {}
      keys.each_index do |i|
        line_hash[keys[i]] = line[i]
      end
      output_array.append(line_hash)
    end
    output_array
  end
end
