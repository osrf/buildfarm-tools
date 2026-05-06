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
    report_regressions_all = BuildfarmToolsLib::test_regressions_all(filter_known: true).freeze # Freeze as this is a read-only variable
    report_regressions_consecutive = BuildfarmToolsLib::test_regressions_today(filter_known: true, only_consistent: true, group_issues: true, report_regressions: report_regressions_all)
    report_flaky_regressions = BuildfarmToolsLib::flaky_test_regressions(filter_known: true, group_issues: true, report_regressions: report_regressions_all)
    
    report = {
        'urgent' => {
            'build_regressions' => BuildfarmToolsLib::build_regressions_today(filter_known: true),
            'build_regressions_known' => [],
            'test_regressions_consecutive' => report_regressions_consecutive,
            'test_regressions_flaky' => report_flaky_regressions,
       },
       'maintenance' => {
            'jobs_last_success_date' => BuildfarmToolsLib::jobs_last_success_date(older_than_days: 7),
            'gh_issues_reported' => [],
            'tests_disabled' => [],
       },
       'pending' => {
           'test_regressions_all' => BuildfarmToolsLib::test_regressions_all,
       }
    }


    File.open(report_name, 'w') do |f|
        # Build regressions known: group by distinct github_issue and enrich with reference build, age, errors and reports
        begin
            known_groups = BuildfarmToolsLib::test_regressions_known
            # Keep only groups that include build_regression errors and ensure distinct by github_issue
            known_groups.select! do |issue_list|
                issue_list.any? { |i| i['error_name'] == BuildfarmToolsLib::BUILD_REGRESSION_ERROR_NAME }
            end

            report['urgent']['build_regressions_known'] = known_groups.map do |issue_list|
                first = issue_list.first
                # Find an entry within the group that is a build_regression and try to get a reference build
                br_entry = issue_list.find { |i| i['error_name'] == BuildfarmToolsLib::BUILD_REGRESSION_ERROR_NAME } || first
                occ = BuildfarmToolsLib.error_appearances_in_job(br_entry['error_name'], br_entry['job_name'])
                reference = occ.empty? ? nil : occ.first

                {
                    'github_issue' => first['github_issue'],
                    'reference_build' => reference || { 'job_name' => br_entry['job_name'], 'build_number' => 'N/A', 'build_datetime' => first['created_at'], 'failure_reason' => br_entry['error_name'], 'domain' => first['domain'] },
                    'age' => reference && reference['age'] ? reference['age'] : -1,
                    'failure_datetime' => reference && reference['build_datetime'] ? reference['build_datetime'] : first['created_at'],
                    'errors' => issue_list.map { |i| i['error_name'] }.uniq,
                    'reports' => issue_list.map { |i| { 'github_issue' => i['github_issue'], 'status' => i['status'] } }.uniq
                }
            end
        rescue StandardError => _e
            report['urgent']['build_regressions_known'] = []
        end

        f.write(report.to_json)
    end
end

generate_report(options[:report_name], options[:exclude])
puts options[:report_name]
