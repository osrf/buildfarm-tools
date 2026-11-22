#!/bin/bash

# Manually create an issue / error to track in the buildfarm.
# Kept as a thin wrapper around issue_save_new.rb for backwards compatibility.
# $1 is the error name, $2 package name, $3 job_name, $4 github_issue

exec ruby "$(dirname "$0")/issue_save_new.rb" "$@"
