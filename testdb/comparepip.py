#!/usr/bin/env ruby

## THIS FILE IS AN EXACT COPY OF THE comparebuildrepos.rb file
## Except that the comparison strings differ.
## TO-DO(blast545): Merge these two files together into a single tool to browse
## different sections of the log
require "fileutils"
require "net/http"
require "optparse"
require "ostruct"

options = OpenStruct.new
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} -d DOMAIN_NAME -j JOB_NAME -b BUILD1 -c BUILD2"
  o.on "-d", "--domain DOMAIN_NAME", "The domain name of the test service. Probably ci.ros2.org or build.osrfoundation.org" do |domain|
    options.domain = domain
  end
  o.on "-j", "--job JOB_NAME", "The job name to search" do |job|
    options.job = job
  end
  o.on "-b", "--build BUILD", "The first build number" do |build|
    options.build1 = build
  end
  o.on "-c", "--compare BUILD", "The second build number, to compare" do |compare|
    options.build2 = compare
  end
end

optparser.parse!(ARGV)

TESTDB_DIR = ENV['TESTDB_DIR'] || File.join(ENV['HOME'], 'osrf', 'testdb')

$http = Net::HTTP.new("#{options.domain}", 443)
$http.use_ssl = true
$http.start

def get_build_with_number(build_id, options)
  build_dir = File.join(TESTDB_DIR, options.domain, options.job, build_id.to_s)
  FileUtils.mkdir_p build_dir
  filepath = File.join(build_dir, "build.txt")
  if File.exist? filepath then return filepath
  end
  urlpath = "/job/#{options.job}/#{build_id}/consoleText"
  compression_header = nil
  response = $http.request_get(urlpath, compression_header)
  if response.code == "200"
    File.write(filepath, response.body)
  else
    STDERR.puts "Unable to fetch #{urlpath}: [#{response.code}] #{response.message}"
    filepath = nil
  end
  return filepath
end

def get_repos_file(build_id, options, build_file)
  build_dir = File.join(TESTDB_DIR, options.domain, options.job, build_id.to_s)
  FileUtils.mkdir_p build_dir
  filepath = File.join(build_dir, "build.pip")
  if File.exist? filepath then return filepath
  end

  # Open the build file
  f = File.open(build_file) { |f| f.read.encode("UTF-8", invalid: :replace) }
  str1_markerstring = "Installing collected packages"
  str2_markerstring = "# BEGIN SUBSECTION: import repositories"
  
  repos = f[/#{str1_markerstring}(.*?)#{str2_markerstring}/m, 1]
  File.open(filepath, 'w') { |file| file.write(repos) }
  return filepath  
end

# Fetch the first build console output
file1 = get_build_with_number(options.build1, options)
puts "Path to the first log: " + file1

# Output its repos file
if file1 == nil? then exit end
repos1 = get_repos_file(options.build1, options, file1)
#puts "Path to the first repos: " + repos1

# Fetch the second build console output
file2 = get_build_with_number(options.build2, options)
puts "Path to the second log: " + file2

# Output its repos file
if file2 == nil? then exit end
repos2 = get_repos_file(options.build2, options, file2)
#puts "Path to the second repos: " + repos2

# Run diff on them
puts "Running diff on them"
#puts ""

output = %x{diff -p -u --color=always #{repos1} #{repos2}}
if output != '' then
  puts output
else
  puts "No difference between the repo files"
end
