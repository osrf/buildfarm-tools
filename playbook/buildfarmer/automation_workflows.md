# Buildfarm tools automation workflows

To support the daily work of the buildfarmers, we have created a set of GitHub action workflows to automate some of the tasks. They are listed below:

* [Database Fetcher](https://github.com/osrf/buildfarm-tools-private/actions/workflows/databaseFetcher.yml)
* [Daily Workflow](https://github.com/osrf/buildfarm-tools/actions/workflows/dailyWorkflow.yml)
* [Update Gazebo Dashboard](https://github.com/osrf/buildfarm-tools-private/actions/workflows/updateGzDashboard.yml)


## Database Fetcher

This action is used to update the buildfarmer database every day, so the buildfarmers can use the latest data to triage the build failures.

More information can be found in: [Buildfarm Triage Tools](https://github.com/osrf/buildfarm-tools-private/blob/main/docs/buildfarm_triage_tools.md#database-fetching-scripts)

This action can be manually triggered by the buildfarmers to update the database at any time.

> **Note**: This action is private because it uses a GitHub token with write access to the repository. It can only be run by the buildfarmers.

## Daily Workflow

This action maintains [the buildfarmer log](https://github.com/osrf/buildfarm-tools/labels/buildfarmer-log) each week. On Mondays, it creates a new log issue and closes the previous one. Then, each day it comments on the log issue with the daily build and test regressions.

This action can be manually triggered by the buildfarmers to create a new weekly log issue, or publish the daily build and test regressions, at any time.

## Update Gazebo Dashboard

This action keeps [Gazebo dashboard](https://github.com/osrf/buildfarm-tools/Gazebo.md) up to date. It runs every day and check whether there are new changes to the jobs shown in the dashboard. If there are new changes, it updates the dashboard.

> Job changes are detected by comparing the commit date of gazebo release tools [`generated_jobs.txt`](https://github.com/gazebo-tooling/release-tools/blob/master/jenkins-scripts/dsl/logs/generated_jobs.txt) and the commit date of the dashboard.

This action can be manually triggered by the buildfarmers to update the dashboard at any time.

> **Note**: This action is private because it uses a GitHub token with write access to the repository. It can only be run by the buildfarmers.
