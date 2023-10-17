# Investigating Build regressions

When a build fails to compile a package or a set of packages, or fails to set up the environment, it's called a build regression. You can identify them because they look red and scary in the buildfarm dashboard.

When investigating a build regression it's important to identify the root cause of the issue, this may vary from a missing dependency to a bug in the code. The buildfarmer should be able to identify the root cause and report it to the corresponding project team.

Some build regressions are already known, so it's important to check if the issue is already reported in GitHub. If it's not, then the buildfarmer should report it.


## Investigation steps

Before investigating a build regression, you should check if the issue is already reported in GitHub. If it's not, then you can proceed to investigate the issue.

Normally, you will follow the next steps:

1. Identify the job that failed
2. Check the logs of the failed build
  * You may need to download the logs locally using [ci-log](./buildfarmer_triage_tools.md#ci-log)
3. Check which package failed to compile
  * To grep the package in the logs, you can use `Failed   <<< (.*)` regex.
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
  * For Gazebo, you can ask in Addisu Taddese (azeey) in GitHub.

Before you go, you may want to check the [common causes](#common-causes) section to see if the issue is already known.

## Common causes

### Jenkins channel closing down (Agent disconnected)

Sometimes, AWS disconnects the agents during a build and the build fails. This is a known issue, and you should wait until the job is rescheduled.

You can identify this issue by looking at the logs and seeing the following message:

```
java.nio.channels.ClosedChannelException
```

### Package *X* failed

When a package fails to build, it's important to check the logs to identify the root cause. You may find useful [ci-log](./buildfarmer_triage_tools.md#ci-log) to download the logs and check them locally.

Remember to check the changes between the last successful build and the failed build using [`./comparebuildrepos.rb`](./buildfarmer_triage_tools.md#comparebuildreposrb) (already explained in item 4 of the previous section).

### Build timed out after *X* minutes

Some builds take a long time to complete, and they may timeout. This is normally a flaky issue.

You can identify this issue by looking at Jenkins job and seeing _Build timed out after \<X> seconds_ in the build.

There could be two reasons for it:
1. The build got stuck in a step and it didn't finish.
  * If this problem happens frequently, you may need to make a complete investigation to report it.
2. The build is taking too long to complete.
  * Sometimes the build just takes too much time to complete. In this case, you can ask the ROS and Gazebo teams if they know about the issue adding all the information you have gathered so far.

# Links to other pages

## Guides

* [Buildfarm Triage Tools](./buildfarmer_triage_tools.md)
  * [ci-log](./buildfarmer_triage_tools.md#ci-log)
  * [fetch.rb](./buildfarmer_triage_tools.md#fetchrb)
  * [comparebuildrepos.rb](./buildfarmer_triage_tools.md#comparebuildreposrb)
  * [comparepip.py](./buildfarmer_triage_tools.md#comparepippy)

[Back :arrow_backward: ](../index.md)
