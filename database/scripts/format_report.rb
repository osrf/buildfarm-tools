#!/usr/bin/env ruby

require_relative 'lib/report_formatter'
require 'json'

report_name = ARGV.shift

report = JSON.load_file(report_name)

report['urgent']['build_regressions'] = ReportFormatter::build_regressions(report['urgent']['build_regressions'])

# Sample output:
puts report['urgent']['build_regressions']
