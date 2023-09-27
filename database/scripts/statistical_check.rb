#!/usr/bin/env ruby
#
require_relative 'lib/buildfarm_tools'
require "optparse"
require "ostruct"

# RESULT_LIMIT is the maximum number of errors that will be shown for each issue
RESULT_LIMIT = 5

options = {}
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} \"performance connext rep fastrtps-dynamic\""
  o.on "-e", "--exclude EXCLUDE_JOBS", "A list of string separated by spaces that represent the regex on a job name that you want to exclude" do |exclude|
    options[:exclude] = exclude.split(" ")
  end
  o.on "-t", "--time TIME_RANGE", "The time range to check for regressions. Default: 15 days" do |time|
    options[:time] = time
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
if options[:time].nil?
  options[:time] = "15 days"
end

def main(time_range = "15 days", jobs_to_filter = [])
  # This function returns a map of github issues with the list of errors that belong to each issue
  # The key of the map is the github issue number, the value is a hash of status (of the issue) and errors

  exclude_string = ""
  unless jobs_to_filter.empty?
    exclude_string = " | grep -vE \"#{jobs_to_filter.join("|")}\""
  end

  statistical_check_keys = %w[num_builds error_name job_name]
  statistical_check_ros = parse_sql_output(%x{./sql_run.sh errors_statistical_check_ros.sql "#{time_range}" | tail +2 #{exclude_string}}, keys = statistical_check_keys)
  statistical_check_gazebo = parse_sql_output(%x{./sql_run.sh errors_statistical_check_gazebo.sql "#{time_range}" | tail +2 #{exclude_string}}, keys = statistical_check_keys)

  statistical_result = statistical_check_gazebo + statistical_check_ros
  statistical_result.each do |line|
    line["github_issues"] = parse_known_issues(line["error_name"])
  end

  statistical_hash = Hash.new
  statistical_result.each do |line|
    if line["github_issues"].empty?
      line["github_issues"] = [{github_issue: "", status: "Not reported"}]
    end
    line["github_issues"].each do |issue|
      unless statistical_hash.has_key?(issue[:github_issue])
        statistical_hash[issue[:github_issue]] = {status: issue[:status].capitalize, errors: []}
      end
      statistical_hash[issue[:github_issue]][:errors].append(line)
    end
  end

  statistical_hash
end

def print_statistical_check(statistical_result)
  # This function prints the hash returned by main function in a human readable format

  statistical_result.each do |key, value|
    puts "#{value[:status]} Issue: #{key}"
    value[:errors].group_by { |tr| "#{tr["num_builds"]} times in #{tr["job_name"]}" }.each do |k, tr|
      puts "\t#{k}:"
      tr[0..RESULT_LIMIT-1].each do |line|
        puts "\t\t#{line["error_name"]}"
      end
      if tr.length > RESULT_LIMIT
        puts "\t\t(#{tr.length-RESULT_LIMIT} more errors not shown)"
      end
    end
  end
end

print_statistical_check(main(days = options[:time], jobs_to_filter = options[:exclude]))
