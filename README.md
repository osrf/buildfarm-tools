# Buildfarm Tools

Welcome to the Buildfarm Tools Repository!

This repo contains all the tools to get information from the ROS and Gazebo buildfarms.

## Getting Started

To set up the project locally, please follow the instructions below:

1. Fork the repository and clone it to your local machine.
    ```bash
    git clone https://github.com/osrf/buildfarm-tools.git
    ```
2. Install the dependencies of the project:
    * [Ruby Installation](https://www.ruby-lang.org/en/documentation/installation/)
    
    ```bash
    pip install -r requirements.txt
    ```
3. Test the scripts
    * You can test your installation by running:
        ```bash
        cd database/scripts
        ./check_buildfarm.rb
        ```
    * Wait for the script to run (around 1 minute) and check the buildfarm issues that are happening in the buildfarms
4. Read [Buildfarmer Playbook](./playbook/buildfarmer/README.md) and get started in all our scripts!

## Tools usage

If you are a ROS or Gazebo developer intersted in getting information about errors you're getting in CI; or if you want to gather statistics of test and errors in ROS or Gazebo, you can check the following plays:

* Is an error a known issue or a flaky problem?
* Check historical data of a test regression
* Look for build regression statistics

Remember that the buildfarmer database is open to anyone who wants to inspect it (binary file: [buildfarmer.db](./database/buildfarmer.db)). You can use [SQLite Browser](https://sqlitebrowser.org/) to run personalized queries and filters

## Contributing

Check the [contributing.md](./contributing.md) to get started!
