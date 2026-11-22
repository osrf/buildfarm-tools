#!/usr/bin/env ruby
# frozen_string_literal: true

# Manually create an issue / error to track in the buildfarm

require_relative 'lib/buildfarm_tools'

USAGE = "Usage: #{$PROGRAM_NAME} [error_name] [package_name] [job_name] [github_issue]".freeze

if ['-h', '--help'].include? ARGV.first
  puts USAGE
  exit(0)
end

if ARGV.length < 4
  warn 'ERROR, this script takes at least 4 parameters'
  warn USAGE
  exit(1)
end

error_name, package_name, job_name, github_issue = ARGV
exit(BuildfarmToolsLib.add_known_issue(error_name, job_name, github_issue, package_name: package_name))
