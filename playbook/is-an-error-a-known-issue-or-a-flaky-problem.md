# Is an error a known issue or a flaky test?

This play is intended to help you determine if an error is a known issue or a flaky problem.

You can check manually if an issue is reported checking:
- [Buildfarmer Issues Spreadsheet](https://docs.google.com/spreadsheets/d/1gX7Hw_aVsI4U05i2-NxCY66a4CmRy1Yyb6dokK5QtMg/edit?gid=0#gid=0) (has both ROS issues and Gazebo issues).
- [Latest buildfarmer log "Test regression known" section](https://github.com/osrf/buildfarm-tools/issues/?q=is%3Aissue%20state%3Aopen%20label%3Abuildfarmer-log)

If not, then you can follow the next steps:

## Steps

First, move to the `database/scripts` folder.


Also, you can gather more information using the scripts in this repository:

```bash
./sql_run.sh is_known_issue.sql "<test-name>" # Replace with the name of the test you want to check
```

If the test is a known issue, you will get the job name and the issue link. If you don't get any result, the test is not reported as a known issue.

If you want to check if the test is a flaky problem, you can run the following script:

```bash
./sql_run.sh calculate_flakiness_jobs.sql "<test-name>" "<time-range>" # Replace with the name of the test and the time range (e.g., 30 days) you want to check
```

This will list the jobs that have failed in the time range and the flaky ratio of the test.

## Example

Checking if `projectroot.test.rclcpp.test_publisher_subscription_count_api` is a known issue:

```bash
./sql_run.sh is_known_issue.sql "projectroot.test.rclcpp.test_publisher_subscription_count_api"
```

<details>
<summary>
Output:
</summary>

```
error_name|job_name|github_issue|status
projectroot.test.rclcpp.test_publisher_subscription_count_api|nightly_win_deb|https://github.com/ros2/rclcpp/issues/2230|OPEN
```

</details>

Checking the flaky ratio of the test:

```bash
/sql_run.sh calculate_flakiness_jobs.sql "projectroot.test.rclcpp.test_publisher_subscription_count_api" "30 days"
```

<details>
<summary>
Output:
</summary>

```
job_name|last_fail|first_fail|build_count|failure_count|failure_percentage
nightly_win_deb|2023-10-22|2023-10-08|31|7|22.58
```

</details>
