# Standalone services dashboard
## [ROS buildfarm](https://build.ros.org/)
### doc_rosindex [![Build Status](https://build.ros.org/job/doc_rosindex/badge/icon)](https://build.ros.org/job/doc_rosindex/)
This job generates https://index.ros.org/ which is the entry point for searching ROS and ROS 2 resources, including packages, repositories, system dependencies and documentation.

[Source code](https://github.com/ros-infrastructure/ros_buildfarm_config/blob/production/doc-rosindex.yaml)

### doc_ros2doc [![Build Status](https://build.ros.org/job/doc_ros2doc/badge/icon)](https://build.ros.org/job/doc_ros2doc/)
This job generates https://docs.ros.org/ but specifically for the ROS2 distros.


[Source code](https://github.com/ros-infrastructure/ros_buildfarm_config/blob/production/doc-ros2-documentation.yaml)

### doc_independent-packages [![Build Status](https://build.ros.org/job/doc_independent-packages/badge/icon)](https://build.ros.org/job/doc_independent-packages/)

Generates all independent ROS packages that are not released with a distro. List packages [here](http://docs.ros.org/en/independent/) 

[Source code](https://github.com/ros-infrastructure/ros_buildfarm_config/blob/production/doc-independent-build.yaml)