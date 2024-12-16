# ROS 2 Build Status
## Nightly Platform CI

Builds [ros2.repos](https://raw.githubusercontent.com/ros2/ros2/master/ros2.repos) from source.

* Nightly Jobs: https://ci.ros2.org/view/nightly/
* Packaging Jobs: https://ci.ros2.org/view/packaging/

|                           | Debug                                                                             | Release                                                                               | Repeated                                                                                | Packaging                                                                                 |
|---------------------------|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **x86_64 Ubuntu**  | [![Build Status][nightly-linux-debug-badge]][nightly-linux-debug]                 | [![Build Status][nightly-linux-release-badge]][nightly-linux-release]                 | [![Build Status][nightly-linux-repeated-badge]][nightly-linux-repeated]                 | [![Build Status][nightly-linux-packaging-badge]][nightly-linux-packaging]                 |
| **aarch64 Ubuntu** | [![Build Status][nightly-linux-aarch64-debug-badge]][nightly-linux-aarch64-debug] | [![Build Status][nightly-linux-aarch64-release-badge]][nightly-linux-aarch64-release] | [![Build Status][nightly-linux-aarch64-repeated-badge]][nightly-linux-aarch64-repeated] | [![Build Status][nightly-linux-aarch64-packaging-badge]][nightly-linux-aarch64-packaging] |
| **Windows**               | [![Build Status][nightly-win-debug-badge]][nightly-win-debug]                     | [![Build Status][nightly-win-release-badge]][nightly-win-release]                     | [![Build Status][nightly-win-repeated-badge]][nightly-win-repeated]                     | [![Build Status][nightly-win-packaging-badge]][nightly-win-packaging]                     |
| **RHEL(Tier2)**           | [![Build Status][nightly-linux-rhel-debug-badge]][nightly-linux-rhel-debug]                   | [![Build Status][nightly-linux-rhel-release-badge]][nightly-linux-rhel-release]                   | [![Build Status][nightly-linux-rhel-repeated-badge]][nightly-linux-rhel-repeated]                   | [![Build Status][nightly-linux-rhel-packaging-badge]][nightly-linux-rhel-packaging]                   |

## Distribution CI

From http://build.ros2.org . All Linux jobs, alternating days for released distributions: https://github.com/ros2/ros_buildfarm_config/pull/112

|  | Humble | Jazzy | Rolling |
|---|---|---|---|
| Nightly Release | [![Build Status][Hci-release-badge]][Hci-release] | [![Build Status][Jci-release-badge]][Jci-release] | [![Build Status][Rci-release-badge]][Rci-release] |
| Nightly Debug | [![Build Status][Hci-debug-badge]][Hci-debug] | [![Build Status][Jci-debug-badge]][Jci-debug] | [![Build Status][Rci-debug-badge]][Rci-debug] |
| Nightly Performance | [![Build Status][Hci-performance-badge]][Hci-performance] | [![Build Status][Jci-performance-badge]][Jci-performance] | [![Build Status][Rci-performance-badge]][Rci-performance] |
| Nightly Connext | [![Build Status][Hci-connext-badge]][Hci-connext] | [![Build Status][Jci-connext-badge]][Jci-connext] | [![Build Status][Rci-connext-badge]][Rci-connext] |
| Nightly Cyclone | [![Build Status][Hci-cyclone-badge]][Hci-cyclone] | [![Build Status][Jci-cyclone-badge]][Jci-cyclone] | [![Build Status][Rci-cyclone-badge]][Rci-cyclone] |
| Nightly FastRTPS | [![Build Status][Hci-fastrtps-badge]][Hci-fastrtps] | [![Build Status][Jci-fastrtps-badge]][Jci-fastrtps] | [![Build Status][Rci-fastrtps-badge]][Rci-fastrtps] |
| Nightly FastRTPS Dynamic | [![Build Status][Hci-fastrtps-dynamic-badge]][Hci-fastrtps-dynamic] | [![Build Status][Jci-fastrtps-dynamic-badge]][Jci-fastrtps-dynamic] | [![Build Status][Rci-fastrtps-dynamic-badge]][Rci-fastrtps-dynamic] |
| Benchmarks | [![Build Status][Hci-benchmark-badge]][Hci-benchmark] | [![Build Status][Jci-benchmark-badge]][Jci-benchmark] | [![Build Status][Rci-benchmark-badge]][Rci-benchmark] |
| Coverage | [![Build Status][Hci-coverage-badge]][Hci-coverage] | [![Build Status][Jci-coverage-badge]][Jci-coverage] | [![Build Status][Rci-coverage-badge]][Rci-coverage] |

## Upload OSUOSL Repositories
### ROS 1
* Upload Main: [![Build Status](https://build.ros.org/job/upload_main/badge/icon)](https://build.ros.org/job/upload_main/)
* Upload Testing: [![Build Status](https://build.ros.org/job/upload_testing/badge/icon)](https://build.ros.org/job/upload_testing/)

### ROS 2
* Upload Main: [![Build Status](https://build.ros2.org/job/upload_main/badge/icon)](https://build.ros2.org/job/upload_main/)
* Upload Testing: [![Build Status](https://build.ros2.org/job/upload_testing/badge/icon)](https://build.ros2.org/job/upload_testing/)

## Build index.ros.org
* Doc RosIndex: [![Build Status](https://build.ros.org/job/doc_rosindex/badge/icon)](https://build.ros.org/job/doc_rosindex/)

## Sync packages to testing jobs

> Check [ROS packages not found in cache](./playbook/ROS-packages-not-found-in-cache.md) for more information

| Distribution | Build Status |
| ------------ | ------------ |
| Noetic | [![Build Status](https://build.ros.org/job/Nrel_sync-packages-to-testing_focal_amd64/badge/icon)](https://build.ros.org/job/Nrel_sync-packages-to-testing_focal_amd64/) |
| Humble | [![Build Status](https://build.ros2.org/job/Hrel_sync-packages-to-testing_jammy_amd64/badge/icon)](https://build.ros2.org/job/Hrel_sync-packages-to-testing_jammy_amd64/) |
| Jazzy | [![Build Status](https://build.ros2.org/job/Jrel_sync-packages-to-testing_noble_amd64/badge/icon)](https://build.ros2.org/job/Jrel_sync-packages-to-testing_noble_amd64/) |
| Rolling | [![Build Status](https://build.ros2.org/job/Rrel_sync-packages-to-testing_noble_amd64/badge/icon)](https://build.ros2.org/job/Rrel_sync-packages-to-testing_noble_amd64/) |

[nightly-linux-debug]: https://ci.ros2.org/view/nightly/job/nightly_linux_debug
[nightly-linux-debug-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux_debug
[nightly-linux-release]: https://ci.ros2.org/view/nightly/job/nightly_linux_release
[nightly-linux-release-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux_release
[nightly-linux-repeated]: https://ci.ros2.org/view/nightly/job/nightly_linux_repeated
[nightly-linux-repeated-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux_repeated
[nightly-linux-packaging]: https://ci.ros2.org/view/packaging/job/packaging_linux
[nightly-linux-packaging-badge]: https://ci.ros2.org/buildStatus/icon?job=packaging_linux

[nightly-linux-aarch64-debug]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_debug
[nightly-linux-aarch64-debug-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux-aarch64_debug
[nightly-linux-aarch64-release]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_release
[nightly-linux-aarch64-release-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux-aarch64_release
[nightly-linux-aarch64-repeated]: https://ci.ros2.org/view/nightly/job/nightly_linux-aarch64_repeated
[nightly-linux-aarch64-repeated-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux-aarch64_repeated
[nightly-linux-aarch64-packaging]: https://ci.ros2.org/view/packaging/job/packaging_linux-aarch64
[nightly-linux-aarch64-packaging-badge]: https://ci.ros2.org/buildStatus/icon?job=packaging_linux-aarch64

[nightly-win-debug]: https://ci.ros2.org/view/nightly/job/nightly_win_deb
[nightly-win-debug-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_win_deb
[nightly-win-release]: https://ci.ros2.org/view/nightly/job/nightly_win_rel
[nightly-win-release-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_win_rel
[nightly-win-repeated]: https://ci.ros2.org/view/nightly/job/nightly_win_rep
[nightly-win-repeated-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_win_rep
[nightly-win-packaging]: https://ci.ros2.org/view/packaging/job/packaging_windows
[nightly-win-packaging-badge]: https://ci.ros2.org/buildStatus/icon?job=packaging_windows

[nightly-linux-rhel-debug]: https://ci.ros2.org/view/nightly/job/nightly_linux-rhel_debug
[nightly-linux-rhel-debug-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux-rhel_debug
[nightly-linux-rhel-release]: https://ci.ros2.org/view/nightly/job/nightly_linux-rhel_release
[nightly-linux-rhel-release-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux-rhel_release
[nightly-linux-rhel-repeated]: https://ci.ros2.org/view/nightly/job/nightly_linux-rhel_repeated
[nightly-linux-rhel-repeated-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux-rhel_repeated
[nightly-linux-rhel-packaging]: https://ci.ros2.org/view/packaging/job/packaging_linux-rhel
[nightly-linux-rhel-packaging-badge]: https://ci.ros2.org/buildStatus/icon?job=packaging_linux-rhel

[Hci-release-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-release_ubuntu_jammy_amd64
[Hci-release]: http://build.ros2.org/view/Hci/job/Hci__nightly-release_ubuntu_jammy_amd64/
[Hci-debug-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-debug_ubuntu_jammy_amd64
[Hci-debug]: http://build.ros2.org/view/Hci/job/Hci__nightly-debug_ubuntu_jammy_amd64/
[Hci-performance-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-performance_ubuntu_jammy_amd64
[Hci-performance]: http://build.ros2.org/view/Hci/job/Hci__nightly-performance_ubuntu_jammy_amd64/
[Hci-connext-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-connext_ubuntu_jammy_amd64
[Hci-connext]: http://build.ros2.org/view/Hci/job/Hci__nightly-connext_ubuntu_jammy_amd64/
[Hci-cyclone-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-cyclonedds_ubuntu_jammy_amd64
[Hci-cyclone]: http://build.ros2.org/view/Hci/job/Hci__nightly-cyclonedds_ubuntu_jammy_amd64/
[Hci-fastrtps-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-fastrtps_ubuntu_jammy_amd64
[Hci-fastrtps]: http://build.ros2.org/view/Hci/job/Hci__nightly-fastrtps_ubuntu_jammy_amd64/
[Hci-fastrtps-dynamic-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__nightly-fastrtps-dynamic_ubuntu_jammy_amd64
[Hci-fastrtps-dynamic]:  http://build.ros2.org/view/Hci/job/Hci__nightly-fastrtps-dynamic_ubuntu_jammy_amd64/
[Hci-benchmark-badge]: http://build.ros2.org/buildStatus/icon?job=Hci__benchmark_ubuntu_jammy_amd64
[Hci-benchmark]: http://build.ros2.org/view/Hci/job/Hci__benchmark_ubuntu_jammy_amd64/
[Hci-coverage-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux_humble_coverage
[Hci-coverage]: https://ci.ros2.org/job/nightly_linux_humble_coverage/

[Jci-release-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-release_ubuntu_noble_amd64
[Jci-release]: http://build.ros2.org/view/Jci/job/Jci__nightly-release_ubuntu_noble_amd64/
[Jci-debug-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-debug_ubuntu_noble_amd64
[Jci-debug]: http://build.ros2.org/view/Jci/job/Jci__nightly-debug_ubuntu_noble_amd64/
[Jci-performance-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-performance_ubuntu_noble_amd64
[Jci-performance]: http://build.ros2.org/view/Jci/job/Jci__nightly-performance_ubuntu_noble_amd64/
[Jci-connext-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-connext_ubuntu_noble_amd64
[Jci-connext]: http://build.ros2.org/view/Jci/job/Jci__nightly-connext_ubuntu_noble_amd64/
[Jci-cyclone-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-cyclonedds_ubuntu_noble_amd64
[Jci-cyclone]: http://build.ros2.org/view/Jci/job/Jci__nightly-cyclonedds_ubuntu_noble_amd64/
[Jci-fastrtps-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-fastrtps_ubuntu_noble_amd64
[Jci-fastrtps]: http://build.ros2.org/view/Jci/job/Jci__nightly-fastrtps_ubuntu_noble_amd64/
[Jci-fastrtps-dynamic-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__nightly-fastrtps-dynamic_ubuntu_noble_amd64
[Jci-fastrtps-dynamic]:  http://build.ros2.org/view/Jci/job/Jci__nightly-fastrtps-dynamic_ubuntu_noble_amd64/
[Jci-benchmark-badge]: http://build.ros2.org/buildStatus/icon?job=Jci__benchmark_ubuntu_noble_amd64
[Jci-benchmark]: http://build.ros2.org/view/Jci/job/Jci__benchmark_ubuntu_noble_amd64/
[Jci-coverage-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux_jazzy_coverage
[Jci-coverage]: https://ci.ros2.org/job/nightly_linux_jazzy_coverage/

[Rci-release-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-release_ubuntu_noble_amd64
[Rci-release]: http://build.ros2.org/view/Rci/job/Rci__nightly-release_ubuntu_noble_amd64/
[Rci-debug-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-debug_ubuntu_noble_amd64
[Rci-debug]: http://build.ros2.org/view/Rci/job/Rci__nightly-debug_ubuntu_noble_amd64/
[Rci-performance-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-performance_ubuntu_noble_amd64
[Rci-performance]: http://build.ros2.org/view/Rci/job/Rci__nightly-performance_ubuntu_noble_amd64/
[Rci-connext-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-connext_ubuntu_noble_amd64
[Rci-connext]: http://build.ros2.org/view/Rci/job/Rci__nightly-connext_ubuntu_noble_amd64/
[Rci-cyclone-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-cyclonedds_ubuntu_noble_amd64
[Rci-cyclone]: http://build.ros2.org/view/Rci/job/Rci__nightly-cyclonedds_ubuntu_noble_amd64/
[Rci-fastrtps-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-fastrtps_ubuntu_noble_amd64
[Rci-fastrtps]: http://build.ros2.org/view/Rci/job/Rci__nightly-fastrtps_ubuntu_noble_amd64/
[Rci-fastrtps-dynamic-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__nightly-fastrtps-dynamic_ubuntu_noble_amd64
[Rci-fastrtps-dynamic]:  http://build.ros2.org/view/Rci/job/Rci__nightly-fastrtps-dynamic_ubuntu_noble_amd64/
[Rci-benchmark-badge]: http://build.ros2.org/buildStatus/icon?job=Rci__benchmark_ubuntu_noble_amd64
[Rci-benchmark]: http://build.ros2.org/view/Rci/job/Rci__benchmark_ubuntu_noble_amd64/
[Rci-coverage-badge]: https://ci.ros2.org/buildStatus/icon?job=nightly_linux_coverage
[Rci-coverage]: https://ci.ros2.org/job/nightly_linux_coverage/


