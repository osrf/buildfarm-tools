# Ultra Scripted Buildfarm Day

This is a TL;DR version of [scripted buildfarm day](./scripted_buildfarm_day.md)

### 1. Check all servers

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

```bash
cd ~/buildfarmer
git pull
```

To refresh known issues:

```bash
cd ~/buildfarmer/database/scripts
./refresh_known_open_issues.sh
./close_old_known_issues.sh
```

If any change was made to the buildfarmer database, push the changes:

```bash
cd ~/buildfarmer/
git add buildfarmer.db
git commit -sm "Update buildfarmer database"
git push
```

### 4. Check build failures

You can check for red builds in buildfarm dashboards:
* [ROS2](https://github.com/osrf/buildfarmer/blob/main/ROS2.md)
* [Gazebo](https://github.com/osrf/buildfarmer/blob/main/Ignition.md)
* [Gazebo Classic](https://github.com/osrf/buildfarmer/blob/main/Gazebo.md)
* [Colcon](https://github.com/osrf/buildfarmer/blob/main/Colcon.md)

```bash
cd ~/buildfarm/database/scripts
./sql_run.sh builds_failing_today.sql
```

Check each build failure in Jenkins, find the root cause, and report it to the respective repository if necessary. ([Check failing builds](./scripted_buildfarm_day.md#4-check-failing-jobs-on-buildfarm-dashboards))

### 5. Check new test regressions

You can check for yellow builds in buildfarm dashboards:
* [ROS2](https://github.com/osrf/buildfarmer/blob/main/ROS2.md)
* [Gazebo](https://github.com/osrf/buildfarmer/blob/main/Ignition.md)
* [Gazebo Classic](https://github.com/osrf/buildfarmer/blob/main/Gazebo.md)
* [Colcon](https://github.com/osrf/buildfarmer/blob/main/Colcon.md)

```bash
cd ~/buildfarm/database/scripts
./check_buildfarm.rb -e "performance rep connext fastrtps-dynamic" # Exclude flaky jobs
```

For each test regression check the log output in Jenkins, find the root cause, and report it to the respective repository if necessary.

For gathering information about the test regressions:

```bash
cd ~/buildfarm/database/scripts
./sql_run.sh errors_get_first_time.sql [error_name] # Check the first 25 appearances of the test regression
./sql_run.sh errors_get_last_ones.sql [error_name] # Check the last 25 appearances of the test regression
./sql_run.sh calculate_flakiness_jobs.sql [error_name] [time_range] # Check the ratio of the test regression per job in the given time range
```

See [Check test regressions](./scripted_buildfarm_day.md#5-check-test-regressions-on-buildfarm-dashboards) for more information.

### 6. Check for remaining warnings

Check unstable build for warnings in buildfarm dashboards:
* [ROS2](https://github.com/osrf/buildfarmer/blob/main/ROS2.md)
* [Gazebo](https://github.com/osrf/buildfarmer/blob/main/Ignition.md)
* [Gazebo Classic](https://github.com/osrf/buildfarmer/blob/main/Gazebo.md)
* [Colcon](https://github.com/osrf/buildfarmer/blob/main/Colcon.md)

Report the warnings to the respective repository if necessary.

### 7. Report issues in Board

When everything is reported, you should add each report/issue to [Buildfarm Payload Board](https://github.com/orgs/osrf/projects/23/views/1).

[Back :arrow_backward: ](../index.md)
