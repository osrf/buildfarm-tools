# General scripts

We utilize our custom tools within the buildfarm to facilitate our workflow. The relevant scripts can be found in the [scripts](../../scripts/) directory.

* [scripts/ci-log](../../scripts/ci-log): Sometimes the log of a build is too heavy to be rendered in a web browser. This script provides a way to download the log of a build.
* [scripts/extract-vcs-exact](../../scripts/extract-vcs-exact): Extract the vcs --exact output from a build log to create a repos file. It is useful for knowing the exact list of repositories that were used in a build.
* [scripts/extract-package-output](../../scripts/extract-package-output): Extract package output from a build log using colcon markers. Useful for getting the console output of a specific package in a build.

Check the [scripts usage](#scripts-usage) section for more information on how to use these scripts.

# Testdb scripts

The testdb scripts provide a way to check more information on builds by downloading the logs of the builds and performing some text based analysis on them. These scripts are located in the [testdb](../../testdb) folder.

* [testdb/fetch.rb](../../testdb/fetch.rb): This script downloads the log of a specified number of builds and saves them in a local database (_~/osrf/testdb_). You need to run this script before using the next ones.
* [testdb/comparebuildrepos.rb](../../testdb/comparebuildrepos.rb): This script compares the build logs of two builds and shows the version differences between them. It is useful to check if the build is failing because of a change in the version of a repository. *Disclaimer: This script currently supports only ROS2 logs.*
* [testdb/comparepip.py](./testdb/comparepip.py): This script compares the pip packages installed in two builds. It is useful to check if the build is failing because of a change in the dependencies. *Disclaimer: This script currently supports only ROS2 logs.*
* [testdb/grep.rb](./testdb/grep.rb): This script greps the log of a build for a specified string. It returns the statistics of how many times this string appeared in the last _n_ builds. This script is useful to check if the build is failing because of a specific error and check the percentage of builds that are failing because of this error.

Check the [testdb usage](#testdb-usage) section for more information on how to use these scripts.

# Database scripts

The buildfarmer repository stores a local database with information from test regressions, jobs, known issues, etc. The database scripts provide a way to check more information based on the data stored in the database. These scripts are located in the [database/scripts](../../database/scripts/) folder.

*Important note*: Currently, the database is updated daily, so the database scripts will only provide consistent results if the database is up to date.

* [check_buildfarm.rb](../../database/scripts/check_buildfarm.rb): This script checks the status of the buildfarm and shows potential new issues that need to be reported, as well as other useful information for each job.
* [statistical_check.rb](../../database/scripts/statistical_check.rb): This script shows the list of all open, closed and new issues and the test regressions associated with them, as well as how many times they happened in the last X days.
* [refresh_known_open_issues.sh](../../database/scripts/refresh_known_open_issues.sh): This script updates the list of known open issues based on issue status in github. It requires [Github CLI](https://cli.github.com/) to be installed and configured.
* [close_old_known_issues.sh](../../database/scripts/close_old_known_issues.sh): This script closes issues that haven't happened in the last 30 days.
* [sql_run.sh](../../database/scripts/sql_run.sh): This script receives an SQL query file as an argument and returns the results after running it in the database. For running almost any of the other scripts, you will need to use this script.
* [errors_check_today.sql](../../database/scripts/errors_check_today.sql) or [errors_check_last_build.sql](../../database/scripts/errors_check_last_build.sql): These scripts return the test regressions that happened today or in the last build of all jobs respectively. They are useful to check if any test regressions need to be reported.
* [errors_get_first_time.sql](../../database/scripts/errors_get_first_time.sql) or [errors_get_last_ones.sql](../../database/scripts/errors_get_last_ones.sql): These scripts return the first or last 25 times that a specific test regression happened. They are useful to check if a test regression is new or if it has happened before.
* [get_agent_local_history.sql](../../database/scripts/get_agent_local_history.sql): This script returns the lcaol history of a specific agent. It is useful to check which jobs were run in a specific agent. *Note: Local history refers only to the list of jobs we're tracking/ Database tools don't track all jobs in the buildfarm. This means that the history is not always complete.*
* [calculate_flakiness_jobs.sql](../../database/scripts/calculate_flakiness_jobs.sql): This script returns the ratio of a test regression per job in specified time range. It is useful to check which jobs are having more test regressions and make flaky test reports.
* [calculate_flakiness_nodes.sql](../../database/scripts/calculate_flakiness_nodes.sql): This script returns the ratio of a test regression per agent in the specified time range. It is useful to check if a test regression is happening consistently on one agent or not.
* [grep_failure_log.sql](../../database/scripts/grep_failure_log.sql): This script greps the log of a build for a specified string. It returns the statistics of how many times this string appeared in the last _n_ builds. it's useful to get the list of jobs that have *X* in the log output. *Disclaimer: Log output is not always consistent, as the database contains only the last 100 lines of the failed builds log. If you need to check all the log use `grep.rb` instead*.
* [get_known_issues.sql](../../database/scripts/get_known_issues.sql): This script returns all the known issues in the buildfarm (open or closed). It is useful to check if a test regression is already known.
* [get_opened_known_issues.sql](../../database/scripts/get_opened_known_issues.sql): This script returns the known issues that are currently open.
* [is_known_issue.sql](../../database/scripts/is_known_issue.sql): This script returns the known issue that matches the test regression. It is useful to check if a test regression is already known.
* [issue_save_new.sh](../../database/scripts/issue_save_new.sh): This script saves a new known issue in the database.
* [issue_close.sql](../../database/scripts/issue_close.sql): This script closes a known issue in the database.
* [refresh_known_open_issues.sh](../../database/scripts/refresh_known_open_issues.sh): This script updates the list of known open issues based on issue status in github. It requires [Github CLI](https://cli.github.com/) to be installed and configured.
* [close_old_known_issues.sh](../../database/scripts/close_old_known_issues.sh): This script closes issues that haven't happened in the last 30 days.

Check the [database scripts usage](#database-scripts-usage) section for more information on how to use these scripts.

# Scripts Usage

## Scripts folder usage

### ci-log

```bash
ci-log <url-to-build>
```

> Will download the log of the specified build and save it in pwd.

### extract-vcs-exact

```bash
cat <log-file> | extract-vcs-exact
```

> Will show the exact version of the repositories used in the build.

### extract-package-output

extract-package-output OPERATION PACKAGE \[BUILD_LOG_FILE]
    OPERATION: Either 'build' or 'test'
    PACKAGE: The target package name
    BUILD_LOG_FILE: Path to the target build log. Defaults to stdin

```bash
cat <log-file> | extract-package-output build <package-name>
```

> Will show the output of the build of the specified package.

## Testdb usage

Before running any of the scripts, you need to set a domain and job variables:

```bash
export d=ci.ros2.org j=nightly_win_deb
```

### fetch.rb

Remember to set the *domain and job variables* before running this script [how to set domain and job variables](#testdb-usage).

```bash
./fetch.rb -d $d -j $j -c 5 buildlog
```

> Will download the logs of last 5 builds of the specified job and save them in the _~/osrf/testdb_ folder.

* `-d` is the domain of the buildfarm.
* `-j` is the name of the job.
* `-c` is the number (count) of builds to download.
* `[buildlog|testreport]` tells the script to download the build logs or the test reports.

This script will show the list of downloaded builds. If a build is already downloaded, it will be skipped.

### comparebuildrepos.rb

Remember to set the *domain and job variables* before running this script ([how to set domain and job variables](#testdb-usage)), and to run [*fetch.rb*](#fetch.rb) before.


```bash
./comparebuildrepos.rb -d $d -j $j -b 100 -c 101
```

> Will compare the repositories of the builds 100 and 101 of the specified job and show the version differences between them.

* `-d` is the domain of the buildfarm.
* `-j` is the name of the job.
* `-b` is the build number of the first build to compare (base build).
* `-c` is the build number of the second build to compare (compare build).

### comparepip.py

Remember to set the *domain and job variables*  before running this script ([how to set domain and job variables](#testdb-usage)), and to run [*fetch.rb*](#fetch.rb) before.


```bash
./comparepip.py -d $d -j $j -b 100 -c 101
```

> Will compare the pip packages of builds 100 and 101 of the specified job and show the version differences between them.

* `-d` is the domain of the buildfarm.
* `-j` is the name of the job.
* `-b` is the build number of the first build to compare (base build).
* `-c` is the build number of the second build to compare (compare build).

### grep.rb

Remember to set the *domain and job variables* before running this script ([how to set domain and job variables](#testdb-usage)), and to run [*fetch.rb*](#fetch.rb) before.

```bash
./grep.rb -d $d -j $j -n 10 "error"
```

> Will show all the times that the string "error" appeared in the last 10 builds of the specified job.

* `-d` is the domain of the buildfarm.
* `-j` is the name of the job.
* `-n` is the number of builds to check.
* `"error"` is the string to grep.

## Database scripts usage

### refresh_known_open_issues.sh

```bash
./refresh_known_open_issues.sh
```

> Will update the list of known open issues based on issue status in github.
> Requires github CLI to be installed and configured.

### close_old_known_issues.sh

```bash
./close_old_known_issues.sh
```

> Will close issues that haven't happened in the last 30 days.


### check_buildfarm.rb

```bash
./check_buildfarm
```

or

```bash
./check_buildfarm.rb -e "performance connext rep fastrtps-dynamic"
```

* Use `-e` (optional) to exclude jobs that contain the specified words (regex-like) separated by spaces.

> Will check the status of the buildfarm and show potential new issues that need to be reported, as well as other useful information for each.


### statistical_check.rb

```bash
./statistical_check.rb -t "15 days"
```

or

```bash
./statistical_check.rb -e "performance connext rep fastrtps-dynamic" -t "15 days"
```

* Use `-e` (optional) to exclude jobs that contain the specified words (regex-like) separated by spaces.
* Use `-t` (required) to specify the time range to check. E.g., "15 days", "1 month"

> Will show the list of all open, closed and new issues and the test regressions associated with them, as well as how many times they happened in the last X days.

### errors_check_last_build.sql

```bash
./sql_run.sh errors_check_last_build.sql
```

> Will return the test regressions that happened in the last build of all jobs except the ones that are known issues.

You may find useful to exclude part of the output (for example, if you want to exclude a set of jobs that are known to fail):

```bash
./sql_run.sh errors_check_last_build.sql | grep -vE "performance|rep|connext"
```

> Will return the test regressions except for the ones that happened in the last build of the jobs that contain the words "performance", "rep" or "connext".


### errors_get_first_time.sql

```bash
./sql_run.sh errors_get_first_time.sql "<test-name>"
```

> Will return the first 25 times that the test regression happened.

* `<test-name>` is the name of the test regression.

### errors_get_last_ones.sql

```bash
./sql_run.sh errors_get_last_ones.sql "<test-name>"
```

> Will return the last 25 times that the test regression happened.

* `<test-name>` is the name of the test regression.

### calculate_flakiness_jobs.sql

```bash
./sql_run.sh calculate_flakiness_jobs.sql "<test-name>" "<time-range>" "<job-name> (optional)"
```

> Will return the ratio of the test regression per job in the specified time range (e.g., "15 days").

* `<test-name>` is the name of the test regression.
* `<time-range>` is the time range the script should check. E.g., "15 days", "1 month"
* `<job-name>` is an optional argument to filter the results by job name.

### calculate_flakiness_nodes.sql

```bash
./sql_run.sh calculate_flakiness_nodes.sql "<test-name>" "<time-range>" "<node-name>"
```

> Will return the ratio of the test regression per node in the specified time range (e.g., "15 days").

> **Note**
> Nodes run all types of builds. However, we only support nightly builds in the database. This means that the results of this script will only be consistent for nightly builds.

* `<test-name>` is the name of the test regression.
* `<time-range>` is the time range the script should check. E.g., "15 days", "1 month"
* `<node-name>` is the name of the node to check.

### is_known_issue.sql

```bash
./sql_run.sh is_known_issue.sql "<test-name>"
```

> Will return the row of known issue that matches the test regression. If there is no match, it will return nothing.

* `<test-name>` is the name of the test regression.

### get_known_issues.sql

```bash
./sql_run.sh get_known_issues.sql
```

> Will return the known issues, closed or not.

Use with `grep` to filter the output:

```bash
./sql_run.sh get_known_issues.sql | grep "ign_fuel-tools-gz-8-win"
```

### issue_save_new.sh

```bash
./issue_save_new.sh "<test-name>" "<package-name>" "<job-name>" "<github-issue-url>"
``` 

> Will save a new known issue in the database.

* `<test-name>` is the name of the test regression.
* `<package-name>` is the name of the package where the test regression occurs.
  * E.g.: For test "aaaaa.bbbbb.ccccc.ddddd" the package name is "aaaaa".
* `<job-name>` is the name of the job where the test regression occurs.
* `<github-issue-url>` is the url of the github issue that tracks the test regression.

### issue_close.sql

```bash
./sql_run.sh issue_close.sql "<test-name>"
```

> Will set set the known issue status to "closed".

* `<test-name>` is the name of the test regression.

[Back :arrow_backward: ](../index.md)
