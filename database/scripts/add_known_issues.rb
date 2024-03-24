#!/usr/bin/env ruby

require 'optparse'

options = {
  jobs: [],
  tests_regressions: [],
  github_issue: ''
}

opt_parser = OptionParser.new do |opts|
  opts.banner = "Usage: #{$0} [options]"

  opts.on('-j', '--jobs JOB1,JOB2,...', Array, 'Job(s) separated by commas') do |j|
    options[:jobs] += j
  end

  opts.on('-i', '--issue ISSUE', String, 'Github Issue where the regression is reported') do |i|
    options[:github_issue] = i
  end

  opts.on('-h', '--help', 'Display this help') do
    puts opts
    exit
  end
end

opt_parser.parse!


puts 'Enter all test regressions line by line (empty line to finish):'
puts '> ProTip: You can copy and paste from the job test results'

line = gets.chomp
while line != ''
  options[:tests_regressions].push(line)
  line = gets.chomp
end

(options[:jobs]).each do |j|
  (options[:tests_regressions]).each do |tr|
    puts "Adding #{tr} in #{j} for issue #{options[:github_issue]}"
    if `./issue_save_new.sh #{tr} #{tr.split('.', 2)[0]} #{j} #{options[:github_issue]}`.include? 'ERROR'
      puts "ERROR: Something went wrong while adding #{tr} in #{j} for issue #{options[:github_issue]}"
      exit 1
    end
  end
end


