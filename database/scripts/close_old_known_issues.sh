#!/bin/bash

close_issue() {
    error_name=$1
    error_job_name=$2
    echo "Closing '$error_name' issue for job '$error_job_name'."
    ./sql_run.sh issue_close_by_name.sql "$error_name" "$error_job_name"
}

for Line in $(./sql_run.sh get_known_issues.sql)
do

    if [[ $Line =~ "CLOSED" ]]
    then
        continue
    fi

    error_name=$(echo $Line | sed 's/|.*//')
    error_job_name=$(echo $Line | sed 's/^.*|\(.*\)|.*|.*/\1/')
    
    last_times_output="$(./sql_run.sh errors_get_last_ones.sql $error_name)"
    last_time_job="$(echo "$last_times_output" | grep $error_job_name | head -1)"

    if [[ -z $last_time_job ]]
    then
        close_issue "$error_name" "$error_job_name"
        continue
    fi

    error_datetime=`expr match "$last_time_job" '.*\(20[0-9]\{2\}-[0-9]\{2\}-[0-9]\{2\}\).*'`

    if [ -z $error_datetime ]
    then
        echo "[WARNING] Error \"$error_name\" has no date:
            $Line
            Please check that the error name is correct in test_fail_issues table."
        continue
    fi

    if [ $(date -d "$error_datetime" +%s) -lt $(date -d "30 days ago" +%s) ]
    then
        close_issue "$error_name" "$error_job_name"
    fi

done
