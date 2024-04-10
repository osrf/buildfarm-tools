#!/bin/bash

# $0 this script, $1 sql script to run

args=("$@")

if [ -z "$1" ]; then
    echo "ERROR, sql file missing"
elif [ -z "$2" ]; then
    # Take the received script and send it to sql
    cat $1 | sqlite3 ../buildfarmer.db
else
    # If there are up to two paremeters ($2, $3), replace them in the sql.
    # Expected strings to replace are @param1@ and @param2@
    query=$(<$1)

    # Check all the parameters in the query and replace them with the received ones
    param_n=1
    while echo "$query" | grep -qo "param$param_n" 
    do
        arg_param=$(echo "${args[$param_n]}" | sed -e 's|\\|\\\\|g') # escape backslashes
        query=$(echo "$query" | sed "s|@param$param_n@|$arg_param|g")
        param_n=$((param_n+1))
    done

    ## TO-DO: is it really needed to use a temp file for this? ugh
    tmpfile="$(mktemp /tmp/output.XXXXXXXXXX)" || {
        echo "Failed to create temp file"
        exit 1
    }
    exec 3>"$tmpfile" # file descriptor to delete file automatically
    echo ".headers on" >&3
    echo "$query" >&3
    cat "$tmpfile" | sqlite3 ../buildfarmer.db
    exec 3>&-
    rm "$tmpfile"

fi
