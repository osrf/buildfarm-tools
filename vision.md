# What’s the buildfarm payload
Subset of tasks defined to increase the quality of the ROS/Gazebo code by actively tracking and categorizing problems shipped with new code in a timely manner, making it easier for the development teams to:
* Fix most errors when they are introduced.
* Decide if an error that pops up in CI is a flaky test already existing in the codebase.
* Identify how often an error occurs and decide how to proceed.


## Getting Started









For the purposes of this document, the person assigned to the buildfarmer payload duties will be called the First Ranger. Folks who join the Night’s Watch are said to take the black.

We already have a priority document explaining the order of relevancy of the possible errors, this is a new set of standards to define what we expect of the internal buildfarmer process:

Auto-log any error appearing in the nightlies, even when there is no First Ranger around.
Any Ranger in the Night’s Watch can become a First Ranger in case of necessity, this implies:
Basic duties should be easy to automate, even scripted.
Every First Ranger must log/communicate internally any actions completed in the name of the Watch, so other Rangers can make progress on top of previous actions.
Core Team and community developers should be able to check if an existent error in his build it’s also happening in the nightlies CI.
Flaky tests will be categorized based on how often they appear
~5% Will not even be reported.
6% - 15% Will be reported and announced in the weekly meetings. This category will be considered as known issues, as we won’t aim to disable those tests.
15% - 100% Will be reported, investigated internally, and eventually assigned someone from the development teams. Flaky tests falling in this category will be expected to be disabled 3 weeks(? after being assigned a developer to take a look or after being reported.
The buildfarmer team will keep track of all the tests disabled by the buildfarmer team and generate a report monthly/weekly(?. That way any developer can track those and aim to fix the underlying issues.


Definitions:

Flaky test: Any test that, given the same code and environment, may throw both PASS and FAILED results

Known issue: Any reported flaky test(s) existent in the development codebase that the buildfarmer team won’t push to disable.















# Buildfarm Tools

Welcome to the Buildfarm Tools Repository!

The buildfarmer team is in charge of maintaining build results on the ROS and Gazebo [buildfarms](#buildfarm-links).
You can look at the dashboards to inspect the status of all tracked jobs:
* [ROS2  Dashboard](./ROS2.md)
* [Gazebo Dashboard](./Gazebo.md)
* [Gazebo Classic Dashboard](./GazeboClassic.md)
* [Colcon Dashboard](./Colcon.md)

This repo contains all the tools to get information from the ROS and Gazebo buildfarms.

> **Note**
> If you're interested in what tools we have available and how to use them, check the [Tools usage](#tools-usage) section

## Getting Started

To set up the project locally, please follow the instructions below:

1. Clone the repository to your local machine.
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
4. Read [Tools usage](#tools-usage) section for a quickstart or check [Buildfarmer Playbook](./playbook/buildfarmer/README.md) to see all the tools available.

## Tools usage

If you are a ROS or Gazebo developer interested in getting information about errors you're getting in CI or if you want to gather statistics of tests and errors in the buildfarms you can check the [FAQ section](#faq).

Remember that the buildfarmer database is open to anyone who wants to inspect it (binary file: [buildfarmer.db](./database/buildfarmer.db)).
You can use [SQLite Browser](https://sqlitebrowser.org/) to run personalized queries and filters.

If you are a buildfarmer team member, or you are interested in learning how we triage buildfarm issues and use these tools,
you can check our workflow in the [Buildfarmer Playbook](./playbook/buildfarmer/README.md):
* [Buildfarmer Scripted day](./playbook/buildfarmer/scripted_buildfarm_day.md)
* [Buildfarmer tools docs](./playbook/buildfarmer/buildfarmer_triage_tools.md)

## FAQ

#### How can I check if an error is a known issue or a flaky problem?

You can check the [Is an error a known issue or a flaky problem?](./playbook/is-an-error-a-known-issue-or-a-flaky-problem.md) play.

#### How can I check historical data of a test regression?

You can check the [Check historical data of a test regression](./playbook/check-historical-data-of-a-test-regression.md) play.

#### How can I look for build regression statistics?

You can check the [Look for build regression statistics](./playbook/look-for-build-regression-statistics.md) play.

## Contributing

Check the [CONTRIBUTING.md](./CONTRIBUTING.md) to get started!

## Useful links

#### Buildfarm links:

* [build.ros.org](https://build.ros.org/)
* [build.ros2.org](https://build.ros2.org/)
* [build.osrfoundation.org](https://build.osrfoundation.org/)
* [ci.ros2.org](https://ci.ros2.org/)
