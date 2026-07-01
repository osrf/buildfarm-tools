const DASHBOARD_DATA = {
  "generated_at": "2026-06-30T11:12:00Z",
  "regressions": {
    "consistent": [
      {
        "test_name": "test_joint_trajectory_controller",
        "package": "ros2_control",
        "first_seen_date": "2026-06-12",
        "consecutive_failures": 18,
        "affected_platforms": [
          {"os": "linux", "arch": "amd64"},
          {"os": "linux", "arch": "aarch64"},
          {"os": "linux", "arch": "rhel"}
        ],
        "linked_issue": "https://github.com/ros2/ros2_control/issues/4521",
        "suspect_commits": [
          {
            "repo": "ros2/ros2_control",
            "compare_url": "https://github.com/ros2/ros2_control/compare/a3f7c12...b91e445",
            "last_success_sha": "a3f7c12",
            "first_failure_sha": "b91e445",
            "vcs_diff": "--- build #1421 (last success)  2026-06-11 09:41 UTC\n+++ build #1422 (first failure) 2026-06-12 09:38 UTC\n\n ros2/ros2_control\n-  version: a3f7c12def456789abcdef123456789abcdef12\n+  version: b91e44567890abcdef123456789abcdef123456\n   url:     https://github.com/ros2/ros2_control.git\n   branch:  rolling\n\n ros2/rclcpp                          (unchanged)\n ros2/rcl                             (unchanged)\n ros2/rmw                             (unchanged)"
          }
        ]
      },
      {
        "test_name": "test_gazebo_ros_factory",
        "package": "gazebo_ros_pkgs",
        "first_seen_date": "2026-06-21",
        "consecutive_failures": 9,
        "affected_platforms": [
          {"os": "linux", "arch": "amd64"},
          {"os": "linux", "arch": "rhel"}
        ],
        "linked_issue": "https://github.com/ros-simulation/gazebo_ros_pkgs/issues/892",
        "suspect_commits": [
          {
            "repo": "gazebosim/gz-sim",
            "compare_url": "https://github.com/gazebosim/gz-sim/compare/9201abc...9202def",
            "last_success_sha": "9201abc",
            "first_failure_sha": "9202def",
            "vcs_diff": "--- build #0887 (last success)  2026-06-20 10:02 UTC\n+++ build #0888 (first failure) 2026-06-21 10:14 UTC\n\n gazebosim/gz-sim\n-  version: 9201abc1234567890abcdef123456789abcdef\n+  version: 9202def7890abcdef123456789abcdef123456\n   url:     https://github.com/gazebosim/gz-sim.git\n   branch:  main\n\n gazebosim/gz-physics                 (unchanged)\n gazebosim/gz-rendering               (unchanged)\n gazebosim/gz-transport               (unchanged)"
          }
        ]
      },
      {
        "test_name": "test_camera_calibration_mono",
        "package": "image_pipeline",
        "first_seen_date": "2026-06-27",
        "consecutive_failures": 3,
        "affected_platforms": [
          {"os": "linux", "arch": "amd64"},
          {"os": "macos", "arch": "amd64"}
        ],
        "linked_issue": null,
        "suspect_commits": [
          {
            "repo": "ros-perception/image_pipeline",
            "compare_url": "https://github.com/ros-perception/image_pipeline/compare/9410abc...9411def",
            "last_success_sha": "9410abc",
            "first_failure_sha": "9411def",
            "vcs_diff": "--- build #0334 (last success)  2026-06-26 09:55 UTC\n+++ build #0335 (first failure) 2026-06-27 09:48 UTC\n\n ros-perception/image_pipeline\n-  version: 9410abc2345678901bcdef234567890abcdef23\n+  version: 9411def8901bcdef234567890abcdef23456789\n   url:     https://github.com/ros-perception/image_pipeline.git\n   branch:  rolling\n\n ros-perception/vision_opencv         (unchanged)\n ros2/rclcpp                          (unchanged)"
          }
        ]
      }
    ],
    "flaky": [
      {
        "test_name": "test_tf2_buffer_core",
        "package": "tf2_ros",
        "failure_count": 7,
        "total_runs": 20,
        "fail_rate_pct": 35.0,
        "affected_platforms": [
          {"os": "linux", "arch": "amd64"},
          {"os": "linux", "arch": "aarch64"}
        ],
        "linked_issue": null,
        "suspect_commits": null
      },
      {
        "test_name": "test_rclpy_action_client",
        "package": "rclpy",
        "failure_count": 4,
        "total_runs": 20,
        "fail_rate_pct": 20.0,
        "affected_platforms": [
          {"os": "linux", "arch": "amd64"},
          {"os": "linux", "arch": "aarch64"},
          {"os": "linux", "arch": "rhel"}
        ],
        "linked_issue": "https://github.com/ros2/rclpy/issues/3301",
        "suspect_commits": null
      },
      {
        "test_name": "test_gazebo_sensor_noise",
        "package": "gazebo_plugins",
        "failure_count": 9,
        "total_runs": 20,
        "fail_rate_pct": 45.0,
        "affected_platforms": [{"os": "linux", "arch": "amd64"}],
        "linked_issue": null,
        "suspect_commits": null
      }
    ]
  },
  "known_issues": [
    {
      "issue_id": "https://github.com/ros2/ros2_control/issues/4521",
      "title": "ros2/ros2_control#4521",
      "status": "OPEN",
      "priority": 0.9,
      "assignee": "maintainer-x",
      "last_activity_date": "2026-06-28",
      "last_seen_in_build_date": "2026-06-30",
      "stale": 0
    },
    {
      "issue_id": "https://github.com/gazebosim/gz-plugin/issues/210",
      "title": "gazebosim/gz-plugin#210",
      "status": "NOT ASSIGNED",
      "priority": 0.175,
      "assignee": null,
      "last_activity_date": null,
      "last_seen_in_build_date": "2026-05-17",
      "stale": 0
    },
    {
      "issue_id": "https://github.com/ros2/rclpy/issues/3301",
      "title": "ros2/rclpy#3301",
      "status": "OPEN",
      "priority": 0.5,
      "assignee": null,
      "last_activity_date": "2026-06-01",
      "last_seen_in_build_date": "2026-06-25",
      "stale": 0
    }
  ],
  "test_history": {
    "test_joint_trajectory_controller": [
      {"date":"2026-04-01","result":1},{"date":"2026-04-02","result":1},{"date":"2026-04-03","result":1},
      {"date":"2026-04-04","result":null},{"date":"2026-04-05","result":1},{"date":"2026-04-06","result":1},
      {"date":"2026-04-07","result":1},{"date":"2026-04-08","result":1},{"date":"2026-04-09","result":1},
      {"date":"2026-04-10","result":1},{"date":"2026-04-11","result":null},{"date":"2026-04-12","result":1},
      {"date":"2026-04-13","result":1},{"date":"2026-04-14","result":1},{"date":"2026-04-15","result":1},
      {"date":"2026-04-16","result":1},{"date":"2026-04-17","result":null},{"date":"2026-04-18","result":1},
      {"date":"2026-04-19","result":1},{"date":"2026-04-20","result":1},{"date":"2026-04-21","result":1},
      {"date":"2026-04-22","result":1},{"date":"2026-04-23","result":1},{"date":"2026-04-24","result":1},
      {"date":"2026-04-25","result":null},{"date":"2026-04-26","result":1},{"date":"2026-04-27","result":1},
      {"date":"2026-04-28","result":1},{"date":"2026-04-29","result":1},{"date":"2026-04-30","result":1},
      {"date":"2026-05-01","result":1},{"date":"2026-05-02","result":null},{"date":"2026-05-03","result":1},
      {"date":"2026-05-04","result":1},{"date":"2026-05-05","result":1},{"date":"2026-05-06","result":1},
      {"date":"2026-05-07","result":1},{"date":"2026-05-08","result":null},{"date":"2026-05-09","result":1},
      {"date":"2026-05-10","result":1},{"date":"2026-05-11","result":1},{"date":"2026-05-12","result":1},
      {"date":"2026-05-13","result":1},{"date":"2026-05-14","result":null},{"date":"2026-05-15","result":1},
      {"date":"2026-05-16","result":1},{"date":"2026-05-17","result":1},{"date":"2026-05-18","result":1},
      {"date":"2026-05-19","result":1},{"date":"2026-05-20","result":null},{"date":"2026-05-21","result":1},
      {"date":"2026-05-22","result":1},{"date":"2026-05-23","result":1},{"date":"2026-05-24","result":1},
      {"date":"2026-05-25","result":1},{"date":"2026-05-26","result":null},{"date":"2026-05-27","result":1},
      {"date":"2026-05-28","result":1},{"date":"2026-05-29","result":1},{"date":"2026-05-30","result":1},
      {"date":"2026-05-31","result":1},{"date":"2026-06-01","result":null},{"date":"2026-06-02","result":1},
      {"date":"2026-06-03","result":1},{"date":"2026-06-04","result":1},{"date":"2026-06-05","result":1},
      {"date":"2026-06-06","result":1},{"date":"2026-06-07","result":null},{"date":"2026-06-08","result":1},
      {"date":"2026-06-09","result":1},{"date":"2026-06-10","result":1},{"date":"2026-06-11","result":1},
      {"date":"2026-06-12","result":0},{"date":"2026-06-13","result":0},{"date":"2026-06-14","result":0},
      {"date":"2026-06-15","result":0},{"date":"2026-06-16","result":0},{"date":"2026-06-17","result":0},
      {"date":"2026-06-18","result":0},{"date":"2026-06-19","result":0},{"date":"2026-06-20","result":0},
      {"date":"2026-06-21","result":0},{"date":"2026-06-22","result":0},{"date":"2026-06-23","result":0},
      {"date":"2026-06-24","result":0},{"date":"2026-06-25","result":0},{"date":"2026-06-26","result":0},
      {"date":"2026-06-27","result":0},{"date":"2026-06-28","result":0},{"date":"2026-06-29","result":0},
      {"date":"2026-06-30","result":0}
    ],
    "test_tf2_buffer_core": [
      {"date":"2026-04-01","result":1},{"date":"2026-04-02","result":0},{"date":"2026-04-03","result":1},
      {"date":"2026-04-04","result":1},{"date":"2026-04-05","result":0},{"date":"2026-04-06","result":1},
      {"date":"2026-04-07","result":null},{"date":"2026-04-08","result":1},{"date":"2026-04-09","result":1},
      {"date":"2026-04-10","result":0},{"date":"2026-04-11","result":1},{"date":"2026-04-12","result":1},
      {"date":"2026-04-13","result":0},{"date":"2026-04-14","result":1},{"date":"2026-04-15","result":1},
      {"date":"2026-04-16","result":1},{"date":"2026-04-17","result":null},{"date":"2026-04-18","result":0},
      {"date":"2026-04-19","result":1},{"date":"2026-04-20","result":1},{"date":"2026-04-21","result":0},
      {"date":"2026-04-22","result":1},{"date":"2026-04-23","result":1},{"date":"2026-04-24","result":null},
      {"date":"2026-04-25","result":1},{"date":"2026-04-26","result":0},{"date":"2026-04-27","result":1},
      {"date":"2026-04-28","result":1},{"date":"2026-04-29","result":1},{"date":"2026-04-30","result":0},
      {"date":"2026-05-01","result":1},{"date":"2026-05-02","result":null},{"date":"2026-05-03","result":1},
      {"date":"2026-05-04","result":0},{"date":"2026-05-05","result":1},{"date":"2026-05-06","result":1},
      {"date":"2026-05-07","result":1},{"date":"2026-05-08","result":0},{"date":"2026-05-09","result":null},
      {"date":"2026-05-10","result":1},{"date":"2026-05-11","result":1},{"date":"2026-05-12","result":0},
      {"date":"2026-05-13","result":1},{"date":"2026-05-14","result":1},{"date":"2026-05-15","result":1},
      {"date":"2026-05-16","result":0},{"date":"2026-05-17","result":null},{"date":"2026-05-18","result":1},
      {"date":"2026-05-19","result":1},{"date":"2026-05-20","result":0},{"date":"2026-05-21","result":1},
      {"date":"2026-05-22","result":1},{"date":"2026-05-23","result":1},{"date":"2026-05-24","result":0},
      {"date":"2026-05-25","result":null},{"date":"2026-05-26","result":1},{"date":"2026-05-27","result":1},
      {"date":"2026-05-28","result":0},{"date":"2026-05-29","result":1},{"date":"2026-05-30","result":1},
      {"date":"2026-05-31","result":1},{"date":"2026-06-01","result":0},{"date":"2026-06-02","result":null},
      {"date":"2026-06-03","result":1},{"date":"2026-06-04","result":1},{"date":"2026-06-05","result":0},
      {"date":"2026-06-06","result":1},{"date":"2026-06-07","result":1},{"date":"2026-06-08","result":null},
      {"date":"2026-06-09","result":0},{"date":"2026-06-10","result":1},{"date":"2026-06-11","result":1},
      {"date":"2026-06-12","result":1},{"date":"2026-06-13","result":0},{"date":"2026-06-14","result":1},
      {"date":"2026-06-15","result":null},{"date":"2026-06-16","result":1},{"date":"2026-06-17","result":0},
      {"date":"2026-06-18","result":1},{"date":"2026-06-19","result":1},{"date":"2026-06-20","result":0},
      {"date":"2026-06-21","result":1},{"date":"2026-06-22","result":null},{"date":"2026-06-23","result":1},
      {"date":"2026-06-24","result":0},{"date":"2026-06-25","result":1},{"date":"2026-06-26","result":1},
      {"date":"2026-06-27","result":0},{"date":"2026-06-28","result":1},{"date":"2026-06-29","result":null},
      {"date":"2026-06-30","result":1}
    ]
  }
}
;
