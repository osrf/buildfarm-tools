# frozen_string_literal: true

require 'json'

module ReportFormatter
  JOB_URL_PATTERN = {
    /^gz|^sdformat|^ros_gz/ => 'https://build.osrfoundation.org/job/',
    /^[A-Z]ci/ => 'https://build.ros2.org/job/',
    /^nightly_|^packaging_/ => 'https://ci.ros2.org/job/',
  }

  def self.get_build_url(job_name, build_number)
    base_url = ""

    JOB_URL_PATTERN.each_pair do |pattern, url|
      if pattern.match? job_name
        base_url = url
        break
      end
    end

    "#{base_url}#{job_name}/#{build_number}"
  end

  def self.format_datetime(datetime)
    date, time = datetime.split
    hour, minute, _ = time.split(':')
    "#{date} #{hour}:#{minute}"
  end

  def self.build_regressions(br_array)
    table = "| Reference Build | Failure DateTime | Failure Reason |\n| -- | -- | -- |\n"
    br_array.each do |br_hash|
      reference_build = "[#{br_hash['job_name']}##{br_hash['build_number']}](#{get_build_url(br_hash['job_name'], br_hash['build_number'])})"
      table += "| #{reference_build} | #{format_datetime(br_hash['build_datetime'])} | #{br_hash['failure_reason']} |\n"
    end
    table
  end

  def self.format_report(report_hash)
    # Use <details> and <summary> tags to prevent long reports
    output_report = ""

    report_hash.each_pair do |category, subcategory_hash|
      output_report += "<details><summary><h1>#{category}</h1></summary>\n"
      subcategory_hash.each_pair do |subcategory, subcategory_report| # Assume that we're traversing a hash of hashes
        output_report += "<details><summary><h2>#{subcategory}</h2></summary>\n"
        
        # Subcategory report is plain markdown
        output_report += !subcategory_report.empty? ? "\n#{subcategory_report}\n" : "Emtpy!!"
        output_report += "</details>\n"
      end
      output_report += "</details>\n"
    end
    output_report
  end
end
