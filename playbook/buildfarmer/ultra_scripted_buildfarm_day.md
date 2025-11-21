# Ultra Scripted Buildfarm Day

This is a TL;DR version of [scripted buildfarm day](./scripted_buildfarm_day.md). For more details on each step, please refer to the scripted version.

### 1. Check all servers
This includes giving a glance to the main webpage status, looking for disconnected agents, hung jobs, an abnormaly large queue of jobs, a server waiting to restart or anything that may look _out of place_.
> Details in [Scripted buildfarm day: Check the buildfarm status](./scripted_buildfarm_day.md#2-check-the-buildfarm-status)

* https://build.ros2.org/
* https://build.osrfoundation.org/
* https://ci.ros2.org/

### 2. Check agents capacity
> Details in [Scripted buildfarm day: Check the buildfarm agents](./scripted_buildfarm_day.md#3-check-the-buildfarm-agents)

We manage the amount of agents per buildfarm using terraform (private [osrf-terraform](https://github.com/osrf/osrf-terraform) repository).
For each of the projects, you can compare the production number of agents that should be online and compere them to the current number: 

* https://build.ros2.org/computer/ -> `production.ros2_buildfarm` project
* https://build.osrfoundation.org/computer/ -> `production.osrf_buildfarm` project
* https://ci.ros2.org/computer/ -> `ros2_ci.production` project


If an agent is offline, you may follow [revive_agent.md](https://github.com/osrf/infrastructure-private/blob/main/playbook/infra/revive_agent.md) (private repository) play to put it back online.

### 3. Pull changes from buildfarm repository and refresh known issues
> Details in [Scripted buildfarm day: Tool setup](./scripted_buildfarm_day.md#1-tool-setup)

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
> Details in [Scripted buildfarm day: Check automation tools status](./scripted_buildfarm_day.md#4-check-automation-tools-status)

* [osrf/buildfarm-tools-private](https://github.com/osrf/buildfarm-tools-private?tab=readme-ov-file#actions)

If any of these badges are red, you should check the logs of the failed job and report the issue.

### 5. Check build failures
You can check for red builds in buildfarm dashboards:
> Details in [Scripted buildfarm day: Check failing jobs on buildfarm dashboards](./scripted_buildfarm_day.md#5-check-failing-jobs-on-buildfarm-dashboards)

* [ROS2  Dashboard](../../ROS2.md)
* [Gazebo Dashboard](../../Gazebo.md)
* [Colcon Dashboard](../../Colcon.md)
* [Standalone Services](../../standalone_services.md)
* [Homebrew simulation bottle status](https://github.com/osrf/homebrew-simulation/?tab=readme-ov-file#bottle-status)

```bash
cd ~/buildfarm-tools/database/scripts
./sql_run.sh builds_failing_today.sql
```

Check each build failure in Jenkins, find the root cause, and report it to the respective repository if necessary. ([Check failing builds](./scripted_buildfarm_day.md#5-check-failing-jobs-on-buildfarm-dashboards))

### 6. Check new test regressions
You can check for yellow builds in buildfarm dashboards:
> Details in [Scripted buildfarm day: Check test regressions on buildfarm dashboards](./scripted_buildfarm_day.md#6-check-test-regressions-on-buildfarm-dashboards)

* [ROS2  Dashboard](../../ROS2.md)
* [Gazebo Dashboard](../../Gazebo.md)
* [Colcon Dashboard](../../Colcon.md)
* [Standalone Services](../../standalone_services.md)
* [Homebrew simulation bottle status](https://github.com/osrf/homebrew-simulation/?tab=readme-ov-file#bottle-status)

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

See [Check test regressions](./scripted_buildfarm_day.md#6-check-test-regressions-on-buildfarm-dashboards) for more information.


### 7. Add known issues to the buildfarmer database
> Details in [Scripted buildfarm day: Add known issues to the buildfarmer database](./scripted_buildfarm_day.md#7-add-known-issues-to-the-buildfarmer-database)

For each issue you opened:
```bash
./issue_save_new.sh "<test-name>" "<package-name>" "<job-name>" "<github-issue-url>"
```

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
> Details in [Scripted buildfarm day: Check warnings in remaining builds](./scripted_buildfarm_day.md#8-check-warnings-in-remaining-builds)

Check unstable build for warnings in buildfarm dashboards:
* [ROS2  Dashboard](../../ROS2.md)
* [Gazebo Dashboard](../../Gazebo.md)
* [Colcon Dashboard](../../Colcon.md)
* [Standalone Services](../../standalone_services.md)
* [Homebrew simulation bottle status](https://github.com/osrf/homebrew-simulation/?tab=readme-ov-file#bottle-status)

Report the warnings to the respective repository if necessary.

### 9. Report issues in Board
> Details in [Scripted buildfarm day: Final steps](./scripted_buildfarm_day.md#9-final-steps)

When everything is reported, you should add each report/issue to [Buildfarm Payload Board](https://github.com/orgs/osrf/projects/23/views/1).

[Back :arrow_backward: ](../index.md)
