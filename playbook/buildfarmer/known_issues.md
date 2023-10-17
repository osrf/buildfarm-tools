# Known Issues

Some of the problems we find every day are not easily fixed. A _known issue_ is a failure, that keeps showing in the buildfarm but it was reported to the development teams and tracked in its package repository


## Verify if a build failure is a known issue

To verify if a build failure is a known issue, you may follow the steps below:
1. Look for issues in the repositories that are related to the build failure checking the log output (e.g., failing package or missing dependency)
  * If you find the issue, and it's not fixed yet, you may add some information to the issue and track it.
2. Look for issues in buildfarmer repo
  * Some build failures are already reported in the buildfarmer repo. You may find the right one by looking at the log output and searching for the error message.
3. Ask ROS and Gazebo teams. Refer to ROS2 technical lead (Chris Lalancette) and Gazebo technical lead (Addisu Taddese) for more information.

## Verify if a test failure is a known issue

To verify if a test is a known issue, you may follow the steps below:

1. Look for issues in the repositories that are related to the test regression.
  * If you look closely, you may find that the test is already reported as an issue.
  * If you find the issue, and it's fixed, you may [remove the known issue](#untrack-a-known-issue-test-failures).
2. Use [`is_known_issue.sql`](./buildfarmer_triage_tools.md#is_known_issuesql) to check if the test is a known issue.
  * This script will return whether the test is a known issue or not, showing the issue number and the issue status if so.
  * You should check the issue status to see if it's fixed or not. If it's fixed, you may [remove the known issue](#untrack-a-known-issue-test-failures).

Also, you can check the list of known issues using [`get_known_issues.sql`](./buildfarmer_triage_tools.md#get_known_issuessql).

## Add a known issue (test failures)

When you find a test regression that is not fixed yet, you may create a known issue. To do so, you may follow the steps below:

1. Create an issue in the package repository of the test regression
  * For gathering information about the issue, follow the steps described in [Investigate failing tests](./test_regressions_investigation.md#investigate-failing-tests)
2. Use [`issue_save_new.sh`](./buildfarmer_triage_tools.md#issue_save_newsh) to create a known issue in the buildfarmer database for each job.
  * This script will create a known issue in the database, linking it to the issue you created in the package repository.
  * You need to run this script for each job that is failing. 
    * E.g., if the error is happening in `gz-sim7`,`ign-gazebo6`, and `ign-gazebo3` jobs, you need to run the script three times, changing the job argument between each run.
  * Usage: `./issue_save_new.sh "<test-name>" "<package-name>" "<job-name>" "<github-issue-url>"`

After that, the error will be considered a known issue, and it will not appear in the list that [`errors_check_last_build.sql`](./buildfarmer_triage_tools.md#errors_check_last_buildsql) returns.

## Untrack a known issue (test failures)

If a known test regression is fixed, you may untrack the known issue to make the error appear in the list that [`errors_check_last_build.sql`](./buildfarmer_triage_tools.md#errors_check_last_buildsql) returns and you can check whether the error is still happening or not.

To untrack a known issue, you may follow the steps below:

1. Get the GitHub issue link from the buildfarmer database.
  * You can use [`get_known_issues.sql`](./buildfarmer_triage_tools.md#get_known_issuessql) to get the list of known issues or [`is_known_issue.sql`](./buildfarmer_triage_tools.md#is_known_issuesql) to get the GitHub issue link for a specific test.
2. Set the issue status to `CLOSED` in the buildfarmer database using [`issue_close.sql`](./buildfarmer_triage_tools.md#issue_closesql).
  * This script will set the issue status to `CLOSED` in the database (e.g., `./sql_run.sh issue_close.sql "https://github.com/my/issue/123"`).

# Refresh Known Issues in the Database

All the known issues are added manually to the database. They are kept open until someone closes them manually. To keep the database updated, we need to refresh the known issues periodically.

To refresh the known issues, you may follow the steps below:
1. Run [`./refresh_known_open_issues.sh`](./buildfarmer_triage_tools.md#refresh_known_open_issuessh)
   * This script will check if the issue is still open in GitHub and update the database accordingly.
2. Run [`./close_old_known_issues.sh`](./buildfarmer_triage_tools.md#close_old_known_issuessh)
   * This script will close the issues that haven't happened in the last 30 days.

# Check statistics of current known issues

If you want to check the statistics the known issues happening in the buildfarm (such as how many times is a regression happening and in which jobs), you may be interested in using [`statistical_check.rb`](./buildfarmer_triage_tools.md#statistical_checkrb) script.

This script will list the jobs and test regressions a known issue is linked to, sorted by the number of test regressions and times the test regression happened.

Example:

Run statistical check for last 15 days excluding the jobs that contain the words: `performance`, `connext`, `rep`, and `fastrtps-dynamic`:

```bash
./statistical_check.rb -e "performance connext rep fastrtps-dynamic" -t "15 days"
```

<details>
<summary>
Output (11/09/2023):
</summary>

```
Open Issue: https://github.com/gazebosim/gz-rendering/issues/745
	12 times in ign_rendering-ci-win:
		VisualTest.Wireframe
		VisualTest.VisibilityFlags
		VisualTest.UserData
		VisualTest.Scale
		VisualTest.Material
		(60 more errors not shown)
Open Issue: https://github.com/gazebosim/gz-launch/issues/203
	9 times in ign_launch-ign-5-win:
		UNIT_Manager_TEST.test_ran
Open Issue: https://github.com/gazebosim/gz-launch/issues/208
	8 times in ignition_launch-ci-ign-launch2-homebrew-amd64:
		CmdLine.Ls
		CmdLine.EchoSelf
Open Issue: https://github.com/gazebosim/gz-launch/issues/202
	8 times in ignition_launch-ci-ign-launch2-homebrew-amd64:
		CmdLine.Ls
		CmdLine.EchoSelf
	4 times in ign_launch-ign-5-win:
		CmdLine.HelpVsCompletionFlags
		CmdLine.HelpSelf
		CmdLine.EchoErb
		CmdLine.EchoBadErb
Closed Issue: https://github.com/gazebosim/gz-fuel-tools/issues/340
	7 times in ign_fuel-tools-gz-9-win:
		FuelClientTest.PatchModelFail
		FuelClientTest.CachedWorld
	4 times in ign_fuel-tools-gz-9-win:
		CollectionTest/DownloadCollectionTest.Models/2
		CollectionTest/DownloadCollectionTest.Models/1
		CollectionTest/DownloadCollectionTest.Models/0
		CollectionTest/DownloadCollectionTest.AllItems/2
		CollectionTest/DownloadCollectionTest.AllItems/1
		(2 more errors not shown)
Open Issue: https://github.com/gazebosim/gz-fuel-tools/issues/373
	7 times in ign_fuel-tools-gz-9-win:
		FuelClientTest.PatchModelFail
		FuelClientTest.CachedWorld
Not reported Issue: 
	6 times in ignition_gazebo-ci-ign-gazebo6-focal-amd64:
		SensorsFixture.UpdateRate
	5 times in ignition_gazebo-ci-gz-sim7-focal-amd64:
		ResetFixture.HandleReset
	5 times in ign_gazebo-gz-7-win:
		INTEGRATION_save_world.test_ran
	3 times in gz_sim-ci-gz-sim8-jammy-amd64:
		ActorFixture.ActorTrajectoryNoMesh
	8 times in nightly_linux-aarch64_release:
		test_tracetools.test_tracetools.test.test_timer.TestTimer.test_all
		projectroot.test_timer
	6 times in nightly_linux-aarch64_debug:
		test_ros2trace.test_ros2trace.test.test_ros2trace.test_trace.TestROS2TraceCLI.test_env_var_ros_trace_dir
	6 times in nightly_win_deb:
		projectroot.cpplint_rosidl_generated_cpp
	4 times in nightly_linux_debug:
		test_security.TestSecurePublisherSubscriber.test_subscriber_terminates_in_a_finite_amount_of_time
	4 times in nightly_linux-aarch64_release:
		test_ros2trace.test_ros2trace.test.test_ros2trace.test_trace.TestROS2TraceCLI.test_start_pause_resume_stop
	4 times in nightly_linux-aarch64_debug:
		test_ros2trace.test_ros2trace.test.test_ros2trace.test_trace.TestROS2TraceCLI.test_env_var_ros_home
	4 times in nightly_win_deb:
		launch_testing_ros.test.examples.talker_listener_launch_test.talker_listener_launch_test
	3 times in nightly_linux-aarch64_debug:
		test_tracetools_launch.test_tracetools_launch.test.test_tracetools_launch.test_trace_action.TestTraceAction.test_action_context_per_domain
	3 times in nightly_win_deb:
		test_msgs.cpplint_rosidl_generated_cpp.xunit.missing_result
		rosidl_generator_tests.cpplint_rosidl_generated_cpp.xunit.missing_result
Open Issue: https://github.com/gazebosim/gz-sim/issues/2084
	5 times in gz_sim-ci-gz-sim8-jammy-amd64:
		INTEGRATION_distortion_camera.test_ran
Open Issue: https://github.com/gazebosim/gz-rendering/issues/847
	4 times in ignition_rendering-ci-ign-rendering6-homebrew-amd64:
		UNIT_Visual_TEST.test_ran
		UNIT_TransformController_TEST.test_ran
		UNIT_ThermalCamera_TEST.test_ran
		UNIT_Scene_TEST.test_ran
		UNIT_RenderingIface_TEST.test_ran
		(18 more errors not shown)
	3 times in ignition_rendering-ci-ign-rendering6-homebrew-amd64:
		UNIT_WireBox_TEST.test_ran
		UNIT_Text_TEST.test_ran
		UNIT_OrthoViewController_TEST.test_ran
		UNIT_LightVisual_TEST.test_ran
		UNIT_LidarVisual_TEST.test_ran
		(5 more errors not shown)
Open Issue: https://github.com/gazebosim/gz-fuel-tools/issues/370
	4 times in ign_fuel-tools-gz-9-win:
		CollectionTest/DownloadCollectionTest.Models/2
		CollectionTest/DownloadCollectionTest.Models/1
		CollectionTest/DownloadCollectionTest.Models/0
		CollectionTest/DownloadCollectionTest.AllItems/2
		CollectionTest/DownloadCollectionTest.AllItems/1
		(2 more errors not shown)
Open Issue: https://github.com/gazebosim/gz-sim/issues/1887
	4 times in ignition_gazebo-ci-ign-gazebo6-homebrew-amd64:
		.ign-gazebo.python.test.testFixture_TEST
Open Issue: https://github.com/ros2/rclcpp/issues/2230
	4 times in nightly_win_deb:
		projectroot.test.rclcpp.test_publisher_subscription_count_api
	3 times in nightly_win_deb:
		rclcpp.test_publisher_subscription_count_api.gtest.missing_result
Open Issue: https://github.com/ros2/rosbag2/issues/1437
	3 times in nightly_win_deb:
		rosbag2_tests.test_rosbag2_play_end_to_end.gtest.missing_result
		projectroot.test_rosbag2_play_end_to_end
```

</details>


# Links to other pages

## Guides

* [Investigate failing tests](./test_regressions_investigation.md#investigate-failing-tests)
* [Buildfarmer triage tools](./buildfarmer_triage_tools.md#buildfarmer-triage-tools)
  * [is_known_issue.sql](./buildfarmer_triage_tools.md#is_known_issuesql)
  * [get_known_issues.sql](./buildfarmer_triage_tools.md#get_known_issuessql)
  * [issue_save_new.sh](./buildfarmer_triage_tools.md#issue_save_newsh)
  * [issue_close.sql](./buildfarmer_triage_tools.md#issue_closesql)
  * [errors_check_last_build.sql](./buildfarmer_triage_tools.md#errors_check_last_buildsql)

[Back :arrow_backward: ](../index.md)
