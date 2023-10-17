# Test regressions investigation

A test regression is a test that is failing when run. They can be tests that used to pass but now fail, or new tests that were added failing. This document describes how to investigate test regressions.

## Identify failing tests

There are 2 ways to identify failing tests:
1. Checking yellow builds in the buildfarm dashboards.
  * This is the most straightforward way to identify failing tests since the unstable builds show a list of failing tests.
2. Using [buildfarmer database tools](./buildfarmer_triage_tools.md#database-scripts).
  * When using database tools, you should use [`check_buildfarm.rb`](./buildfarmer_triage_tools.md#check_buildfarmrb) script to get a list of potential issues sorted by the number of fails. With this list, you can prioritize the tests that are failing more often and check if they are known issues.

> **Note**
> In the daily workflow, we skip some jobs that are not Tier 1 priority (check [priorities document](../../docs/priorities.md#priorities)).
>
> The jobs we normally skip are: fastrtps-dynamic, performance, repeated and connext jobs.
>
> To exclude a job when running `check_buildfarm` use:
>
> `./check_buildfarm -e "performance connext rep fastrtps-dynamic"`

Whether you use one or the other, you will end up with a list of failing tests.


## Investigate failing tests

Before investigating a failing test, you should check if the test is a reported known issue. You can check the [known issues](./known_issues.md) document to learn how to check if a test is a known issue. TL;DR: Check package repositories for issues with the test name, the buildfarmer log, and use the [`is_known_issue.sql`](./buildfarmer_triage_tools.md#is_known_issuesql) script to check if the test is reported as a known issue in the buildfarm database.

To investigate failing tests, you should follow these steps:

> For ROS 2 test regressions, you can follow the same steps as [Build regressions investigation](./build_regressions_investigation.md)

1. Identify the log output of the failing test
  * When using buildfarm dashboards, you can click on the failing test to see the console output.
  * You should identify the error message of the test and the package that contains the test.
  * *Pro tip*: You can find useful information if you compare a successful build output with a failing one. Maybe the test is failing because of a race condition, or because it didn't find a resource.
  * Sometimes the test doesn't show the output but a message saying *no test results found*, and the test contains the suffix `test_ran`. In this case, you should check the console output of the test manually. It might be a timeout or a segfault.
  * If the reason for the failure is not clear, you should follow the next step
2. Investigate test regressions appearance
  * Buildfarmer database tools are useful to determine if a test is failing on one or multiple jobs, or to check if the test is failing for a long time.
  * To check what are the last 25 appearances of a test you can use [`errors_get_last_ones.sql`](./buildfarmer_triage_tools.md#errors_get_last_onessql) followed by the test name (e.g., `./sql_run.sh errors_get_last_ones.sql "Stopwatch.StartStopReset"`). If the list is too long, you can also check the first 25 appearances using [`errors_get_first_time`](./buildfarmer_triage_tools.md#errors_get_first_timesql).
  * This will give you a hint of when the test started failing (e.g., if the test is failing for a long time, it might be a flaky test, or if it's failing for 3 days in a row, it might be a consistent one).
  * If the information is enough, you may stop here and report the issue in the package repository, if not, you should follow the next step
3. Investigate test regression flakiness
  * If the test is failing for a long time, it might be a flaky test. [`calculate_flakiness_jobs.sql`](./buildfarmer_triage_tools.md#calculate_flakiness_jobssql) is a script that shows the failure percentage of a list of jobs that have failed at least once in the last *X* days with a specified test failure (e.g., `./sql_run.sh calculate_flakiness_jobs.sql "Stopwatch.StartStopReset" "15 days"` will show the failure percentage of the last 15 days of the test `Stopwatch.StartStopReset`).

After all these steps, you should have enough information to report the issue in the package repository. If you are not sure about the reason for the failure, you should ask ROS and Gazebo teams if they know about the issue.
* For ROS, you can ask in `ros-core-developers` Slack channel or Chris Lalancette (clalancette) in GitHub.
* For Gazebo, you can ask in `gazebo-core-developers` Slack channel or Addisu Taddese (azeey) in GitHub.


## Common situations

### Tests failing on a specific agent

Sometimes a test is failing on a specific Agent. This can be determined by looking at the job trend and seeing that the test is failing only on one agent or OS. In this case, you should add the agent name to the issue report.

### Timeout and segfaults

When a test fails because of a timeout or segfault, the best approach is to compare the console output of a successful build with the failing one. This will give you a hint of what is happening. Maybe the timeout is because the test is waiting for a resource that is not available, or maybe the test timeout threshold is just a little bit too short.

# Links to other pages

## Guides

* [Build regressions investigation](./build_regressions_investigation.md)
* [Known issues](./known_issues.md)
* [Buildfarm triage tools](./buildfarmer_triage_tools.md)
  * [errors_check_last_build.sql](./buildfarmer_triage_tools.md#errors_check_last_buildsql)
  * [errors_get_last_ones.sql](./buildfarmer_triage_tools.md#errors_get_last_onessql)
  * [errors_get_first_time.sql](./buildfarmer_triage_tools.md#errors_get_first_timesql)
  * [calculate_flakiness_jobs.sql](./buildfarmer_triage_tools.md#calculate_flakiness_jobssql)

[Back :arrow_backward: ](../index.md)
