window.DASHBOARD_DATA = {
  "buildfarm_statistics": {
    "consistent_failures": 0,
    "flaky_issues": 53,
    "known_issues": 13,
    "reported_regressions": 15,
    "reported_regressions_pct": 28.3,
    "total_regressions": 53
  },
  "generated_at": "2026-07-13T20:23:25Z",
  "known_issues": [
    {
      "assignee": null,
      "issue_id": "https://github.com/gazebosim/gz-physics/issues/1018",
      "last_activity_date": "2026-06-26",
      "last_seen_in_build_date": "2026-06-26",
      "priority": 0.98,
      "status": "NOT ASSIGNED",
      "title": "gazebosim/gz-physics#1018"
    },
    {
      "assignee": "mjcarroll",
      "issue_id": "https://github.com/ros2/rviz/issues/1809",
      "last_activity_date": "2026-06-26",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 0.475,
      "status": "INVESTIGATING",
      "title": "ros2/rviz#1809"
    },
    {
      "assignee": "fgallegosalido",
      "issue_id": "https://github.com/ros2/rmw_connextdds/issues/242",
      "last_activity_date": "2026-06-23",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 0.9,
      "status": "INVESTIGATING",
      "title": "ros2/rmw_connextdds#242"
    },
    {
      "assignee": null,
      "issue_id": "https://github.com/ros2/ros2cli/issues/1229",
      "last_activity_date": "2026-05-19",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 0.9,
      "status": "NOT ASSIGNED",
      "title": "ros2/ros2cli#1229"
    },
    {
      "assignee": null,
      "issue_id": "https://github.com/ros2/rmw_cyclonedds/issues/583",
      "last_activity_date": "2026-05-13",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 3.598,
      "status": "NOT ASSIGNED",
      "title": "ros2/rmw_cyclonedds#583"
    },
    {
      "assignee": "mjcarroll",
      "issue_id": "https://github.com/ros2/ros2cli/issues/1129",
      "last_activity_date": "2026-05-11",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 0.025,
      "status": "INVESTIGATING",
      "title": "ros2/ros2cli#1129"
    },
    {
      "assignee": null,
      "issue_id": "https://github.com/ros2/rmw_zenoh/issues/972",
      "last_activity_date": "2026-04-29",
      "last_seen_in_build_date": "2026-06-27",
      "priority": 0.308,
      "status": "NOT ASSIGNED",
      "title": "ros2/rmw_zenoh#972"
    },
    {
      "assignee": "fgallegosalido",
      "issue_id": "https://github.com/ros2/demos/issues/693",
      "last_activity_date": "2026-04-06",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 1.764,
      "status": "INVESTIGATING",
      "title": "ros2/demos#693"
    },
    {
      "assignee": null,
      "issue_id": "https://github.com/ros2/rclpy/issues/1480",
      "last_activity_date": "2026-04-06",
      "last_seen_in_build_date": "2026-07-06",
      "priority": 0.955,
      "status": "NOT ASSIGNED",
      "title": "ros2/rclpy#1480"
    },
    {
      "assignee": "fgallegosalido,lobolanja",
      "issue_id": "https://github.com/ros2/rmw_connextdds/issues/136",
      "last_activity_date": "2026-04-06",
      "last_seen_in_build_date": "2026-07-06",
      "priority": 0.05,
      "status": "INVESTIGATING",
      "title": "ros2/rmw_connextdds#136"
    },
    {
      "assignee": "asorbini",
      "issue_id": "https://github.com/ros2/rmw_connextdds/issues/220",
      "last_activity_date": "2026-03-17",
      "last_seen_in_build_date": "2026-07-10",
      "priority": 1.427,
      "status": "INVESTIGATING",
      "title": "ros2/rmw_connextdds#220"
    },
    {
      "assignee": "clalancette",
      "issue_id": "https://github.com/ros2/rcl/issues/1162",
      "last_activity_date": "2024-11-12",
      "last_seen_in_build_date": "2026-06-29",
      "priority": 0.218,
      "status": "INVESTIGATING",
      "title": "ros2/rcl#1162"
    },
    {
      "assignee": null,
      "issue_id": "https://github.com/ros-perception/image_common/pull/358",
      "last_activity_date": null,
      "last_seen_in_build_date": "2026-06-23",
      "priority": 0.211,
      "status": "NOT ASSIGNED",
      "title": "ros-perception/image_common#358"
    }
  ],
  "regressions": {
    "consistent": [],
    "flaky": [
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 68.75,
        "failure_count": 33,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux-aarch64_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 16,
            "failure_percentage": 94.12,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 15,
            "failure_percentage": 93.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 68.75,
            "failure_count": 33,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1129",
            "package": "ros2topic",
            "test_name": "ros2topic.pytest.missing_result",
            "total_runs": 48
          }
        ],
        "linked_issue": "https://github.com/ros2/ros2cli/issues/1129",
        "package": "ros2topic",
        "suspect_commits": null,
        "test_name": "ros2topic.pytest.missing_result",
        "total_runs": 48
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 56.0,
        "failure_count": 56,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux-aarch64_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 16,
            "failure_percentage": 94.12,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 15,
            "failure_percentage": 93.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 11,
            "failure_percentage": 61.11,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 10,
            "failure_percentage": 58.82,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 12,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_0",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_1",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_2",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_3",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_not_connecting_0",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_not_connecting_1",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_0",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_1",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_2",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_3",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_not_connecting_0",
            "total_runs": 100
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 56.0,
            "failure_count": 56,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_not_connecting_1",
            "total_runs": 100
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_0",
        "total_runs": 100
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 53.47,
        "failure_count": 54,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux-aarch64_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 15,
            "failure_percentage": 88.24,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 14,
            "failure_percentage": 87.5,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 11,
            "failure_percentage": 61.11,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 10,
            "failure_percentage": 58.82,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-07-04",
            "job_name": "nightly_linux-rhel_release",
            "last_fail": "2026-07-05",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 53.47,
            "failure_count": 54,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.TestSecurePublisherSubscriber.test_subscriber_terminates_in_a_finite_amount_of_time",
            "total_runs": 101
          }
        ],
        "linked_issue": null,
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.TestSecurePublisherSubscriber.test_subscriber_terminates_in_a_finite_amount_of_time",
        "total_runs": 101
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 50.0,
        "failure_count": 8,
        "flakiness_report": [
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 9,
            "failure_percentage": 100.0,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 27,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_count_clients",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_count_publishers",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_count_services",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_count_subscribers",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_action_client_names_and_types_by_node",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_action_names_and_types",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_action_server_names_and_types_by_node",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_client_names_and_types_by_node",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_clients_info_by_service",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_name",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_namespace",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_node_names_and_namespaces",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_node_names_and_namespaces_with_enclaves",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_publisher_names_and_types_by_node",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_publishers_info_by_topic",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_servers_info_by_service",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_service_names_and_types",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_service_names_and_types_by_node",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_subscriber_names_and_types_by_node",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_subscriptions_info_by_topic",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_get_topic_names_and_types",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_strategy.test_enforce_no_daemon",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_strategy.test_with_daemon_running",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_strategy.test_with_daemon_spawn",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": null,
            "package": "ros2multicast",
            "test_name": "ros2multicast.ros2multicast.test.test_api.test_api",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": null,
            "package": "ros2multicast",
            "test_name": "ros2multicast.ros2multicast.test.test_api.test_group_and_port",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 50.0,
            "failure_count": 8,
            "linked_issue": null,
            "package": "ros2multicast",
            "test_name": "ros2multicast.ros2multicast.test.test_api.test_port_mismatch",
            "total_runs": 16
          }
        ],
        "linked_issue": "https://github.com/ros2/ros2cli/issues/1229",
        "package": "ros2cli",
        "suspect_commits": null,
        "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_count_clients",
        "total_runs": 16
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 49.15,
        "failure_count": 58,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux-aarch64_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 16,
            "failure_percentage": 94.12,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 15,
            "failure_percentage": 93.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 11,
            "failure_percentage": 61.11,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 10,
            "failure_percentage": 58.82,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-07-04",
            "job_name": "nightly_linux-rhel_release",
            "last_fail": "2026-07-05",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 49.15,
            "failure_count": 58,
            "linked_issue": "https://github.com/ros2/rmw_cyclonedds/issues/583",
            "package": "test_security",
            "test_name": "test_security.TestSecurePublisherSubscriberAfterShutdown.test_processes_finished_gracefully",
            "total_runs": 118
          }
        ],
        "linked_issue": "https://github.com/ros2/rmw_cyclonedds/issues/583",
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.TestSecurePublisherSubscriberAfterShutdown.test_processes_finished_gracefully",
        "total_runs": 118
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 45.95,
        "failure_count": 17,
        "flakiness_report": [
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 16,
            "failure_percentage": 94.12,
            "first_fail": "2026-06-23",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-07-04",
            "job_name": "nightly_linux-rhel_release",
            "last_fail": "2026-07-05",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 45.95,
            "failure_count": 17,
            "linked_issue": "https://github.com/ros2/rviz/issues/1809",
            "package": "cmake",
            "test_name": "1 cmake warnings",
            "total_runs": 37
          }
        ],
        "linked_issue": "https://github.com/ros2/rviz/issues/1809",
        "package": "cmake",
        "suspect_commits": null,
        "test_name": "1 cmake warnings",
        "total_runs": 37
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 41.18,
        "failure_count": 14,
        "flakiness_report": [
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 8,
            "failure_percentage": 44.44,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 6,
            "failure_percentage": 37.5,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-06",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 41.18,
            "failure_count": 14,
            "linked_issue": null,
            "package": "pendulum_control",
            "test_name": "pendulum_control.TestPendulumTeleop.test_pendulum_demo_output",
            "total_runs": 34
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 41.18,
            "failure_count": 14,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_pendulum_teleop__rmw_connextdds",
            "total_runs": 34
          }
        ],
        "linked_issue": null,
        "package": "pendulum_control",
        "suspect_commits": null,
        "test_name": "pendulum_control.TestPendulumTeleop.test_pendulum_demo_output",
        "total_runs": 34
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 37.5,
        "failure_count": 6,
        "flakiness_report": [
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 6,
            "failure_percentage": 66.67,
            "first_fail": "2026-06-29",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 37.5,
            "failure_count": 6,
            "linked_issue": null,
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_daemon_shuts_down_after_inactivity_timeout",
            "total_runs": 16
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 37.5,
            "failure_count": 6,
            "linked_issue": null,
            "package": "ros2cli",
            "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_negative_inactivity_timeout_never_shuts_down",
            "total_runs": 16
          }
        ],
        "linked_issue": null,
        "package": "ros2cli",
        "suspect_commits": null,
        "test_name": "ros2cli.ros2cli.test.test_ros2cli_daemon.test_daemon_shuts_down_after_inactivity_timeout",
        "total_runs": 16
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 35.71,
        "failure_count": 35,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 14,
            "failure_percentage": 87.5,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 14,
            "failure_percentage": 77.78,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 33.33,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-07",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-06-29",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-28",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-28",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 35.71,
            "failure_count": 35,
            "linked_issue": "https://github.com/ros2/demos/issues/693",
            "package": "demo_nodes_cpp",
            "test_name": "demo_nodes_cpp.TestExecutablesTutorial.test_processes_output",
            "total_runs": 98
          }
        ],
        "linked_issue": "https://github.com/ros2/demos/issues/693",
        "package": "demo_nodes_cpp",
        "suspect_commits": null,
        "test_name": "demo_nodes_cpp.TestExecutablesTutorial.test_processes_output",
        "total_runs": 98
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 34.69,
        "failure_count": 34,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 12,
            "failure_percentage": 75.0,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 13,
            "failure_percentage": 72.22,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-06-29",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-28",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-28",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 34.69,
            "failure_count": 34,
            "linked_issue": "https://github.com/ros2/demos/issues/693",
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_parameter_events__rmw_connextdds",
            "total_runs": 98
          }
        ],
        "linked_issue": "https://github.com/ros2/demos/issues/693",
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_tutorial_parameter_events__rmw_connextdds",
        "total_runs": 98
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 29.73,
        "failure_count": 11,
        "flakiness_report": [
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 10,
            "failure_percentage": 58.82,
            "first_fail": "2026-06-23",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 29.73,
            "failure_count": 11,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.test_guard_condition__rmw_zenoh_cpp",
            "total_runs": 37
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 29.73,
            "failure_count": 11,
            "linked_issue": null,
            "package": "rcl",
            "test_name": "rcl.TestGuardConditionFixture.test_rcl_guard_condition_accessors",
            "total_runs": 37
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test.test_guard_condition__rmw_zenoh_cpp",
        "total_runs": 37
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 29.03,
        "failure_count": 9,
        "flakiness_report": [
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 9,
            "failure_percentage": 100.0,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 29.03,
            "failure_count": 9,
            "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/242",
            "package": "msbuild",
            "test_name": "1 msbuild warnings",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 29.03,
            "failure_count": 9,
            "linked_issue": null,
            "package": "sros2",
            "test_name": "sros2.test.sros2.commands.security.verbs.test_generate_policy.test_generate_policy",
            "total_runs": 31
          }
        ],
        "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/242",
        "package": "msbuild",
        "suspect_commits": null,
        "test_name": "1 msbuild warnings",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 25.81,
        "failure_count": 8,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 8,
            "failure_percentage": 88.89,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 25.81,
            "failure_count": 8,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestActionClientServerAfterShutdown.test_processes_finished_gracefully[NestedMessage]",
            "total_runs": 31
          }
        ],
        "linked_issue": null,
        "package": "test_communication",
        "suspect_commits": null,
        "test_name": "test_communication.TestActionClientServerAfterShutdown.test_processes_finished_gracefully[NestedMessage]",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 25.0,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-04",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 25.0,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestActionClientServer.test_client_finishes_in_a_finite_amount_of_time[NestedMessage]",
            "total_runs": 16
          }
        ],
        "linked_issue": null,
        "package": "test_communication",
        "suspect_commits": null,
        "test_name": "test_communication.TestActionClientServer.test_client_finishes_in_a_finite_amount_of_time[NestedMessage]",
        "total_runs": 16
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 22.58,
        "failure_count": 7,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 7,
            "failure_percentage": 77.78,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 22.58,
            "failure_count": 7,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestActionClientServerAfterShutdown.test_processes_finished_gracefully[Fibonacci]",
            "total_runs": 31
          }
        ],
        "linked_issue": null,
        "package": "test_communication",
        "suspect_commits": null,
        "test_name": "test_communication.TestActionClientServerAfterShutdown.test_processes_finished_gracefully[Fibonacci]",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 22.22,
        "failure_count": 12,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 50.0,
            "first_fail": "2026-07-10",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 8,
            "failure_percentage": 44.44,
            "first_fail": "2026-06-26",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 17.65,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 22.22,
            "failure_count": 12,
            "linked_issue": null,
            "package": "ros2topic",
            "test_name": "ros2topic.ros2topic.test.test_bw_delay_hz.test_bw_delay_hz",
            "total_runs": 54
          }
        ],
        "linked_issue": null,
        "package": "ros2topic",
        "suspect_commits": null,
        "test_name": "ros2topic.ros2topic.test.test_bw_delay_hz.test_bw_delay_hz",
        "total_runs": 54
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 22.22,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 22.22,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-01",
            "project": "ROS"
          }
        ],
        "group_size": 4,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 22.22,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_launch_ros",
            "test_name": "test_launch_ros.test.test_launch_ros.actions.test_load_composable_nodes.test_load_node_with_condition_in_group[1-3]",
            "total_runs": 18
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 22.22,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_launch_ros",
            "test_name": "test_launch_ros.test.test_launch_ros.actions.test_load_composable_nodes.test_load_node_with_namespace_in_group[3-3]",
            "total_runs": 18
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 16.67,
            "failure_count": 3,
            "linked_issue": null,
            "package": "message_filters",
            "test_name": "message_filters.LatestTimePolicy.Trailing",
            "total_runs": 18
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 16.67,
            "failure_count": 3,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.message_filters_test_latest_time_policy",
            "total_runs": 18
          }
        ],
        "linked_issue": null,
        "package": "test_launch_ros",
        "suspect_commits": null,
        "test_name": "test_launch_ros.test.test_launch_ros.actions.test_load_composable_nodes.test_load_node_with_condition_in_group[1-3]",
        "total_runs": 18
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 20.0,
        "failure_count": 13,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 16.67,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-09",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 20.0,
            "failure_count": 13,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_services__rmw_connextdds",
            "total_runs": 65
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_play_services__rmw_connextdds",
        "total_runs": 65
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 20.0,
        "failure_count": 13,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 6,
            "failure_percentage": 66.67,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 22.22,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-06-29",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-01",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 20.0,
            "failure_count": 13,
            "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/220",
            "package": "projectroot",
            "test_name": "projectroot.test_record_services__rmw_connextdds",
            "total_runs": 65
          }
        ],
        "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/220",
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_record_services__rmw_connextdds",
        "total_runs": 65
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 20.0,
        "failure_count": 13,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 22.22,
            "first_fail": "2026-06-28",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-09",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 20.0,
            "failure_count": 13,
            "linked_issue": "https://github.com/ros2/demos/issues/693",
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_parameter_events_async__rmw_connextdds",
            "total_runs": 65
          }
        ],
        "linked_issue": "https://github.com/ros2/demos/issues/693",
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_tutorial_parameter_events_async__rmw_connextdds",
        "total_runs": 65
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 19.35,
        "failure_count": 6,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 96,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_avoid_ros_namespace_conventions_qos__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_client_wait_for_service_shutdown__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_executor__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_intra_process__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_local_parameters__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_publisher__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_repeated_publisher_subscriber__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_services_in_constructor__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_spin__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_timeout_subscriber__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_timer__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_waitable__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_add_callback_groups_to_executor__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_generic_pubsub__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_qos_event__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_subscription_content_filter__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_action_client_server__rclcpp__rclpy__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_action_client_server__rclcpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_best_available__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_burst__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_client_scope_consistency_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_client_scope_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_composable_player__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_composable_recorder__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_deadline__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_keyboard_controls__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_lifespan__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_liveliness__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_load_composable_components__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_n_nodes__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_nested_types__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_parameter_server_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_callbacks__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_duration__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_next__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_seek__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_timing__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_play_until__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_player_stop__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber__rclcpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber__rclcpp__rmw_cyclonedds_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber__rclpy__rclcpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber__rclpy__rclcpp__rmw_cyclonedds_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Arrays",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__BasicTypes",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__BoundedPlainSequences",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__BoundedSequences",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Builtins",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__ComplexNestedKey",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Constants",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Defaults",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Empty",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__KeyedLong",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__KeyedString",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__MultiNested",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Nested",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__NonKeyedWithNestedKey",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__Strings",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__UnboundedSequences",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_cpp__rmw_connextdds__WStrings",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber_serialized__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_record_all_ignore_leaf_topics__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_record_all_include_unpublished_topics__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_record_all_no_discovery__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_record_all_use_sim_time__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_requester_replier__rclcpp__rclpy__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_requester_replier__rclcpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_services_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_subscription_valid_data_cpp__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_add_two_ints_server_add_two_ints_client__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_add_two_ints_server_add_two_ints_client_async__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_list_parameters__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_list_parameters_async__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_matched_event_detect__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_set_and_get_parameters__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_set_and_get_parameters_async__rmw_connextdds",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Arrays]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[BoundedPlainSequences]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[BoundedSequences]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Builtins]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[ComplexNestedKey]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Constants]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Defaults]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Empty]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[KeyedLong]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[KeyedString]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[MultiNested]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Nested]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[NonKeyedWithNestedKey]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[Strings]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[WStrings]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestRequesterReplierAfterShutdown.test_processes_finished_gracefully[BasicTypes]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestRequesterReplierAfterShutdown.test_processes_finished_gracefully[Empty]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.TestTwoExecutablesAfterShutdown.test_client_scope_cpp",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.TestTwoExecutablesAfterShutdown.test_parameter_server_cpp",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 16.13,
            "failure_count": 5,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestActionClientServer.test_client_finishes_in_a_finite_amount_of_time[Fibonacci]",
            "total_runs": 31
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.gtest_avoid_ros_namespace_conventions_qos__rmw_connextdds",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 19.35,
        "failure_count": 6,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 6,
            "failure_percentage": 66.67,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_action_client_server__rclcpp__rmw_zenoh_cpp",
            "total_runs": 31
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_action_client_server__rclcpp__rmw_zenoh_cpp",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          },
          {
            "arch": "aarch64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 19.35,
        "failure_count": 6,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-06-23",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-23",
            "project": "ROS"
          }
        ],
        "group_size": 3,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 19.35,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestRequesterReplierAfterShutdown.test_processes_finished_gracefully[Arrays]",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 14.89,
            "failure_count": 7,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.gtest_multiple_service_calls__rmw_connextdds",
            "total_runs": 47
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 14.89,
            "failure_count": 7,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_tutorial_use_logger_service__rmw_connextdds",
            "total_runs": 47
          }
        ],
        "linked_issue": null,
        "package": "test_communication",
        "suspect_commits": null,
        "test_name": "test_communication.TestRequesterReplierAfterShutdown.test_processes_finished_gracefully[Arrays]",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 19.05,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 8,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 2,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-23",
            "job_name": "gz_sim-ci-main-resolute-amd64",
            "last_fail": "2026-06-30",
            "project": "GAZEBO"
          },
          {
            "build_count": 6,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 1,
            "failure_percentage": 16.67,
            "first_fail": "2026-07-02",
            "job_name": "gz_sim-ci-gz-sim9-noble-amd64",
            "last_fail": "2026-07-02",
            "project": "GAZEBO"
          },
          {
            "build_count": 8,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 1,
            "failure_percentage": 12.5,
            "first_fail": "2026-07-04",
            "job_name": "gz_sim-ci-main-noble-amd64",
            "last_fail": "2026-07-04",
            "project": "GAZEBO"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 19.05,
            "failure_count": 4,
            "linked_issue": null,
            "package": "<init>",
            "test_name": "<init>.PeerTracker",
            "total_runs": 21
          },
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 19.05,
            "failure_count": 4,
            "linked_issue": null,
            "package": "PeerTracker",
            "test_name": "PeerTracker.PeerTrackerStale",
            "total_runs": 21
          }
        ],
        "linked_issue": null,
        "package": "<init>",
        "suspect_commits": null,
        "test_name": "<init>.PeerTracker",
        "total_runs": 21
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 18.75,
        "failure_count": 3,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-30",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 11.11,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-06-23",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 18.75,
            "failure_count": 3,
            "linked_issue": null,
            "package": "rcl_action",
            "test_name": "rcl_action.TestActionIntrospection.test_action_client_valid_get_result_service_event",
            "total_runs": 16
          }
        ],
        "linked_issue": null,
        "package": "rcl_action",
        "suspect_commits": null,
        "test_name": "rcl_action.TestActionIntrospection.test_action_client_valid_get_result_service_event",
        "total_runs": 16
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 17.02,
        "failure_count": 8,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-07-06",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-07",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 17.02,
            "failure_count": 8,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_record_all__rmw_connextdds",
            "total_runs": 47
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_record_all__rmw_connextdds",
        "total_runs": 47
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 16.67,
        "failure_count": 14,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 22.22,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-02",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-07-08",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-06",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 16.67,
            "failure_count": 14,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[UnboundedSequences]",
            "total_runs": 84
          }
        ],
        "linked_issue": null,
        "package": "test_communication",
        "suspect_commits": null,
        "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[UnboundedSequences]",
        "total_runs": 84
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 15.48,
        "failure_count": 13,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 16.67,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-05",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-08",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 15.48,
            "failure_count": 13,
            "linked_issue": null,
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.TestTwoExecutablesAfterShutdown.test_services_cpp",
            "total_runs": 84
          }
        ],
        "linked_issue": null,
        "package": "test_rclcpp",
        "suspect_commits": null,
        "test_name": "test_rclcpp.TestTwoExecutablesAfterShutdown.test_services_cpp",
        "total_runs": 84
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 15.09,
        "failure_count": 8,
        "flakiness_report": [
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 22.22,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-02",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-07-08",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-06",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 15.09,
            "failure_count": 8,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_publisher_subscriber__rclcpp__rclpy__rmw_zenoh_cpp",
            "total_runs": 53
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_publisher_subscriber__rclcpp__rclpy__rmw_zenoh_cpp",
        "total_runs": 53
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "macos"
          }
        ],
        "fail_rate_pct": 14.29,
        "failure_count": 7,
        "flakiness_report": [
          {
            "build_count": 4,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 1,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-26",
            "job_name": "gz_physics-ci-gz-physics7-homebrew-amd64",
            "last_fail": "2026-06-26",
            "project": "GAZEBO"
          },
          {
            "build_count": 4,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 1,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-26",
            "job_name": "gz_physics-ci-gz-physics9-homebrew-amd64",
            "last_fail": "2026-06-26",
            "project": "GAZEBO"
          },
          {
            "build_count": 4,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 1,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-26",
            "job_name": "gz_physics-ci-ign-physics5-homebrew-amd64",
            "last_fail": "2026-06-26",
            "project": "GAZEBO"
          },
          {
            "build_count": 4,
            "domain": "https://build.osrfoundation.org",
            "failure_count": 1,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-25",
            "job_name": "gz_physics-ci-main-homebrew-amd64",
            "last_fail": "2026-06-25",
            "project": "GAZEBO"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-10",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "macos"
              }
            ],
            "fail_rate_pct": 14.29,
            "failure_count": 7,
            "linked_issue": "https://github.com/gazebosim/gz-physics/issues/1018",
            "package": "clang",
            "test_name": "1 clang warnings",
            "total_runs": 49
          }
        ],
        "linked_issue": "https://github.com/gazebosim/gz-physics/issues/1018",
        "package": "clang",
        "suspect_commits": null,
        "test_name": "1 clang warnings",
        "total_runs": 49
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 14.29,
        "failure_count": 7,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-06-24",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 14.29,
            "failure_count": 7,
            "linked_issue": null,
            "package": "test_communication",
            "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[BasicTypes]",
            "total_runs": 49
          }
        ],
        "linked_issue": null,
        "package": "test_communication",
        "suspect_commits": null,
        "test_name": "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[BasicTypes]",
        "total_runs": 49
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 14.0,
        "failure_count": 7,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-02",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-02",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 14.0,
            "failure_count": 7,
            "linked_issue": null,
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.TestTwoExecutablesAfterShutdown.test_client_scope_consistency_cpp",
            "total_runs": 50
          }
        ],
        "linked_issue": null,
        "package": "test_rclcpp",
        "suspect_commits": null,
        "test_name": "test_rclcpp.TestTwoExecutablesAfterShutdown.test_client_scope_consistency_cpp",
        "total_runs": 50
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 13.21,
        "failure_count": 7,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 16.67,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-05",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-08",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-08",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 13.21,
            "failure_count": 7,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_services_cpp__rmw_zenoh_cpp",
            "total_runs": 53
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_services_cpp__rmw_zenoh_cpp",
        "total_runs": 53
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 12.9,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-07-03",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-05",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 12.9,
            "failure_count": 4,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_time",
            "total_runs": 31
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 12.9,
            "failure_count": 4,
            "linked_issue": null,
            "package": "rclcpp",
            "test_name": "rclcpp.test_time.gtest.missing_result",
            "total_runs": 31
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test.rclcpp.test_time",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 12.35,
        "failure_count": 10,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 33.33,
            "first_fail": "2026-06-27",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-06-30",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 4,
            "failure_percentage": 25.0,
            "first_fail": "2026-06-29",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-06",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-06-27",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 12.35,
            "failure_count": 10,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_time_source",
            "total_runs": 81
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 12.35,
            "failure_count": 10,
            "linked_issue": null,
            "package": "rclcpp",
            "test_name": "rclcpp.test_time_source.gtest.missing_result",
            "total_runs": 81
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test.rclcpp.test_time_source",
        "total_runs": 81
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 12.31,
        "failure_count": 8,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-07-03",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-03",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-07-03",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-03",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 12.31,
            "failure_count": 8,
            "linked_issue": null,
            "package": "demo_nodes_cpp",
            "test_name": "demo_nodes_cpp.TestExecutablesTutorialAfterShutdown.test_last_process_exit_code",
            "total_runs": 65
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 12.31,
            "failure_count": 8,
            "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/136",
            "package": "projectroot",
            "test_name": "projectroot.gtest_multithreaded__rmw_connextdds",
            "total_runs": 65
          }
        ],
        "linked_issue": null,
        "package": "demo_nodes_cpp",
        "suspect_commits": null,
        "test_name": "demo_nodes_cpp.TestExecutablesTutorialAfterShutdown.test_last_process_exit_code",
        "total_runs": 65
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 12.12,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-30",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 12.12,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_0.xunit.missing_result",
            "total_runs": 33
          }
        ],
        "linked_issue": null,
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_0.xunit.missing_result",
        "total_runs": 33
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 11.9,
        "failure_count": 10,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 55.56,
            "first_fail": "2026-06-30",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-06-29",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-02",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-29",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-06-29",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-06-28",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-06-28",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 11.9,
            "failure_count": 10,
            "linked_issue": null,
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.TestNNodesAfterShutdown.test_10_nodes",
            "total_runs": 84
          }
        ],
        "linked_issue": null,
        "package": "test_rclcpp",
        "suspect_commits": null,
        "test_name": "test_rclcpp.TestNNodesAfterShutdown.test_10_nodes",
        "total_runs": 84
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 11.76,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-06-26",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-07-02",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 11.76,
            "failure_count": 4,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test.rclcpp.test_executors_busy_waiting",
            "total_runs": 34
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 11.76,
            "failure_count": 4,
            "linked_issue": null,
            "package": "rclcpp",
            "test_name": "rclcpp.TestBusyWaiting/MultiThreadedExecutor.test_spin",
            "total_runs": 34
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test.rclcpp.test_executors_busy_waiting",
        "total_runs": 34
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 10.64,
        "failure_count": 5,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 22.22,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-06-26",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 18.75,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-30",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 10.64,
            "failure_count": 5,
            "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/220",
            "package": "projectroot",
            "test_name": "projectroot.test_action_communication__rmw_connextdds",
            "total_runs": 47
          }
        ],
        "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/220",
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_action_communication__rmw_connextdds",
        "total_runs": 47
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 10.14,
        "failure_count": 7,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 5,
            "failure_percentage": 31.25,
            "first_fail": "2026-06-23",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-26",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-26",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-06-25",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-07-07",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-07",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 10.14,
            "failure_count": 7,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_message_link_partial_sync",
            "total_runs": 69
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 10.14,
            "failure_count": 7,
            "linked_issue": null,
            "package": "test_tracetools",
            "test_name": "test_tracetools.test_message_link_partial_sync.xunit.missing_result",
            "total_runs": 69
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_message_link_partial_sync",
        "total_runs": 69
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 9.68,
        "failure_count": 3,
        "flakiness_report": [
          {
            "build_count": 1,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-06",
            "job_name": "nightly_win_rep",
            "last_fail": "2026-07-06",
            "project": "ROS"
          },
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 3,
            "failure_percentage": 33.33,
            "first_fail": "2026-06-23",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-06-29",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 9.68,
            "failure_count": 3,
            "linked_issue": "https://github.com/ros2/rcl/issues/1162",
            "package": "projectroot",
            "test_name": "projectroot.test_action_interaction__rmw_connextdds",
            "total_runs": 31
          }
        ],
        "linked_issue": "https://github.com/ros2/rcl/issues/1162",
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_action_interaction__rmw_connextdds",
        "total_runs": 31
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 9.43,
        "failure_count": 5,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-06-26",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-07",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-06-24",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-26",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-06-26",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 9.43,
            "failure_count": 5,
            "linked_issue": "https://github.com/ros2/rmw_zenoh/issues/972",
            "package": "projectroot",
            "test_name": "projectroot.test_rosbag2_play_end_to_end",
            "total_runs": 53
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 9.43,
            "failure_count": 5,
            "linked_issue": "https://github.com/ros2/rmw_zenoh/issues/972",
            "package": "rosbag2_tests",
            "test_name": "rosbag2_tests.test_rosbag2_play_end_to_end.gtest.missing_result",
            "total_runs": 53
          }
        ],
        "linked_issue": "https://github.com/ros2/rmw_zenoh/issues/972",
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_rosbag2_play_end_to_end",
        "total_runs": 53
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 9.09,
        "failure_count": 3,
        "flakiness_report": [
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-10",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 9.09,
            "failure_count": 3,
            "linked_issue": null,
            "package": "clang-tidy",
            "test_name": "1 clang-tidy warnings",
            "total_runs": 33
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 9.09,
            "failure_count": 3,
            "linked_issue": null,
            "package": "gcc",
            "test_name": "2 gcc warnings",
            "total_runs": 33
          }
        ],
        "linked_issue": null,
        "package": "clang-tidy",
        "suspect_commits": null,
        "test_name": "1 clang-tidy warnings",
        "total_runs": 33
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 8.96,
        "failure_count": 6,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-27",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-25",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 8.96,
            "failure_count": 6,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_3.xunit.missing_result",
            "total_runs": 67
          }
        ],
        "linked_issue": null,
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_3.xunit.missing_result",
        "total_runs": 67
      },
      {
        "affected_platforms": [
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 8.11,
        "failure_count": 3,
        "flakiness_report": [
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.11,
            "first_fail": "2026-07-01",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-07",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-10",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-07-10",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 8.11,
            "failure_count": 3,
            "linked_issue": "https://github.com/ros2/ros2cli/issues/1129",
            "package": "ros2topic",
            "test_name": "ros2topic.ros2topic.test.test_cli.test_cli",
            "total_runs": 37
          }
        ],
        "linked_issue": "https://github.com/ros2/ros2cli/issues/1129",
        "package": "ros2topic",
        "suspect_commits": null,
        "test_name": "ros2topic.ros2topic.test.test_cli.test_cli",
        "total_runs": 37
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "windows"
          }
        ],
        "fail_rate_pct": 8.0,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 9,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 22.22,
            "first_fail": "2026-07-03",
            "job_name": "nightly_win_rel",
            "last_fail": "2026-07-04",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-06-26",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-26",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-06-27",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "windows"
              }
            ],
            "fail_rate_pct": 8.0,
            "failure_count": 4,
            "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/136",
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.gtest_multithreaded__rmw_connextdds.gtest.missing_result",
            "total_runs": 50
          }
        ],
        "linked_issue": "https://github.com/ros2/rmw_connextdds/issues/136",
        "package": "test_rclcpp",
        "suspect_commits": null,
        "test_name": "test_rclcpp.gtest_multithreaded__rmw_connextdds.gtest.missing_result",
        "total_runs": 50
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 8.0,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-30",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-30",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-01",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-01",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 8.0,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_2.xunit.missing_result",
            "total_runs": 50
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 8.0,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_2.xunit.missing_result",
            "total_runs": 50
          }
        ],
        "linked_issue": null,
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_2.xunit.missing_result",
        "total_runs": 50
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 7.84,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-07-05",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-05",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-07-05",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-05",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 7.84,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_1.xunit.missing_result",
            "total_runs": 51
          }
        ],
        "linked_issue": null,
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_1.xunit.missing_result",
        "total_runs": 51
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 7.58,
        "failure_count": 5,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 100.0,
            "first_fail": "2026-07-09",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-07-07",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-07",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-aarch64_release",
            "last_fail": "2026-06-25",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-07-01",
            "job_name": "nightly_linux_release",
            "last_fail": "2026-07-01",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 7.58,
            "failure_count": 5,
            "linked_issue": null,
            "package": "test_security",
            "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_3.xunit.missing_result",
            "total_runs": 66
          }
        ],
        "linked_issue": null,
        "package": "test_security",
        "suspect_commits": null,
        "test_name": "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_3.xunit.missing_result",
        "total_runs": 66
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 7.55,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 12.5,
            "first_fail": "2026-06-25",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-07-03",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-06-27",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-07-03",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-03",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 7.55,
            "failure_count": 4,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_message_link_periodic_async",
            "total_runs": 53
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 7.55,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_tracetools",
            "test_name": "test_tracetools.test_message_link_periodic_async.xunit.missing_result",
            "total_runs": 53
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_message_link_periodic_async",
        "total_runs": 53
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 5.71,
        "failure_count": 4,
        "flakiness_report": [
          {
            "build_count": 2,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 50.0,
            "first_fail": "2026-07-10",
            "job_name": "nightly_linux_debug",
            "last_fail": "2026-07-10",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 2,
            "failure_percentage": 11.76,
            "first_fail": "2026-06-23",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-06-24",
            "project": "ROS"
          },
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-06-27",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-27",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-07-07",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-07-07",
            "project": "ROS"
          }
        ],
        "group_size": 2,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 5.71,
            "failure_count": 4,
            "linked_issue": null,
            "package": "projectroot",
            "test_name": "projectroot.test_message_filter",
            "total_runs": 70
          },
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 5.71,
            "failure_count": 4,
            "linked_issue": null,
            "package": "test_tf2",
            "test_name": "test_tf2.MessageFilter.concurrentTransforms",
            "total_runs": 70
          }
        ],
        "linked_issue": null,
        "package": "projectroot",
        "suspect_commits": null,
        "test_name": "projectroot.test_message_filter",
        "total_runs": 70
      },
      {
        "affected_platforms": [
          {
            "arch": "aarch64",
            "os": "linux"
          },
          {
            "arch": "amd64",
            "os": "linux"
          }
        ],
        "fail_rate_pct": 5.66,
        "failure_count": 3,
        "flakiness_report": [
          {
            "build_count": 16,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 6.25,
            "first_fail": "2026-06-29",
            "job_name": "nightly_linux-aarch64_repeated",
            "last_fail": "2026-06-29",
            "project": "ROS"
          },
          {
            "build_count": 17,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.88,
            "first_fail": "2026-06-29",
            "job_name": "nightly_linux-rhel_repeated",
            "last_fail": "2026-06-29",
            "project": "ROS"
          },
          {
            "build_count": 18,
            "domain": "https://ci.ros2.org",
            "failure_count": 1,
            "failure_percentage": 5.56,
            "first_fail": "2026-06-28",
            "job_name": "nightly_linux_repeated",
            "last_fail": "2026-06-28",
            "project": "ROS"
          }
        ],
        "group_size": 1,
        "grouped_tests": [
          {
            "affected_platforms": [
              {
                "arch": "aarch64",
                "os": "linux"
              },
              {
                "arch": "amd64",
                "os": "linux"
              }
            ],
            "fail_rate_pct": 5.66,
            "failure_count": 3,
            "linked_issue": null,
            "package": "test_rclcpp",
            "test_name": "test_rclcpp.TestNNodes.test_10_nodes",
            "total_runs": 53
          }
        ],
        "linked_issue": null,
        "package": "test_rclcpp",
        "suspect_commits": null,
        "test_name": "test_rclcpp.TestNNodes.test_10_nodes",
        "total_runs": 53
      }
    ]
  },
  "test_history": {
    "1 clang warnings": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "1 clang-tidy warnings": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "1 cmake warnings": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 0
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 0
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 0
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 0
      },
      {
        "date": "2026-06-02",
        "result": 0
      },
      {
        "date": "2026-06-03",
        "result": 0
      },
      {
        "date": "2026-06-04",
        "result": 0
      },
      {
        "date": "2026-06-05",
        "result": 0
      },
      {
        "date": "2026-06-06",
        "result": 0
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 0
      },
      {
        "date": "2026-06-09",
        "result": 0
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 0
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 0
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "1 msbuild warnings": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "<init>.PeerTracker": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": null
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": null
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": null
      },
      {
        "date": "2026-04-27",
        "result": null
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": null
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": null
      },
      {
        "date": "2026-05-03",
        "result": null
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": null
      },
      {
        "date": "2026-05-17",
        "result": null
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": null
      },
      {
        "date": "2026-05-24",
        "result": null
      },
      {
        "date": "2026-05-25",
        "result": null
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": null
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": null
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 0
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 0
      },
      {
        "date": "2026-06-18",
        "result": 0
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": null
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": null
      },
      {
        "date": "2026-07-10",
        "result": null
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "demo_nodes_cpp.TestExecutablesTutorial.test_processes_output": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 0
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "demo_nodes_cpp.TestExecutablesTutorialAfterShutdown.test_last_process_exit_code": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "pendulum_control.TestPendulumTeleop.test_pendulum_demo_output": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.gtest_avoid_ros_namespace_conventions_qos__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test.rclcpp.test_executors_busy_waiting": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 0
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 0
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 0
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 0
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test.rclcpp.test_time": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test.rclcpp.test_time_source": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 0
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test.test_guard_condition__rmw_zenoh_cpp": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 0
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 0
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 0
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 0
      },
      {
        "date": "2026-06-06",
        "result": 0
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 0
      },
      {
        "date": "2026-06-09",
        "result": 0
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 0
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 0
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_action_client_server__rclcpp__rmw_zenoh_cpp": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_action_communication__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_action_interaction__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_message_filter": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 0
      },
      {
        "date": "2026-06-05",
        "result": 0
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 0
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_message_link_partial_sync": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 0
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 0
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 0
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 0
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_message_link_periodic_async": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 0
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 0
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 0
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 0
      },
      {
        "date": "2026-06-04",
        "result": 0
      },
      {
        "date": "2026-06-05",
        "result": 0
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 0
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_play_services__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_publisher_subscriber__rclcpp__rclpy__rmw_zenoh_cpp": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 0
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_record_all__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_record_services__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_rosbag2_play_end_to_end": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 0
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 0
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_0": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_services_cpp__rmw_zenoh_cpp": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 0
      },
      {
        "date": "2026-06-02",
        "result": 0
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_tutorial_parameter_events__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "projectroot.test_tutorial_parameter_events_async__rmw_connextdds": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 0
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "rcl_action.TestActionIntrospection.test_action_client_valid_get_result_service_event": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "ros2cli.ros2cli.test.test_ros2cli_daemon.test_count_clients": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 0
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 0
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "ros2cli.ros2cli.test.test_ros2cli_daemon.test_daemon_shuts_down_after_inactivity_timeout": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "ros2topic.pytest.missing_result": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 0
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 0
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 0
      },
      {
        "date": "2026-04-27",
        "result": 0
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 0
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "ros2topic.ros2topic.test.test_bw_delay_hz.test_bw_delay_hz": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 0
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 0
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 0
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 0
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 0
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "ros2topic.ros2topic.test.test_cli.test_cli": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 0
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 0
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_communication.TestActionClientServer.test_client_finishes_in_a_finite_amount_of_time[NestedMessage]": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_communication.TestActionClientServerAfterShutdown.test_processes_finished_gracefully[Fibonacci]": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 0
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_communication.TestActionClientServerAfterShutdown.test_processes_finished_gracefully[NestedMessage]": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 0
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 0
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[BasicTypes]": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_communication.TestPublisherSubscriberAfterShutdown.test_processes_finished_gracefully[UnboundedSequences]": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 0
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_communication.TestRequesterReplierAfterShutdown.test_processes_finished_gracefully[Arrays]": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 0
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_launch_ros.test.test_launch_ros.actions.test_load_composable_nodes.test_load_node_with_condition_in_group[1-3]": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 0
      },
      {
        "date": "2026-05-24",
        "result": 0
      },
      {
        "date": "2026-05-25",
        "result": 0
      },
      {
        "date": "2026-05-26",
        "result": 0
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 0
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 0
      },
      {
        "date": "2026-06-03",
        "result": 0
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 0
      },
      {
        "date": "2026-06-09",
        "result": 0
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 0
      },
      {
        "date": "2026-06-12",
        "result": 0
      },
      {
        "date": "2026-06-13",
        "result": 0
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 0
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_rclcpp.TestNNodes.test_10_nodes": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_rclcpp.TestNNodesAfterShutdown.test_10_nodes": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 0
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 0
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 0
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_rclcpp.TestTwoExecutablesAfterShutdown.test_client_scope_consistency_cpp": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 0
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 0
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_rclcpp.TestTwoExecutablesAfterShutdown.test_services_cpp": [
      {
        "date": "2026-04-15",
        "result": 0
      },
      {
        "date": "2026-04-16",
        "result": 0
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 0
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 0
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 0
      },
      {
        "date": "2026-06-02",
        "result": 0
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 0
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_rclcpp.gtest_multithreaded__rmw_connextdds.gtest.missing_result": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 0
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 1
      },
      {
        "date": "2026-07-10",
        "result": 1
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.TestSecurePublisherSubscriber.test_subscriber_terminates_in_a_finite_amount_of_time": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 0
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 0
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.TestSecurePublisherSubscriberAfterShutdown.test_processes_finished_gracefully": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 0
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 0
      },
      {
        "date": "2026-04-30",
        "result": 0
      },
      {
        "date": "2026-05-01",
        "result": 0
      },
      {
        "date": "2026-05-02",
        "result": 0
      },
      {
        "date": "2026-05-03",
        "result": 0
      },
      {
        "date": "2026-05-04",
        "result": 0
      },
      {
        "date": "2026-05-05",
        "result": 0
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 0
      },
      {
        "date": "2026-05-09",
        "result": 0
      },
      {
        "date": "2026-05-10",
        "result": 0
      },
      {
        "date": "2026-05-11",
        "result": 0
      },
      {
        "date": "2026-05-12",
        "result": 0
      },
      {
        "date": "2026-05-13",
        "result": 0
      },
      {
        "date": "2026-05-14",
        "result": 0
      },
      {
        "date": "2026-05-15",
        "result": 0
      },
      {
        "date": "2026-05-16",
        "result": 0
      },
      {
        "date": "2026-05-17",
        "result": 0
      },
      {
        "date": "2026-05-18",
        "result": 0
      },
      {
        "date": "2026-05-19",
        "result": 0
      },
      {
        "date": "2026-05-20",
        "result": 0
      },
      {
        "date": "2026-05-21",
        "result": 0
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 0
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 0
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 0
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 0
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 0
      },
      {
        "date": "2026-06-29",
        "result": 0
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 0
      },
      {
        "date": "2026-07-03",
        "result": 0
      },
      {
        "date": "2026-07-04",
        "result": 0
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 0
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 0
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_2.xunit.missing_result": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.test_secure_publisher_subscriber__Empty__rmw_connextdds__secure_comm_3.xunit.missing_result": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 0
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_0.xunit.missing_result": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 0
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_1.xunit.missing_result": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 1
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 1
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 0
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 1
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ],
    "test_security.test_secure_publisher_subscriber__UnboundedSequences__rmw_connextdds__secure_comm_3.xunit.missing_result": [
      {
        "date": "2026-04-15",
        "result": 1
      },
      {
        "date": "2026-04-16",
        "result": 1
      },
      {
        "date": "2026-04-17",
        "result": 1
      },
      {
        "date": "2026-04-18",
        "result": 1
      },
      {
        "date": "2026-04-19",
        "result": 1
      },
      {
        "date": "2026-04-20",
        "result": 1
      },
      {
        "date": "2026-04-21",
        "result": 1
      },
      {
        "date": "2026-04-22",
        "result": 1
      },
      {
        "date": "2026-04-23",
        "result": 1
      },
      {
        "date": "2026-04-24",
        "result": 1
      },
      {
        "date": "2026-04-25",
        "result": 1
      },
      {
        "date": "2026-04-26",
        "result": 1
      },
      {
        "date": "2026-04-27",
        "result": 1
      },
      {
        "date": "2026-04-28",
        "result": 1
      },
      {
        "date": "2026-04-29",
        "result": 1
      },
      {
        "date": "2026-04-30",
        "result": 1
      },
      {
        "date": "2026-05-01",
        "result": 1
      },
      {
        "date": "2026-05-02",
        "result": 1
      },
      {
        "date": "2026-05-03",
        "result": 1
      },
      {
        "date": "2026-05-04",
        "result": 1
      },
      {
        "date": "2026-05-05",
        "result": 1
      },
      {
        "date": "2026-05-06",
        "result": 1
      },
      {
        "date": "2026-05-07",
        "result": 1
      },
      {
        "date": "2026-05-08",
        "result": 1
      },
      {
        "date": "2026-05-09",
        "result": 1
      },
      {
        "date": "2026-05-10",
        "result": 1
      },
      {
        "date": "2026-05-11",
        "result": 1
      },
      {
        "date": "2026-05-12",
        "result": 1
      },
      {
        "date": "2026-05-13",
        "result": 1
      },
      {
        "date": "2026-05-14",
        "result": 1
      },
      {
        "date": "2026-05-15",
        "result": 1
      },
      {
        "date": "2026-05-16",
        "result": 1
      },
      {
        "date": "2026-05-17",
        "result": 1
      },
      {
        "date": "2026-05-18",
        "result": 1
      },
      {
        "date": "2026-05-19",
        "result": 1
      },
      {
        "date": "2026-05-20",
        "result": 1
      },
      {
        "date": "2026-05-21",
        "result": 1
      },
      {
        "date": "2026-05-22",
        "result": 1
      },
      {
        "date": "2026-05-23",
        "result": 1
      },
      {
        "date": "2026-05-24",
        "result": 1
      },
      {
        "date": "2026-05-25",
        "result": 1
      },
      {
        "date": "2026-05-26",
        "result": 1
      },
      {
        "date": "2026-05-27",
        "result": 1
      },
      {
        "date": "2026-05-28",
        "result": 1
      },
      {
        "date": "2026-05-29",
        "result": 1
      },
      {
        "date": "2026-05-30",
        "result": 1
      },
      {
        "date": "2026-05-31",
        "result": 1
      },
      {
        "date": "2026-06-01",
        "result": 1
      },
      {
        "date": "2026-06-02",
        "result": 1
      },
      {
        "date": "2026-06-03",
        "result": 1
      },
      {
        "date": "2026-06-04",
        "result": 1
      },
      {
        "date": "2026-06-05",
        "result": 1
      },
      {
        "date": "2026-06-06",
        "result": 1
      },
      {
        "date": "2026-06-07",
        "result": 1
      },
      {
        "date": "2026-06-08",
        "result": 1
      },
      {
        "date": "2026-06-09",
        "result": 1
      },
      {
        "date": "2026-06-10",
        "result": 1
      },
      {
        "date": "2026-06-11",
        "result": 1
      },
      {
        "date": "2026-06-12",
        "result": 1
      },
      {
        "date": "2026-06-13",
        "result": 1
      },
      {
        "date": "2026-06-14",
        "result": 1
      },
      {
        "date": "2026-06-15",
        "result": 1
      },
      {
        "date": "2026-06-16",
        "result": 1
      },
      {
        "date": "2026-06-17",
        "result": 1
      },
      {
        "date": "2026-06-18",
        "result": 1
      },
      {
        "date": "2026-06-19",
        "result": 1
      },
      {
        "date": "2026-06-20",
        "result": 1
      },
      {
        "date": "2026-06-21",
        "result": 1
      },
      {
        "date": "2026-06-22",
        "result": 1
      },
      {
        "date": "2026-06-23",
        "result": 1
      },
      {
        "date": "2026-06-24",
        "result": 1
      },
      {
        "date": "2026-06-25",
        "result": 0
      },
      {
        "date": "2026-06-26",
        "result": 1
      },
      {
        "date": "2026-06-27",
        "result": 1
      },
      {
        "date": "2026-06-28",
        "result": 1
      },
      {
        "date": "2026-06-29",
        "result": 1
      },
      {
        "date": "2026-06-30",
        "result": 1
      },
      {
        "date": "2026-07-01",
        "result": 0
      },
      {
        "date": "2026-07-02",
        "result": 1
      },
      {
        "date": "2026-07-03",
        "result": 1
      },
      {
        "date": "2026-07-04",
        "result": 1
      },
      {
        "date": "2026-07-05",
        "result": 1
      },
      {
        "date": "2026-07-06",
        "result": 1
      },
      {
        "date": "2026-07-07",
        "result": 0
      },
      {
        "date": "2026-07-08",
        "result": 1
      },
      {
        "date": "2026-07-09",
        "result": 0
      },
      {
        "date": "2026-07-10",
        "result": 0
      },
      {
        "date": "2026-07-11",
        "result": null
      },
      {
        "date": "2026-07-12",
        "result": null
      },
      {
        "date": "2026-07-13",
        "result": null
      }
    ]
  }
};
