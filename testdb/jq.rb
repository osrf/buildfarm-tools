#!/usr/bin/env ruby

require "optparse"
require "ostruct"

options = OpenStruct.new
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} [-d DOMAIN_NAME] [-j JOB_NAME] PATTERN .."
  o.on "-d", "--domain DOMAIN_NAME", "The domain name of the test service. Probably ci.ros2.org or build.osrfoundation.org" do |domain|
    options.domain = domain
  end
  o.on "-j", "--job JOB_NAME", "The job name to search" do |job|
    options.job = job
  end

  o.on "-n", "--limit NUMBER", "Limit the number of builds to search back in history" do |limit|
    options.limit = limit.to_i
  end
end

optparser.parse!(ARGV)

TESTDB_DIR = ENV['TESTDB_DIR'] || File.join(ENV['HOME'], 'osrf', 'testdb')


unless Dir.exist? File.join(TESTDB_DIR, options.domain)
  STDERR.puts "Unable to find test data for #{options.domain}"
  exit(1)
end

unless Dir.exist? File.join(TESTDB_DIR, options.domain, options.job)
  STDERR.puts "Unable to find test data for #{options.domain}/#{options.job}"
  exit(1)
end

job_dir = File.join(TESTDB_DIR, options.domain, options.job)
builds = Dir.each_child(job_dir).sort_by{|build_id| build_id.to_i}
builds.reverse! unless options.reverse
builds = builds.take(options.limit) if options.limit

builds.each do |build_dir|
  build_id = build_dir.to_i
  # This will search builds with a test report available
  filename = File.join(job_dir, build_dir, "testreport.json.gz")
  unless File.exist? filename
    #STDERR.puts "Result file missing for #{build_id}"
    next
  end

  puts "#### BEGIN #{build_id} AND #{ARGV.join(' ')}"
  puts %x{zcat #{filename} | jq '#{ARGV.join(' ')}'}
  puts "#### END #{build_id}"
end


