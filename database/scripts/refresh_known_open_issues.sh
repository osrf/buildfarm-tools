#!/bin/bash

for Line in $(./sql_run.sh get_opened_known_issues.sql | grep -v error_name)
do
    gh_issue=`expr match "$Line" '.*\(https://github.com.*\)'`
    issue_data=`gh issue view $gh_issue`
    issue_status=`python3 -c "import sys; import re; print(re.match(r'[\S\s]*state:[\s](.*?)[\s]', sys.argv[1]).group(1))" "$issue_data"`

    if [ -z $issue_status ]
    then
        echo "[WARNING] Unknown status for $gh_issue"
        echo $issue_data
        continue
    fi

    if [ $issue_status == "CLOSED" ]
    then
        echo "Closing $gh_issue"
        ./sql_run.sh issue_close.sql $gh_issue
        echo "Closed."
    elif [ $issue_status == "OPEN" ]
    then
        echo "Keeping $gh_issue open"
    else
        echo "[WARNING] Unknown status $issue_status"
        continue
    fi

done
