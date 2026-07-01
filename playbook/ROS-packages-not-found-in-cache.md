# ROS packages not found in cache

## Description

When running rosdep update in a ROS job (any of the buildfarms), you may see an error similar to the following:

```
...
File "/tmp/ros_buildfarm/ros_buildfarm/scripts/ci/build_task_generator.py", line 152, in write_install_list
  debian_pkg_versions = get_binary_package_versions(apt_cache, debian_pkg_names)
File "/tmp/ros_buildfarm/ros_buildfarm/common.py", line 175, in get_binary_package_versions
  pkg = apt_cache[debian_pkg_name]
File "/usr/lib/python3/dist-packages/apt/cache.py", line 301, in __getitem__
  raise KeyError('The cache has no package named %r' % key)
KeyError: "The cache has no package named 'ros-noetic-xmlrpcpp'"
```

This means that the packages were not found and there was probably and error in build.ros.org or build.ros2.org. 
> That's because these have the CD (Continuous Delivery) flow as a job pipeline (more details in [Steven!'s explanation on the buildfarm](https://vimeo.com/showcase/9954564/video/767169376)).

Depending on the distro you the fail (e.g., noetic in case of: `ros-noetic-xmlrpcpp`), you should if any of the jobs in build.ros.org of build.ros2.org manage tab failed. You may also want to check the [ros repositories](https://repositories.ros.org/status_page/) or [ros2 repositories](http://repo.ros2.org/status_page/) status pages to see if the repositories were generated correctly.

<details>

<summary>

#### Brief explanation of the repositories in ROS and ROS 2

</summary>

Each row is a package. A package can be fetched from source or binary. Each package is on three repositories: building, testing and main. Main repository is where the latest version of the package is located, it's the repository that the users use. Testing repository is where the packages are tested before being moved to main. Our CI jobs use the testing repositories. Building repository is where the packages are built before being moved to testing.

![repository-explanation](https://github.com/osrf/buildfarmer/assets/69475004/344e322b-fcd1-40da-a70a-57dbbbb23123)

</details>

One of the most common jobs that can be the cause of this is the `rel_sync-packages-to-testing` (present for each ros distribution and linux distribution). This job removes all packages from testing repository and imports all packages from building repository. If this job fails, this can cause the testing repository column to be empty (red) for each package.
> As CI jobs use the testing repository, you can only see them on CI builds or using manual testing


For our example, [Nrel_sync-packages-to-testing_focal_amd64/1134](https://build.ros.org/job/Nrel_sync-packages-to-testing_focal_amd64/1134/) failed, and this caused the noetic packages to not be found in testing repository.

## Fix

If the problem description is almost the same mentioned above, you may just manually retrigger the \<distro>-sync-packages-to-testing job so that the repositories are now generated. 

List of sync-packages-to-testing jobs:
* ROS 
  * [Nrel_sync-packages-to-testing_focal_amd64](https://build.ros.org/job/Nrel_sync-packages-to-testing_focal_amd64/)
* ROS 2
  * [Frel_sync-packages-to-testing_focal_amd64](https://build.ros2.org/job/Frel_sync-packages-to-testing_focal_amd64/)
  * [Hrel_sync-packages-to-testing_jammy_amd64](https://build.ros2.org/job/Hrel_sync-packages-to-testing_jammy_amd64/)
  * [Irel_sync-packages-to-testing_jammy_amd64](https://build.ros2.org/job/Irel_sync-packages-to-testing_jammy_amd64/)

[Back :arrow_backward: ](index.md)
