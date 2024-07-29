#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'lib/buildfarm_tools'
require 'json'
require 'date'

known_issues_list = parse_sql_output(%x{./sql_run.sh get_known_issues.sql}, %w[error_name job_name github_issue status])

known_issues_list.each do |ki|
  gh_info_raw = %x{gh issue view #{ki['github_issue']} --json title,state,updatedAt}
  gh_info = JSON.parse(gh_info_raw)
  gh_info['updatedAt'] = Date.parse(gh_info['updatedAt']) if gh_info['updatedAt']
  if gh_info['state'] == 'OPEN' and ki['status'] == 'OPEN' and gh_info['updatedAt'] < Date.today - 30
    puts "Issue #{ki['github_issue']} is open and has not been updated in the last 30 days"
  elsif gh_info['state'] == 'OPEN' and ki['status'] == 'CLOSED'
    last_error_output = %x{./sql_run.sh errors_get_last_ones.sql "#{ki['error_name']}" | grep #{ki['job_name']} | tail -n 1}
    _, _, job_name, build_number, last_time, _ = last_error_output.split('|')
    puts "Issue #{ki['github_issue']} is open but the last time it happened was #{last_time} in #{job_name}##{build_number}"
  elsif gh_info['state'] == 'CLOSED' and gh_info['updatedAt'] < (Date.today - 365)
    puts "Issue #{ki['github_issue']} is closed and hasn't been updated in the last year"
  end
end




