#!/bin/bash

for Line in $(./sql_run.sh get_known_issues_link.sql CLOSED | tail +2)
do
    gh_issue=`expr match "$Line" '.*\(https://github.com.*\)|.*'`
    gh_type=`expr match "$gh_issue" '.*\(pull\|issue\).*'`
    if [ $gh_type = "pull" ] 
    then 
        echo "[WARNING] $gh_issue gh_type is Pull request. Change it to issue."
        continue
    fi

    issue_data=`gh $gh_type view $gh_issue`
    issue_status=`python3 -c "import sys; import re; print(re.match(r'[\S\s]*state:[\s](.*?)[\s]', sys.argv[1]).group(1))" "$issue_data"`

    if [ -z $issue_status ]
    then
        echo "[WARNING] Unknown status for $gh_issue"
        echo $issue_data
        continue
    fi

    if [ $issue_status == "OPEN" ]
    then
        echo "OPEN issue but CLOSED status for: $gh_issue"
    elif [ $issue_status == "CLOSED" ]
    then
	continue
    else
        echo "[WARNING] Unknown status $issue_status"
        continue
    fi

done
