# frozen_string_literal: true

require 'json'

module ReportFormatter

  TRACKED_PROJECTS = %w[ROS GAZEBO]

  def self.get_job_project(job_name)
    project_name = ""
    JOB_PROJECT_PATTERN.each_pair do |pattern, project|
      project_name = project if pattern.match? job_name
    end
    project_name
  end

  def self.format_reference_build(issue_hash)
    job_name = issue_hash['job_name']
    build_number = issue_hash['build_number']
    base_url = issue_hash['domain']

    "[#{job_name}##{build_number}](#{base_url}/job/#{job_name}/#{build_number})"
  end

  def self.format_datetime(datetime)
    date, time = datetime.split
    hour, minute, _ = time.split(':')
    "#{date} #{hour}:#{minute}"
  end

  def self.format_flakiness(flakiness_arr)
    table_head = "<thead><tr><th>Job Name</th><th>Last Fail</th><th>First Fail</th><th>Build Count</th><th>Failure Count</th><th>Failure Percentage</th></tr></thead>"
    table_body = ""
    flakiness_arr.each do |e|
      table_body += "<tr><td>#{e['job_name']}</td><td>#{e['last_fail']}</td><td>#{e['first_fail']}</td><td>#{e['build_count']}</td><td>#{e['failure_count']}</td><td>#{e['failure_percentage']}%</td></tr>"
    end
    table_body = "<tbody>#{table_body}</tbody>"
    table = "<table>#{table_head}#{table_body}</table>"
    table
  end

  def self.build_regressions(br_array)
    return "" if br_array.empty?
    table = "| Reference Build | Failure DateTime | Failure Reason |\n| -- | -- | -- |\n"
    br_array.each do |br_hash|
      reference_build = format_reference_build(br_hash)
      table += "| #{reference_build} | #{format_datetime(br_hash['build_datetime'])} | #{br_hash['failure_reason']} |\n"
    end
    table
  end

  def self.test_regressions_consecutive(tr_array)
    return "" if tr_array.empty?
    table = "| Reference build | Age | Failure DateTime | Errors | Reports |\n| -- | -- | -- | -- | -- |\n"
    warnings_table = table
    tr_array.each do |tr_issue|
      reference_build = format_reference_build(tr_issue[0])
      age = tr_issue.first['age'].to_i
      failure_datetime = tr_issue.first['build_datetime']
      errors = ""
      reports = []
      tr_issue.each do |e|
        errors += "<li>#{e['error_name']}</li>"
        reports += e['reports']
      end
      errors = "<ul>#{errors}</ul>"

      if reports.size > 0
        reports_str = reports.uniq.map { |e| "<li>`#{e['github_issue']}` (#{e['status'].capitalize})</li>"}.join
        reports_str = "<ul>#{reports_str}</ul>"
      else
        reports_str = "No reports found!"
      end

      # If output is too long, wrap it in a <details>
      errors = "<details><summary>#{tr_issue.size} errors</summary>#{errors}</details>" if tr_issue.size >= 10

      if age == -1
        warnings_table += "| #{reference_build} | #{age} | #{failure_datetime} | #{errors} | #{reports_str} |\n"
      else
        table += "| #{reference_build} | #{age} | #{failure_datetime} | #{errors} | #{reports_str} |\n"
      end
    end
    out = "### Test regressions\n#{table}\n"
    out += "### Warnings\n#{warnings_table}\n" if warnings_table.count("\n") > 2
    out
  end

  def self.test_regressions_flaky(tr_array)
    return "" if tr_array.empty?
    table = "| Reference builds | Errors | Flaky report | Reports |\n| -- | -- | -- | -- |\n"
    warnings_table = table
    tr_array.each do |tr|
      jobs = []
      errors = []
      reports = []
      tr.each do |e|
        jobs << format_reference_build(e)
        errors << e['error_name']
        reports += e['reports']
      end
      jobs = jobs.uniq.map { |e| "<li>#{e}</li>" }
      errors.map! { |e| "<li>#{e}</li>" }

      jobs_str = "<ul>#{jobs.join}</ul>"
      jobs_str = "<details><summary>#{jobs.size} items</summary>#{jobs_str}</details>" if jobs.size >= 10

      errors_str = "<ul>#{errors.join}</ul>"
      errors_str = "<details><summary>#{errors.size} items</summary>#{errors_str}</details>" if errors.size >= 10

      if reports.size > 0
        reports_str = reports.uniq.map { |e| "<li>`#{e['github_issue']}` (#{e['status'].capitalize})</li>"}.join
        reports_str = "<ul>#{reports_str}</ul>"
      else
        reports_str = "No reports found!"
      end
      
      if tr.first['age'].to_i == -1
        warnings_table += "|#{jobs_str}|#{errors_str}|<details>#{format_flakiness(tr.first['flakiness'])}</details>|#{reports_str}|\n"
      else
        table += "|#{jobs_str}|#{errors_str}|<details>#{format_flakiness(tr.first['flakiness'])}</details>|#{reports_str}|\n"
      end
    end
    out = "### Test regressions\n#{table}\n"
    out += "### Warnings\n#{warnings_table}\n" if warnings_table.count("\n") > 2
    out
  end

  def self.jobs_last_success_date(job_array)
    return "" if job_array.empty?
    table = "| Job Name | Last Success |\n| -- | -- |\n"
    job_array.each do |job|
      table += "| #{job['job_name']} | #{job['last_success']} |\n"
    end
    table
  end

  def self.test_regressions_all(test_regressions_array)
    table = "| Reference Build | Error Name |\n| -- | -- |\n"
    regressions = test_regressions_array.group_by { |e| e['job_name'] }
    regressions.each_pair do |job, errors_hash|

      errors = errors_hash.map { |o| [o['error_name'], o['age']] }
      errors_str = ""
      errors.each do |e|
        errors_str = "<ul><li>#{e.first} (age: #{e.last})</li><ul>"
      end
      errors_str = "<details><summary>#{errors.size} errors</summary>#{errors_str}</details>" if errors.size > 9

      table += "| #{format_reference_build errors_hash[0]} | #{errors_str} |\n"
    end
    table
  end

  def self.test_regressions_known(issue_array)
    # Create a table for each project: {'ros' => {'open' => <table>, 'disabled' => <table>}, 'gazebo' => {'open' => <table>, 'disabled' => <table>}}
    table_template = "| Issue | Priority | Jobs Name | Errors Name |\n| -- | -- | -- | -- |\n"
    table_by_status = {'open' => table_template, 'disabled' => table_template}
    tables = Hash[TRACKED_PROJECTS.zip([table_by_status, table_by_status.clone])]

    issue_array.each do |iss_report|
      jobs = iss_report.map { |o| o['job_name'] }.uniq
      jobs_str = "<ul><li>#{jobs.join('</li><li>')}</li></ul>"
      jobs_str = "<details><summary>#{jobs.size} jobs</summary>#{jobs_str}</details>" if jobs.size > 9
      
      errors = iss_report.map { |o| o['error_name'] }.uniq
      errors_str = "<ul><li>#{errors.join('</li><li>')}</li></ul>"
      errors_str = "<details><summary>#{errors.size} errors</summary>#{errors_str}</details>" if errors.size > 9
      
      # Add issue report data to it's respective project table
      project = iss_report.first['project']
      tables[project][iss_report.first['status'].downcase] += "| `#{iss_report.first['github_issue']}` | #{iss_report.first['priority']} | #{jobs_str} | #{errors_str} |\n"
    end

    out = ""
    tables.each_pair do |project, v|
      out += "### #{project.capitalize}\n"
      v.each_pair do |status, table|
        next if table == table_template
        out += "#### #{status.capitalize} issues\n"
        out += "#{table}\n"
      end
    end
    out
  end

  def self.format_report(report_hash)
    # Use <details> and <summary> tags to prevent long reports
    details_subcategories = ['test_regressions_flaky', 'jobs_last_success_date', 'test_regressions_all', 'test_regressions_known']
    output_report = ""

    report_hash.each_pair do |category, subcategory_hash|
      output_report += "<h1>#{category.gsub('_', ' ').capitalize}</h1>\n"
      subcategory_hash.each_pair do |subcategory, subcategory_report| # Assume that we're traversing a hash of hashes
        next if subcategory_report.empty?

        subcategory_report_title = "<h2>#{subcategory.gsub('_', ' ').capitalize}</h2>\n"
        subcategory_report_str = "#{subcategory_report_title}\n#{subcategory_report}\n"
        subcategory_report_str = "<details><summary>#{subcategory_report_title}</summary>\n\n#{subcategory_report}</details>\n" if details_subcategories.include? subcategory 
        output_report += subcategory_report_str
      end
    end
    output_report
  end
end
