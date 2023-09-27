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
  STDERR.puts "Unable to find test data for domain #{options.domain}"
  exit(1)
end

unless Dir.exist? File.join(TESTDB_DIR, options.domain, options.job)
  STDERR.puts "Unable to find test data for job #{options.domain}/#{options.job}"
  exit(1)
end

job_dir = File.join(TESTDB_DIR, options.domain, options.job)
builds = Dir.each_child(job_dir).sort_by{|build_id| build_id.to_i}
builds.reverse! unless options.reverse
builds = builds.take(options.limit) if options.limit
total_runs = 0
matching_runs = 0

builds.each do |build_dir|
  build_id = build_dir.to_i
  # This will search all builds looking for a specific text
  filename = File.join(job_dir, build_dir, "build.txt")
  unless File.exist? filename
    #STDERR.puts "Result file missing for #{build_id}"
    next
  end

  total_runs += 1
  # (TO-DO): characters '[' and ']' have to be backslashed for grep to work
  # Get lines with error:
  #output = %x{cat #{filename} | grep -A 5 -B 5 '#{ARGV.join(' ')}'}
  output = %x{cat #{filename} | grep '#{ARGV.join(' ')}'}
  if output != '' then
    puts ""
    puts "#### BEGIN build##{build_id} AND #{ARGV.join(' ')}"
    puts output
    puts "#### END #{build_id}"
    matching_runs += 1
  #else then
  #  puts "No results"    
  end

end

puts("Total amount of builds checked: #{total_runs}")
puts("Total amount of builds matching pattern: #{matching_runs}")
puts("Match percentage: #{(matching_runs.to_f/total_runs)*100.0}")
