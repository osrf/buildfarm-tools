# Looking for regressions

The first task of the buildfarmer is to look for build and test regressions. To do that you may follow the next steps:

## 1. Check failing jobs on buildfarm dashboards

The buildfarm dashboards are a good way to check the status of the buildfarm, since they show the status of the jobs in a more visual way. There are 3 types of jobs:
- **Green (Passing)**: The job is passing both the building and test stages.
- **Yellow (Unstable)**: The job is building but tests are failing or there are warnings on the build.
- **Red (Failing)**: The job is failing in the building or testing stages or there are a lot of test regressions in the build.

Dashboard list:
* [ROS2  Dashboard](https://github.com/osrf/buildfarmer/blob/main/ROS2.md)
* [Gazebo Dashboard](https://github.com/osrf/buildfarmer/blob/main/Ignition.md)
* [Gazebo Classic Dashboard](https://github.com/osrf/buildfarmer/blob/main/Gazebo.md)
* [Colcon Dashboard](https://github.com/osrf/buildfarmer/blob/main/Colcon.md)

## 2. Check build regressions in the buildfarm

When you see any red build in the buildfarm, you should click on it and investigate why is it failing to look at the console output. Sometimes, the log output is too long, and clicking the `full output` button won't help because the page freezes.

When this happens, you need to use [ci-log](./buildfarmer_triage_tools.md#ci-log) script to download the console output and check the errors with a local editor (`./ci-log <url-to-build>`).

Then, you may follow the next guide to see how can you investigate a build regression: 

[**Build regressions investigation**](./build_regressions_investigation.md)

When you have finished getting information about the test regressions, you should report the ones that are not known issues. You may do that by creating an issue on the failing package repository.

We handle build regressions more carefully. You can inform in Slack channels and revert PRs in case that's needed.

## 3. Check test regressions in the buildfarm

After you checked all the build regressions, you should continue by checking test regressions. As there are a lot of them throughout the buildfarm, here are some steps to make the first look easier using [buildfarmer database tools](./buildfarmer_triage_tools.md#database-scripts):

1. Fetch the latest version of the buildfarmer database using `git pull`
2. Check test regressions by last build using [`check_buildfarm.rb`](./buildfarmer_triage_tools.md#check_buildfarmrb)
  * This script will list all the new possible issues of the last build of each job in the buildfarm (grouped by). Also, you will be able to see if the test regression is reported as a known issue or not, and in which jobs is the test failing.
3. Check each test regression statistics and failing reason. You can check [**Test regressions investigation**](./test_regressions_investigation.md) to get more information on how to do it.
4. Report the test regressions that are not known issues.
  * When you have finished getting information about the test regressions, you should report the ones that are not known issues. You may do that by creating an issue on the failing package repository.


# Links to other pages

## Guides

* [Build regressions investigation](./build_regressions_investigation.md)
* [Test regressions investigation](./test_regressions_investigation.md)
* [Known issues](./known_issues.md)
* [Buildfarm triage tools](./buildfarmer_triage_tools.md)
  * [ci-log](./buildfarmer_triage_tools.md#ci-log)
  * [buildfarmer database tools](./buildfarmer_triage_tools.md#database-scripts)
  * [databaseFetcher.py](./buildfarmer_triage_tools.md#databasefetcherpy)
  * [errors_check_last_build](./buildfarmer_triage_tools.md#errors_check_last_buildsql)

[Back :arrow_backward: ](../index.md)
