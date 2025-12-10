#!/usr/bin/env ruby

require "fileutils"
require "json"
require "net/http"
require "base64"
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
  "buildlog" => DataType.new("consoleText", "build.txt")
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

def jenkins_auth_params
  if ENV['JENKINS_USERNAME'] && ENV['JENKINS_API_TOKEN'] then
    puts "Using Jenkins Authentication"
    [ENV['JENKINS_USERNAME'], ENV['JENKINS_API_TOKEN']]
  else
    nil
  end
end

auth = jenkins_auth_params
open_options = auth ? { :http_basic_authentication => auth } : {}

job_url = "https://#{options.domain}/job/#{options.job}/api/json"
job_data = JSON.load(URI(job_url).open(open_options))
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
    auth_header = if auth
                    username, token = auth
                    auth_string = Base64.strict_encode64("#{username}:#{token}")
                    { "Authorization" => "Basic #{auth_string}"}
                  else
                    {}
                  end
    request_headers = {}
    if data_type == "testreport"
      request_headers["Accept-encoding"] = "gzip"
    end
    request_headers.merge!(auth_header)
    response = http.request_get(urlpath, request_headers)
    if response.code == "200"
      File.write(filepath, response.body)
      STDOUT.puts "Downloaded #{options.job}/#{build_id}"
    else
      STDERR.puts "Unable to fetch #{urlpath}: [#{response.code}] #{response.message}"
    end
  end
end
