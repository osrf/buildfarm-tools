#!/bin/bash

if [ "$1" == "-h"  ] || [ "$1" == "--help" ]; then
    echo "Usage: ./`basename $0` [failure_reason] [regex_failure_pattern] [LOG|SECTION]"
    echo "failure_reason: The reason for the failure. Can be formated with {}"
    echo "regex_failure_pattern: The regex pattern to match the failure"
    echo "LOG|SECTION: Should the regex be applied to the log or to the last section?"
    exit 0
fi

if [ -z "$3"]; then
    echo "ERROR, this script takes 3 parameters"
else

    echo "INSERT INTO build_regression_issues VALUES ('$1', '$2', '$3')"
    sqlite3 ../buildfarmer.db "INSERT INTO build_regression_issues VALUES ('$1', '$2', '$3')"
fi