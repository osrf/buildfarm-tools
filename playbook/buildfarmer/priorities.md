# Open Robotics Buildfarmer Priorities

As the buildfarmer you have many things to look after.
Sometimes many issues will happen at once, but there is only one of you.
This page list categories of priorities where your highest priority is **first** in this page.
Solve the highest priority problem first when faced with multiple problems.

For how to solve problems, [see the Buildfarmer troubleshooting guide](./troubleshooting.md).

Before that, here are notes that apply within the categories of priorities.

## Note about ROS 2 support platforms

ROS 2 has tiered support platforms described in [REP 2000](https://github.com/ros-infrastructure/rep/blob/master/rep-2000.rst#support-tiers).
Every Tier 1 platform issue is always higher priority than issues on Tier 2 platforms.
Tier 3 platform issues may be ignored.

## Note about active releases

Issues in released versions of our software are higher priority than issues on the next version being developed.
Issues on released versions affect users who are trying to use our software.
There are more users of our software than there are of us, but our users may not have a representative to fix upstream issues for them.
In contrast issues on the next version affects everyone doing development, including us.
There is likely already someone at Open Robotics other than the buildfarmer who is motivated to fix the problem while you work on something else.
When this happens you should ask a colleague to fix the problem on the next version, otherwise they will assume you are already working on it.

## Note about pending releases

ROS, Gazebo, ROS 2, and Ignition are equal priority projects unless a project is less than a month to release.
For example, if Ignition J is due to release in 2 weeks then solving its test failures is higher priority than test failures on Ignition I, H, G, ... or ROS 2 or Gazebo.

## Note about End of Life releases

If a release is End of Life, then its issues may be ignored.
[Sometimes we at Open Robotics fix issues for EOL projects](https://discourse.ros.org/t/python-vcstools-0-1-42-1-breaks-hydro-on-ubuntu-precise/11188/3), but this is not the responsibility of the buildfarmer.

Pages showing lifetimes of projects:

* <https://ignitionrobotics.org/docs/all/releases>
* <https://github.com/ros-infrastructure/rep/blob/master/rep-2000.rst>
* <https://github.com/ros-infrastructure/rep/blob/master/rep-0003.rst>
* <http://gazebosim.org/#status>

## Note about test failure age

Newer test failures are higher priority to resolve than older test failures.
Solving newer failures may result in less overall work since they are likely due to recent changes that will be easier to find.
Failures that have been happening for a long time may be harder to root cause, and if no one is complaining then the underlying issue is probably lower impact.

# Priorities

## 1. Keep ROS and Ignition buildfarms online

* <http://build.ros2.org/>
* <https://build.osrfoundation.org/>
* <https://ci.ros2.org>

Make sure the website is up and the jenkins master is functioning.

Example problems:

* The Jenkins master ran out of memory and is not scheduling jobs
* The TLS/SSL certificate expired, and the website is not reachable without adding a security exception to one's browser
* Users are unable to log into their buildfarm account

## 2. Keep enough machines online to handle current demand for CI

* <http://build.ros2.org/computer>
* <https://build.osrfoundation.org/computer/>
* <https://ci.ros2.org/computer/>

Make sure there are enough machines to handle the current demand for the individual build farm.

Example problems:

* The queue for windows jobs is full on https://build.osrfoundation.org because one or more windows machines is offline
* The AWS spot instance price rose, causing https://build.ros2.org linux agents to go offline
* The queue of jobs on https://ci.ros2.org is backed up because someone did not use build/test arguments to limit the packages tested
* A build is long running / hanging and blocking one node.

## 3. Failing nightly jobs for [supported (Gazebo)](https://github.com/osrf/buildfarm-tools/blob/main/Gazebo.md) or [Tier 1 (ROS 2)](https://github.com/osrf/buildfarm-tools/blob/main/ROS2.md) platforms

Make sure builds are not red.
Builds that are red usually mean no tests were run, and this can hide new test failures.

Priorities in Tier 1 (ROS 2):  
Nightly platform CI >>> Distribution CI >> Packaging Status  
\[Debug, Release, Packaging\] Red >> \[Repeated\] Red >> \[Debug, Release, Packaging\] Yellow >> ~~\[Repeated\] Yellow~~  

Example problems:
* Gazebo packing jobs for Ubuntu are not successfully building
* ROS 2 master on Linux amd64 failed to build

## 4. Failing nightly jobs on [Tier 2 (ROS 2)](#note-about-ros-2-support-platforms) platforms

Make sure Tier 2 builds are not red once Tier 1 issues are solved.

Example problems:
* Fast-DDS Dynamic in ROS Humble stops building.

## 5. Test failures on [supported (Gazebo)](https://github.com/osrf/buildfarm-tools/blob/main/Gazebo.md) or [Tier 1 (ROS 2)](https://github.com/osrf/buildfarm-tools/blob/main/ROS2.md) platforms

Make sure the builds are not yellow.
Yellow builds means our software is not behaving as we promised.

Example problems:
* Security tests in the ROS 2 OSX nightly start failing

## 6. Keep machines using dependencies from rolling releases up to date

Some machines are not containerized, and get their dependencies from rolling releases.
These need to be periodically updated to make sure new users on those platforms can still use our software.

Example problems:
* Homebrew on OSX released a new version of PyQt5 which is used by ROS 2
* Chocolatey on Windows released a new version of Python which is used by ROS 2

## 7. Test failures on [Tier 2 (ROS 2)](#note-about-ros-2-support-platforms) platforms

Make sure Tier 2 builds are not yellow once Tier 1 issues are solved.

Example problems:
* Pub/sub tests in Fast-DDS Dynamic in ROS Humble starts failing

## 8. Infrastructure improvements

As the buildfarmer you may notice process or technical improvements that could be made.
This should be worked on when there are no pressing issues.
However, if an improvement helps resolve an issue in one of the other categories of issues then it should be given the same priority as the issue category.
