#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'lib/buildfarm_tools'

if ['-h', '--help', 'help'].include? ARGV.first
  puts "Usage: '#{$0} <github_issue_url>'\n" \
    'Write all the errors names in each line, ending with an empty newline'
  exit(0)
end

github_issue = ARGV.first

unless github_issue.include? 'https://github.com/'
  puts "Specify github issue using '#{$0} <github_issue_url>'"
  exit(1)
end

errors = []
puts 'Enter all error names:'
while true
  err = $stdin.gets.chomp
  break if err.empty?

  errors << err
end

count = 0
errors.each do |error_name|
  BuildfarmToolsLib.test_regression_flakiness(error_name).each do |line|
    exit_status = BuildfarmToolsLib.add_known_issue(error_name, line['job_name'], github_issue)
    raise BuildfarmToolsLib::BuildfarmToolsError unless exit_status.zero?

    count += 1
  end
end
puts "Added #{count} lines to known issues"
