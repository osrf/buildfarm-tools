#!/usr/bin/env ruby

require "fileutils"
require "optparse"
require "ostruct"

options = OpenStruct.new
optparser = OptionParser.new do |o|
  o.banner = "Usage: #{$0} [-d DOMAIN_NAME] [-j JOB_NAME] [-b BUILD] [-p PACKAGE]"
  o.on "-d", "--domain DOMAIN_NAME", "The domain name of the test service. Probably ci.ros2.org or build.osrfoundation.org" do |domain|
    options.domain = domain
  end
  o.on "-j", "--job JOB_NAME", "The job name to search" do |job|
    options.job = job
  end
  o.on "-b", "--build BUILD", "The build to get output" do |build|
    options.build = build
  end
  o.on "-p", "--package PACKAGE", "The package to get the output" do |package|
    options.package = package
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

build_dir = File.join(TESTDB_DIR, options.domain, options.job, options.build.to_s)
FileUtils.mkdir_p build_dir
filepath = File.join(build_dir, "build.txt")
if File.exist? filepath then
  puts filepath
  package = options.package
  output = %x{sed -n '/Starting >>> #{package}/, /Finished <<< #{package}/p' #{filepath}}
  if output != '' then
    puts ""
    puts output
  end
else
  puts "ERROR, build job not found, forgot to use fetch?"
end
