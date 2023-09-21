#!/usr/bin/env ruby

# Some funky metaprogramming to find a high performance JSON library.
# Once one is find bind a callable to its parse / load method
# If none of the custom ones is found use the stdlib json gem which is actually pretty okay.
jsonlibs = %w[simdjson oj]
json_parser = nil
begin
  while lib = jsonlibs.shift
    require lib
    json_parser = case lib
                  when "simdjson"
                    Simdjson.method :parse
                  when "oj"
                    Oj.method :load
                  end
    break
  end
rescue LoadError
  retry
end
if json_parser.nil?
  require "json"
  json_parser = JSON.method :load
end

require "open-uri"
require "optparse"
require "ostruct"
require "zlib"

options = OpenStruct.new
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} [-d DOMAIN_NAME] [-j JOB_NAME] PATTERN .."
  o.on "-d", "--domain DOMAIN_NAME", "The domain name of the test service. Probably ci.ros2.org or build.osrfoundation.org" do |domain|
    options.domain = domain
  end
  o.on "-j", "--job JOB_NAME", "The job name to search" do |job|
    options.job = job
  end
end

optparser.parse!(ARGV)

options.pattern = Regexp.union *ARGV

TESTDB_DIR = ENV['TESTDB_DIR'] || File.join(ENV['HOME'], 'osrf', 'testdb')

unless Dir.exist? File.join(TESTDB_DIR, options.domain)
  STDERR.puts "Unable to find test data for #{options.domain}"
  exit(1)
end

unless Dir.exist? File.join(TESTDB_DIR, options.domain, options.job)
  STDERR.puts "Unable to find test data for #{options.domain}/#{options.job}"
  exit(1)
end

total_runs = 0
matching_failed_cases = Hash.new {|hash, key| hash[key] = [] }
job_dir = File.join(TESTDB_DIR, options.domain, options.job)
Dir.each_child(job_dir).sort_by{|build_id| build_id.to_i}.reverse.each do |build_dir|
  build_id = build_dir.to_i
  filename = File.join(job_dir, build_dir, "testreport.json.gz")
  unless File.exist? filename
    #STDERR.puts "Result file missing for #{build_id}"
    next
  end
  gzfile = Zlib::GzipReader.open(filename)

  begin
    report = json_parser.call(gzfile.read)
  rescue => e
    STDERR.puts("ERROR parsing #{build_id}: #{e}")
    next
  end

  total_runs += 1
  gzfile.close
  report["suites"].each do |suite|
    suite["cases"].each do |testcase|
      next if %[PASSED FIXED SKIPPED].include? testcase["status"]
      complete_fail_name = testcase["className"] + "." + testcase["name"]
      if options.pattern.match complete_fail_name then
        matching_failed_cases[build_id] << complete_fail_name
      end
    end
  end
end

matching_failed_cases.keys.sort.reverse.each do |build_id|
  puts "Matching failures in #{options.domain}/#{options.job}##{build_id}"
  matching_failed_cases[build_id].each do |name|
    puts "\t" + name
  end
end

puts("Total amount of builds checked: #{total_runs}")
puts("Total amount of builds matching pattern: #{matching_failed_cases.size}")
puts("Flakyness percentage: #{(matching_failed_cases.size.to_f/total_runs)*100.0}")
