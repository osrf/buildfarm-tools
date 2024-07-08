#!/usr/bin/env ruby

require_relative 'lib/buildfarm_tools'
require 'date'
require 'json'
require 'optparse'
require 'ostruct'

options = {}
optparser = OptionParser.new do |o|
    o.on "-e", "--exclude EXCLUDE_JOBS", "A list of string separated by spaces that represent the regex on a job name that you want to exclude" do |exclude|
        options[:exclude] = Set.new(exclude.split(" "))
    end
    o.on "-o" "--output OUTPUT", "Name of output report" do |out|
        options[:report_name] = out
    end
    o.on("-h", "--help", "Prints this help") do
        puts o
        exit
    end
end

optparser.parse!(ARGV)
options[:exclude] = Set.new() if options[:exclude].nil?
options[:report_name] = "buildfarm-report_#{DateTime.now.strftime("%Y-%m-%d_%H-%M")}.json" if options[:report_name].nil?

def generate_report(report_name, exclude_set)
    report = {
        'urgent' => {
            'build_regressions' => urgent_build_regressions = BuildfarmToolsLib::build_regressions_today(filter_known: true),
            'test_regressions_consecutive' => urgent_consistent_test_regressions = BuildfarmToolsLib::test_regressions_today(filter_known: true, only_consistent: true, group_issues: true),
            'test_regressions_flaky' => urgent_flaky_test_regressions = BuildfarmToolsLib::flaky_test_regressions(filter_known: true, group_issues: true),
       },
       'maintenance' => {
            'jobs_failing' => [],
            'gh_issues_reported' => [],
            'tests_disabled' => [],
       },
       'pending' => {
           'build_regressions_known' => [],
           'test_regressions_all' => [],
           'test_regressions_known' => [],
       }
    }


    File.open(report_name, 'w') do |f|
        f.write(report.to_json)
    end
end

generate_report(options[:report_name], options[:exclude])
puts options[:report_name]
