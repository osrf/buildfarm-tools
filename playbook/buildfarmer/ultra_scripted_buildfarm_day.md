# Ultra Scripted Buildfarm Day

This is a TL;DR version of [scripted buildfarm day](./scripted_buildfarm_day.md)

### 1. Check all servers
This includes giving a glance to the main webpage status, looking for disconnected agents, hung jobs, an abnormaly large queue of jobs, a server waiting to restart or anything that may look _out of place_.

* https://build.ros.org/
* https://build.ros2.org/
* https://build.osrfoundation.org/
* https://ci.ros2.org/

### 2. Check nodes capacity

Compare the following document [machines.md nodes list](../../machines.md#nodes-list) with the nodes from each buildfarm:

* https://build.ros.org/computer/
* https://build.ros2.org/computer/
* https://build.osrfoundation.org/computer/
* https://ci.ros2.org/computer/

### 3. Pull changes from buildfarm repository and refresh known issues

Pull changes:

```bash
cd ~/buildfarm-tools
git pull
```

Refresh known issues:

```bash
cd ~/buildfarm-tools/database/scripts
./refresh_known_open_issues.sh
./close_old_known_issues.sh
```

### 4. Check automation tools

Check the private repo readme. All actions should be green.

* [osrf/buildfarm-tools-private](https://github.com/osrf/buildfarm-tools-private?tab=readme-ov-file#actions)

If any of these badges are red, you should check the logs of the failed job and report the issue.

### 5. Check build failures

You can check for red builds in buildfarm dashboards:
* [ROS2  Dashboard](../../ROS2.md)
* [Gazebo Dashboard](../../Gazebo.md)
* [Gazebo Classic Dashboard](../../GazeboClassic.md)
* [Colcon Dashboard](../../Colcon.md)
* [Standalone Services](../../standalone_services.md)
* [Homebrew simulation bottle status](https://github.com/osrf/homebrew-simulation/?tab=readme-ov-file#bottle-status)

```bash
cd ~/buildfarm/database/scripts
./sql_run.sh builds_failing_today.sql
```

Check each build failure in Jenkins, find the root cause, and report it to the respective repository if necessary. ([Check failing builds](./scripted_buildfarm_day.md#4-check-failing-jobs-on-buildfarm-dashboards))

### 6. Check new test regressions

You can check for yellow builds in buildfarm dashboards:
* [ROS2](https://github.com/osrf/buildfarmer/blob/main/ROS2.md)
* [Gazebo](https://github.com/osrf/buildfarmer/blob/main/Ignition.md)
* [Gazebo Classic](https://github.com/osrf/buildfarmer/blob/main/Gazebo.md)
* [Colcon](https://github.com/osrf/buildfarmer/blob/main/Colcon.md)

```bash
cd ~/buildfarm-tools/database/scripts
./check_buildfarm.rb -e "performance rep connext fastrtps-dynamic" # Exclude flaky jobs
```

For each test regression check the log output in Jenkins, find the root cause, and report it to the respective repository if necessary.

For gathering information about the test regressions:

```bash
cd ~/buildfarm-tools/database/scripts
./sql_run.sh errors_get_first_time.sql [error_name] # Check the first 25 appearances of the test regression
./sql_run.sh errors_get_last_ones.sql [error_name] # Check the last 25 appearances of the test regression
./sql_run.sh calculate_flakiness_jobs.sql [error_name] [time_range] # Check the ratio of the test regression per job in the given time range
```

See [Check test regressions](./scripted_buildfarm_day.md#5-check-test-regressions-on-buildfarm-dashboards) for more information.


## 7. Add known issues to the buildfarmer database

For each issue you opened:
```bash
./issue_save_new.sh "<test-name>" "<package-name>" "<job-name>" "<github-issue-url>"
```

> Details in [Scripted buildfarm day: Add known issues](./scripted_buildfarm_day.md#6-add-known-issues-to-the-buildfarmer-database) and [Known issues: Add known issues](./known_issues.md#add-a-known-issue-test-failures)

If any change was made to the buildfarmer database, push the changes:

> **Note**:
> This is part of the buildfarmer role. If you are not an official buildfarmer, you should suggest your changes in [buildfarm-tools discussions](https://github.com/osrf/buildfarm-tools/discussions)

```bash
cd ~/buildfarm-tools/
git add database/buildfarmer.db
git commit -sm "<commit-msg>" # Normally: "Update buildfarmer database" or "Refresh known issues"
git push
```

### 8. Check for remaining warnings

Check unstable build for warnings in buildfarm dashboards:
* [ROS2](https://github.com/osrf/buildfarmer/blob/main/ROS2.md)
* [Gazebo](https://github.com/osrf/buildfarmer/blob/main/Ignition.md)
* [Gazebo Classic](https://github.com/osrf/buildfarmer/blob/main/Gazebo.md)
* [Colcon](https://github.com/osrf/buildfarmer/blob/main/Colcon.md)

Report the warnings to the respective repository if necessary.

### 9. Report issues in Board

When everything is reported, you should add each report/issue to [Buildfarm Payload Board](https://github.com/orgs/osrf/projects/23/views/1).

[Back :arrow_backward: ](../index.md)
