#!/usr/bin/env ruby

require "fileutils"
require "json"
require "net/http"
require "open-uri"
require "optparse"
require "ostruct"
require "zlib"

options = OpenStruct.new
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} -d DOMAIN_NAME -j JOB_NAME -c COUNT DATA_TYPE"
  o.on "-d", "--domain DOMAIN_NAME", "The domain name of the test service. Probably ci.ros2.org or build.osrfoundation.org" do |domain|
    options.domain = domain
  end
  o.on "-j", "--job JOB_NAME", "The job name to search" do |job|
    options.job = job
  end
  o.on "-c", "--count COUNT", "How many build results to fetch" do |count|
    options.count = count.to_i
  end
end

DataType = Struct.new(:urlpath, :filename)

optparser.parse!(ARGV)
VALID_DATA_TYPES = {
  "testreport" => DataType.new("testReport/api/json", "testreport.json.gz"),
  "buildlog" => DataType.new("consoleText", "build.txt"),
  "timestamps" => DataType.new("timestamps/?elapsed=HH:mm:ss.S&appendLog", "timestamps.txt")
}

data_types = []
while data_type = ARGV.shift
  unless VALID_DATA_TYPES.keys.include? data_type
    STDERR.puts "#{data_type} is not a valid data type"
    STDERR.puts "\tValid data types: #{VALID_DATA_TYPES.keys.join(", ")}"
    exit(1)
  end

  data_types << data_type
end

TESTDB_DIR = ENV['TESTDB_DIR'] || File.join(ENV['HOME'], 'osrf', 'testdb')

job_url = "https://#{options.domain}/job/#{options.job}/api/json"
job_data = JSON.load(URI(job_url).open)
last_completed_build = job_data["lastCompletedBuild"]["number"]
http = Net::HTTP.new("#{options.domain}", 443)
http.use_ssl = true
http.start


options.count.times do |i|
  build_id = last_completed_build - i
  next if build_id < 0
  build_dir = File.join(TESTDB_DIR, options.domain, options.job, build_id.to_s)
  FileUtils.mkdir_p build_dir
  data_types.each do |data_type|
    filepath = File.join(build_dir, VALID_DATA_TYPES[data_type].filename)
    next if File.exist? filepath
    urlpath = "/job/#{options.job}/#{build_id}/#{VALID_DATA_TYPES[data_type].urlpath}"
    # If Accept-encoding is not set Net::HTTP will automatically add compression headers and decompress the response.
    # If we want to preserve the compressed response we need to add the Accept-encoding header ourselves.
    compression_header = if data_type == "testreport" then { "Accept-encoding" => "gzip" } else nil end
    response = http.request_get(urlpath, compression_header)
    if response.code == "200"
      File.write(filepath, response.body)
      STDOUT.puts "Downloaded #{options.job}/#{build_id}"
    else
      STDERR.puts "Unable to fetch #{urlpath}: [#{response.code}] #{response.message}"
    end
  end
end
