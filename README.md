# Buildfarm Tools

Welcome to the Buildfarm Tools Repository!

The buildfarmer team is in charge of maintaining ROS and Gazebo [buildfarms](#buildfarm-links) build results. You can look at the dashboards to inspect the status of all jobs:
* [ROS2  Dashboard](./ROS2.md)
* [Gazebo Dashboard](./Gazebo.md)
* [Gazebo Classic Dashboard](./GazeboClassic.md)
* [Colcon Dashboard](./Colcon.md)

This repo contains all the tools to get information from the ROS and Gazebo buildfarms.

> **Note**
> If you're interested in what tools we have available and how to use them, check the [Tools usage](#tools-usage) section

## Getting Started

To set up the project locally, please follow the instructions below:

1. Fork the repository and clone it to your local machine.
    ```bash
    git clone https://github.com/osrf/buildfarm-tools.git
    ```
2. Install the dependencies of the project:
    * [Ruby Installation](https://www.ruby-lang.org/en/documentation/installation/)
    * Install python requirements: `python3 -m pip install -r requirements.txt`
3. Test the scripts
    * You can test your installation by running:
        ```bash
        cd database/scripts
        ./check_buildfarm.rb
        ```
    * Wait for the script to run (around 1 minute) and check the buildfarm issues that are happening in the buildfarms
4. Read [Buildfarmer Playbook](./playbook/buildfarmer/README.md) and get started in all our scripts!

## Tools usage

If you are a ROS or Gazebo developer interested in getting information about errors you're getting in CI or if you want to gather statistics of tests and errors in the buildfarms you can check the following plays:

* [Is an error a known issue or a flaky problem?](./playbook/is-an-error-a-known-issue-or-a-flaky-problem.md)
* [Check historical data of a test regression](./playbook/check-historical-data-of-a-test-regression.md)
* [Look for build regression statistics](./playbook/look-for-build-regression-statistics.md)

Remember that the buildfarmer database is open to anyone who wants to inspect it (binary file: [buildfarmer.db](./database/buildfarmer.db)). You can use [SQLite Browser](https://sqlitebrowser.org/) to run personalized queries and filters

If you are a buildfarmer team member, or you are interested in learning how we triage buildfarm issues and use these tools, you can check our workflow in the [Buildfarmer Playbook](./playbook/buildfarmer/README.md):
* [Buildfarmer Scripted day](./playbook/buildfarmer/scripted_buildfarm_day.md)
* [Buildfarmer tools docs](./playbook/buildfarmer/buildfarmer_triage_tools.md)

## Contributing

Check the [contributing.md](./contributing.md) to get started!

## Useful links

#### Buildfarm links:

<ul>
<li><a href="https://build.ros.org/">build.ros.org</a></li>
<li><a href="https://build.ros2.org/">build.ros2.org</a></li>
<li><a href="https://build.osrfoundation.org/">build.osrfoundation.org</a></li>
<li><a href="https://ci.ros2.org/">ci.ros2.org</a></li>
</ul>
