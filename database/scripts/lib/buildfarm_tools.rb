def parse_sql_output(output, keys = [])
  # This function parses the output of an SQL query and returns an array of hashes
  # The keys of the hashes are the column names of the SQL query or the keys passed as parameter
  # Note: The SQL query must be formatted using sql_run.sh command

  if output.empty?
    return nil
  end

  output = output.split("\n")
  output_array = []
  if keys.empty?
    keys = output.shift.split("|")
  end

  output.each do |line|
    line = line.split("|")
    line_hash = Hash.new
    keys.each_index { |i|
      line_hash[keys[i]] = line[i]
    }
    output_array.append(line_hash)
  end
  output_array
end

def parse_known_issues(error_name, status = nil)
  # This function parses the result of is_known_issue.sql and returns a list of closed issues
  # If the error is not a known issue, it returns an empty list

  is_known_issue = parse_sql_output(%x{./sql_run.sh is_known_issue.sql "#{error_name}"})
  unless is_known_issue
    return []
  end

  if status
    is_known_issue = is_known_issue.select { |issue| issue["status"] == status }
  end
  is_known_issue.map { |issue| { github_issue: issue["github_issue"], status: issue["status"] } }.uniq
end
