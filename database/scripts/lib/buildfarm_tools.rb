# frozen_string_literal: true

require 'open3'

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

  def self.build_regressions_today(filter_known: false)
    # Keys: job_name, build_number, build_datetime, failure_reason, last_section
    out = run_command('./sql_run.sh builds_failing_today.sql')
    out.filter! { |e| !KNOWN_REASONS.include? e['failure_reason'] } if filter_known
    out
  end

  def self.known_issues(status: nil)
    # Keys: error_name, job_name, github_issue, status
    out = run_command('./sql_run.sh get_known_issues.sql')
    out.filter! { |e| e['status'] == status.upcase } unless status.nil?
    out
  end

  def self.error_appearances_in_job(test_name, job_name)
    # Keys: error_name, job_name, build_number, build_datetime, node_name
    run_command('./sql_run.sh error_appearances_in_job.sql', args: [test_name, job_name])
  end

  def self.test_regressions_today(filter_known: false, only_consistent: false, group_issues: false)
    # Keys: job_name, build_number, error_name, build_datetime, node_name
    out = run_command('./sql_run.sh errors_check_last_build.sql')
    if filter_known
      known_error_names = Set.new(known_issues(status: 'open').map { |e| e['error_name'] })
      out.filter! { |e| !known_error_names.include? e['error_name'] }
    end
    if only_consistent
      out.filter! { |tr| tr['age'].to_i >= CONSECUTIVE_THRESHOLD || tr['age'].to_i == WARNING_AGE_CONSTANT }
      out.sort_by! { |tr| -tr['age'].to_i }
    end
    if group_issues
      # Group by (job_name, age)
      out = out.group_by { |o| [o['job_name'], o['age']] }.to_a.map { |e| e[1] }
    end
    out
  end

  def self.flaky_test_regressions(filter_known: false, time_range: FLAKY_BUILDS_DEFAULT_RANGE)
    # Keys: job_name, build_number, error_name, build_datetime, node_name, flakiness
    out = []
    today_regressions = test_regressions_today(filter_known: filter_known)
    today_regressions.each do |tr|
      next if !tr['age'].to_i.nil? && tr['age'].to_i >= CONSECUTIVE_THRESHOLD

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
