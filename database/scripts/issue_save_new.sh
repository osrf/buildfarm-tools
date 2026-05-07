#!/bin/bash

# Manually create an issue / error to track in the buildfarm
# $0 this script,
# $1 is the error name
# $2 package name
# $3 job_name
# $4 github_issue

if [ "$1" == "-h"  ] || [ "$1" == "--help" ]; then
    echo "Usage: ./`basename $0` [error_name] [package_name] [job_name] [github_issue]"
    exit 0
fi

if [ -z "$4" ]; then
    echo "ERROR, this script takes at least 4 parameters"
else
    error_name="$1"
    package_name="$2"
    priority_value=""

    if [ "$error_name" == "build_regression" ]; then
        error_name="build_regression"
        package_name="build_regression"
        priority_value="10"
    fi

    # sql = "insert into test_fail_issues values ('error_name', 'package_name', 'job_name', 'github_issue')"
    if [ -n "$priority_value" ]; then
        SQL_COMMAND="insert into test_fail_issues (error_name, package_name, job_name, github_issue, status, priority) values ('$error_name', '$package_name', '$3', '$4', 'OPEN', '$priority_value')"
    else
        SQL_COMMAND="insert into test_fail_issues (error_name, package_name, job_name, github_issue, status) values ('$error_name', '$package_name', '$3', '$4', 'OPEN')"
    fi
    echo "Running: $SQL_COMMAND"
    sqlite3 ../buildfarmer.db "$SQL_COMMAND"
fi
