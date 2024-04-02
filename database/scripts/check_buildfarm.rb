#!/usr/bin/env ruby

require_relative 'lib/buildfarm_tools'
require "optparse"
require "ostruct"

options = {}
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} \"performance connext rep fastrtps-dynamic\""
  o.on "-e", "--exclude EXCLUDE_JOBS", "A list of string separated by spaces that represent the regex on a job name that you want to exclude" do |exclude|
    options[:exclude] = exclude.split(" ")
  end
  o.on("-h", "--help", "Prints this help") do
    puts o
    exit
  end
end
optparser.parse!(ARGV)
if options[:exclude].nil?
  options[:exclude] = []
end

def get_issues_list(jobs_to_filter = [])
  # This function returns a map of possible problems in the buildfarm
  # The key of the map is the hash value of the flakiness output
  # The value is an Array of hashes with information about each test regression that belongs to the same problem
  filter_command = ""
  unless jobs_to_filter.empty?
    filter_command += " | grep -vE \"#{jobs_to_filter.join("|")}\""
  end
  test_regressions_today = parse_sql_output(%x{./sql_run.sh errors_check_last_build.sql #{filter_command}},
                                            keys = %w[job_name build_number error_name build_datetime node_name]
  )

  if test_regressions_today.nil?
    puts "No test regressions found"
    return {}
  end

  issues_map = Hash.new
  test_regressions_today.each do |tr|
    tr_flakiness = %x{./sql_run.sh calculate_flakiness_jobs.sql "#{tr['error_name']}" "15 days"}
    tr_flakiness_raw_out = parse_sql_output(tr_flakiness)
    if tr_flakiness_raw_out.nil?
      puts "WARNING: Error parsing flakiness output for '#{tr['error_name']}' in #{tr['job_name']}##{tr['build_number']}"
      next
    end
    tr_flakiness_output = tr_flakiness_raw_out.uniq { |item| item["job_name"] }
    tr_flakiness_output.map { |item|
      item['error_name'] = tr['error_name']
      item['github_issues'] = parse_known_issues(tr['error_name'])
      if item['job_name'] != tr['job_name']
        item['error_name'] = "  (also in: \"#{item['job_name']}\" job)"
        item['job_name'] = tr['job_name']
      end
    }

    unless issues_map.has_key?(tr_flakiness.hash)
      issues_map[tr_flakiness.hash] = []
    end

    # Group all issues by flakiness output
    issues_map[tr_flakiness.hash] += tr_flakiness_output
  end
  issues_map.each_pair do |key, value|
    value.sort_by! { |item| item['error_name'] }.reverse!.uniq! { |item| item['error_name'] }
  end
end

def print_issues(issue_list)
  # This function prints the hash returned by get_issues_list function in a human readable format

  i = 1
  issue_list.each do |value|
    puts "Issue ##{i} in #{value[0]['job_name']}"
    puts "- Failing #{value[0]['failure_percentage']}% in #{value[0]['failure_count']} out of #{value[0]['build_count']} builds"
    value.each do |tr|
      print "\t#{tr['error_name']}"
      unless tr["github_issues"].empty?
        print " (known issue in: #{tr['github_issues'].map { |item| "#{item[:github_issue]} - #{item[:status]}" }.join(" | ")})"
      end
      puts
    end
    puts
    i += 1
  end
end

unless options[:exclude].empty?
  puts "Excluding '#{options[:exclude].join(", ")}' jobs"
end

issues = get_issues_list(options[:exclude]).values.sort_by { |issue| issue[0]['failure_count'].to_f }.reverse
print_issues(issues)
