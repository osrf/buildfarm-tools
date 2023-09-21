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
    echo "ERROR, this script takes 4 parameters"
else
    # sql = "insert into test_fail_issues values ('error_name', 'package_name', 'job_name', 'github_issue')"
    echo "insert into test_fail_issues values ('$1', '$2', '$3', '$4', 'OPEN')"
    sqlite3 ../buildfarmer.db "insert into test_fail_issues values ('$1', '$2', '$3', '$4', 'OPEN')"
fi
