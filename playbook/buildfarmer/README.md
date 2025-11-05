# What is the buildfarmer role?

> The buildfarmer is in charge of monitoring [build regressions](#build-regression), [test regresions](#test-regression), [flaky tests](#flaky-test) and general warnings on the buildfarm. As well, it reports any issue to the corresponding project team and tracks the status until it's resolved.

# How does the buildfarmer role work?

Every buildfarmer should follow the priorities defined for triaging issues.

1. Keep the buildfarms up and running (build.ros.org, build.ros2.org, build.osrfoundation.org, ci.ros2.org)
2. Keep enough machines to handle current demand for CI
3. Check build regressions
4. Check test regressions

For items 1 and 2 refer to the [priorities document](./priorities.md#priorities) items 1 and 2.

Items 3 and 4 are covered in [Looking for regressions](./looking_for_regressions.md).

> **Note**
> For ROS, we prioritize regressions based on [REP2000 support tiers](https://github.com/ros-infrastructure/rep/blob/master/rep-2000.rst#support-tiers) for each distribution
> E.g., we will check regressions in linux builds before checking regressions in RHEL builds.
> 
> In the case of Gazebo, all packages in each official distribution and for each supported OS, are the same priority.

To acomplish the above tasks, the buildfarmer has a set of tools and resources to work with. For more information refer to [Buildfarmer triage tools](./buildfarmer_triage_tools.md).

Check the [buildfarmer scripted day](./scripted_buildfarm_day.md) to get the big picture of the buildfarmer role.

After checking that the buildfarm is up and running, and that there are enough machines, the buildfarmer should check for regressions:  [Looking for regressions](./looking_for_regressions.md).

[Back :arrow_backward: ](../index.md)


### Glossary

#### Build regression

A build regression is a build that previously was working correctly and has now started failing. (e.g. a package that previously compiled correctly now fails to compile)

#### Test regression

A test regression is a test that previously was working correctly and has now started failing. (e.g. a test in a job that previously passed now fails)

#### Flaky test

A flaky test is a test that fails inconsistently, sometimes passing and other times failing.
