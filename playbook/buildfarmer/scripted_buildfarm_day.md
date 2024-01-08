# Scripted buildfarm day

This document describes the process for being a buildfarmer for a day.

## 1. Tool setup

1. Pull the latest version of the buildfarm-tools repository (this repo)
    ```
    git checkout main
    git pull origin main
    ```
2. Update Known issues information so you work with the latest information:

    ```bash
    cd ~/buildfarm-tools/database/scripts
    ./refresh_known_open_issues.sh
    ./close_old_known_issues.sh
    ```

## 2. Check the buildfarm status

Check the following links and verify that each responds correctly (not showing any errors):
* https://build.ros.org/
* https://build.ros2.org/
* https://build.osrfoundation.org/
* https://ci.ros2.org/

If any of the links above are not working you should check with the OSRF infrastructure team to take a look, there might be an infra problem.

## 3. Check the buildfarm agents

Check the following links and verify that each contains the expected number of agents:
<ul>
<li><a href="https://build.ros.org/computer/">build.ros.org machines</a></li>
<li><a href="https://build.ros2.org/computer">build.ros2.org machines</a></li>
<li><a href="https://build.osrfoundation.org/computer/">build.osrfoundation.org machines</a></li>
<li><a href="https://ci.ros2.org/computer/">ci.ros2.org machines</a></li>
</ul>

You can find the number of agents per buildfarm in [macines.md](../../machines.md#nodes-list)

If any agents are missing, you should: Ask the infrastructure team for a reason (e.g., some agents are down for maintenance) or manually check spot allocation problems in the AWS autoscaling group the missing agents are.


## 4. Check automation tools status

Also, we have some automation tools that should run daily for the buildfarmer data to be updated. You can check the private repo readme and verify that all badges are green:

* [osrf/buildfarm-tools-private](https://github.com/osrf/buildfarm-tools-private?tab=readme-ov-file#actions)

If any of these badges are red, you should check the logs of the failed job and report the issue.

These actions can also be manually triggered. Check [Automation Tools](./automation_tools.md) for more information.

## 5. Check failing jobs on buildfarm dashboards

Check the following dashboards and locate the failing jobs:

* [ROS2  Dashboard](../../ROS2.md)
* [Gazebo Dashboard](../../Gazebo.md)
* [Gazebo Classic Dashboard](../../GazeboClassic.md)
* [Colcon Dashboard](../../Colcon.md)
* [Standalone Services](../../standalone_services.md)
* [Homebrew simulation bottle status](https://github.com/osrf/homebrew-simulation/?tab=readme-ov-file#bottle-status)

For each failing job (red badge):
1. Identify the job that failed
2. Check the logs of the failed build
   * You may need to download the logs locally using [ci-log](./buildfarmer_triage_tools.md#ci-log)
3. Check which package failed to compile
   * To grep the package in the logs, you can use `Failed +<<< (.*)` regex.
   * Check the output of the package to identify the root cause of the failure.
   * If the failure reason is not obvious, you may need to check the changes between dependencies using the next step.
4. Look for changes in the repositories between the last successful build and the failed build
   * First, set the domain and job name as environment variables: `export d=<domain> j=<job-name>` where _domain_ is the name of the buildfarm (ci.ros2.org, build.ros2.org, etc.), and job name (e.g. `nightly_win_deb`). You can find the job name in the URL of the job in Jenkins.
   * Next, you need to fetch the data for testdb using [`./fetch.rb`](./buildfarmer_triage_tools.md#fetchrb) (`./fetch.rb -d $d -j $j -c <X> buildlog` where X is the number of builds to fetch since the last one)
   * After it's complete, use [`./comparebuildrepos.rb`](./buildfarmer_triage_tools.md#comparebuildreposrb) to check the changes between two builds. In this case, identify the last successful build and the failed build. (`./comparebuildrepos.rb -d $j -j $j -b <build_number_1> -c <build_number_2>`) where `-b <build_number_1>` is the base build (should be the last successful build) and `-c <build_number_2>` is the compare build (should be the failed build).
   * <details><summary>Example</summary>
    
     Check differences between build 100 and 101 of the `nightly_win_deb` job in the `ci.ros2.org` buildfarm:

     ```bash
     export d=ci.ros2.org j=nightly_win_deb
     ./fetch.rb -d $d -j $j -c 2 buildlog # Supposing the last build was 101
     ./comparebuildrepos.rb -d $d -j $j -b 100 -c 101
     ```

     </details>
   * It's recommended to look in each repository for changes that may have caused the build to fail. Check the commit message and the changes in the code to determine if it's a possible cause.
     * This is highly dependent on the build failure, so you should take into account the log output of the package.
   * If you don't find any possible change, you may proceed to the next step.
5. Look for changes in the pip dependencies
   * After setting the domain and fetching the data, run [`./comparepip.py`](./buildfarmer_triage_tools.md#comparepippy) (`./comparepip.py -d $d -j $j -b <build_number_1> -c <build_number_2>`) where `-b <build_number_1>` is the base build (should be the last successful build) and `-c <build_number_2>` is the compare build (should be the failed build).
   * <details><summary>Example</summary>
    
     Check differences between build 100 and 101 of the `nightly_win_deb` job in the `ci.ros2.org` buildfarm:

     ```bash
     export d=ci.ros2.org j=nightly_win_deb
     ./fetch.rb -d $d -j $j -c 2 buildlog # Supposing the last build was 101
     ./comparepip.py -d $d -j $j -b 100 -c 101
     ```

     </details>
   * If you find a possible change that broke the build, you may need to look for the GitHub repository of the package to check if a bug is already reported or report it. If you don't find any change, you may proceed to the next step.
6. Ask ROS and Gazebo teams. Refer to ROS2 technical lead (Chris Lalancette) and Gazebo technical lead (Addisu Taddese) for more information.
   * If you don't find any suitable cause, you may need to ask the ROS and Gazebo teams if they know about the issue adding all the information you have gathered so far.
     * For ROS, you can ask Chris Lalancette (clalancette) in GitHub.
     * For Gazebo, you can ask Addisu Taddese (azeey) in GitHub.
 
> Taken from [Build regressions investigation](./build_regressions_investigation.md#investigation-steps)


## 6. Check test regressions on buildfarm dashboards

1. Check test regressions by last build using [`check_buildfarm.rb`](./buildfarmer_triage_tools.md#check_buildfarmrb)
   * This script will check the status of the buildfarm and show potential new issues that need to be reported, as well as other useful information for each.
   * It won't show known issues that happened in the last build. However, for any not reported issue, it will show if there is a closed known issue that is associated with it (check [this guide](./known_issues.md) to get more information about known issues).
   * <details><summary>Example</summary>
     
     ```bash
     ./check_buildfarm.rb -e "performance connext rep fastrtps-dynamic"
     ```
     
      We exclude: performance, connext, repeated and fastrtps-dynamic jobs because those are a minor priority (and often contains a lot of test regressions that we don't need to check).

     </details>
2. Identify the log output of the failing test
   * When using buildfarm dashboards, you can click on the failing test to see the console output.
   * You should identify the error message of the test and the package that contains the test.
   * *Pro tip*: You can find useful information if you compare a successful build output with a failing one. Maybe the test is failing because of a race condition, or because it didn't find a resource.
   * Sometimes the test doesn't show the output but a message saying *no test results found*, and the test contains the suffix `test_ran`. In this case, you should check the console output of the test manually. It might be a timeout or a segfault.
   * If the reason for the failure is not clear, you should follow the next step
3. Investigate test regressions appearance
   * Buildfarmer database tools are useful to determine if a test is failing on one or multiple jobs, or to check if the test is failing for a long time.
   * To check what are the last 25 appearances of a test you can use [`errors_get_last_ones.sql`](./buildfarmer_triage_tools.md#errors_get_last_onessql) followed by the test name (e.g., `./sql_run.sh errors_get_last_ones.sql "Stopwatch.StartStopReset"`). If the list is too long, you can also check the first 25 appearances using [`errors_get_first_time`](./buildfarmer_triage_tools.md#errors_get_first_timesql).
   * This will give you a hint of when the test started failing (e.g., if the test is failing for a long time, it might be a flaky test, or if it's failing for 3 days in a row, it might be a consistent one).
   * If the information is enough, you may stop here and report the issue in the package repository, if not, you should follow the next step
4. Investigate test regression flakiness
   * If the test is failing for a long time, it might be a flaky test. [`calculate_flakiness_jobs.sql`](./buildfarmer_triage_tools.md#calculate_flakiness_jobssql) is a script that shows the failure percentage of a list of jobs that have failed at least once in the last *X* days with a specified test failure (e.g., `./sql_run.sh calculate_flakiness_jobs.sql "Stopwatch.StartStopReset" "15 days"` will show the failure percentage of the last 15 days of the test `Stopwatch.StartStopReset`).
5. Report the test regressions
   * When you have finished getting information about the test regressions, you should report the new ones. You may do that by creating an issue on the failing package repository.
   * If you are not sure about the reason for the failure, you should ask ROS and Gazebo teams if they know about the issue.
     * For ROS, you can ask Chris Lalancette (clalancette) in GitHub.
     * For Gazebo, you can ask Addisu Taddese (azeey) in GitHub.

> Taken from [Looking for regressions](./looking_for_regressions.md#3-check-test-regressions-in-the-buildfarm) and [Test regressions investigation](./test_regressions_investigation.md#investigation-steps)

## 7. Add known issues to the buildfarmer database

After you have opened issues in ROS and Gazebo repositories, you should add the issues to the buildfarmer database. This way, we can track the status of the issues and the buildfarm status.

To add issues to the buildfarmer database, you should follow these steps:

1. Identify the failing test name and package name
     * In a practical way, package name is all the text before the first period in the test name. (e.g., For test "aaaa.bbbb.ccc" package name is "aaaa")
2. Identify the job name where the test is failing
3. Add the known issue with the following command
     ```bash
     ./issue_save_new.sh "<test-name>" "<package-name>" "<job-name>" "<github-issue-url>"
     ```

## 8. Check warnings in remaining builds

Some jobs are unstable because of test regressions. Currently we don't track those in `buildfarmer.db` so the process to check the warnings is manual. You should check unstable builds manually in the buildfarm dashboards.

To report and investigate warnings, you can follow the same steps as test regressions.

## 9. Final steps

If any change was made to the buildfarmer database, push the changes:

> **Note**:
> This is part of the buildfarmer role. If you are not an official buildfarmer, you should suggest your changes in [buildfarm-tools discussions](https://github.com/osrf/buildfarm-tools/discussions)

```bash
cd ~/buildfarm-tools/
git add database/buildfarmer.db
git commit -sm "<commit-msg>" # Normally: "Update buildfarmer database" or "Refresh known issues"
git push
```

When everything is reported, you should add each report/issue to [Buildfarm Payload Board](https://github.com/orgs/osrf/projects/23/views/1) (see [board explanation](./reporting_problems.md#board-explanation)). This way, we can track all the issues happening in the buildfarm in a human readable way

You can check how to report issues here: [Reporting Problems](./reporting_problems.md)

[Back :arrow_backward: ](../index.md)
