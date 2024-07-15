#!/usr/bin/env ruby

require_relative 'lib/report_formatter'
require 'optparse'
require 'json'

def compare_test_regressions(base, compare)
  compare.each do |tr_c|
    included = base.any? { |tr_b| (tr_b.first['job_name'] == tr_c.first['job_name']) && (tr_b.size >= tr_c.size) }
    tr_c.first['new'] = true unless included
  end
end

def compare_report(base, compare)
  compare_test_regressions(base['urgent']['test_regressions_consecutive'], compare['urgent']['test_regressions_consecutive'])
  compare_test_regressions(base['urgent']['test_regressions_flaky'], compare['urgent']['test_regressions_flaky'])
end

options = {}
optparser = OptionParser.new do |o|
  o.banner = "TODO"
  o.on "-b" "--base BASE_NAME", "Report of base report to compare" do |base|
    options[:base] = base
  end
  o.on "-c" "--compare COMPARE_NAME", "Report of new report to compare" do |compare|
    options[:compare] = compare
  end
  o.on "-h", "--help", "Prints this help" do
    puts o
    exit
  end
end

optparser.parse!(ARGV)

if options[:base] && options[:compare]
  report_name = options[:compare]
elsif options[:base].nil? && options[:compare].nil?
  report_name = ARGV.shift
else
  puts optparser
  exit
end

report = JSON.load_file(report_name)
if options[:base]
  base_report = JSON.load_file(options[:base])
  compare_report(base_report, report)
end

report['urgent']['build_regressions'] = ReportFormatter::build_regressions(report['urgent']['build_regressions'])
report['urgent']['test_regressions_consecutive'] = ReportFormatter::test_regressions_consecutive(report['urgent']['test_regressions_consecutive'])
report['urgent']['test_regressions_flaky'] = ReportFormatter::test_regressions_flaky(report['urgent']['test_regressions_flaky'])

puts ReportFormatter::format_report report
