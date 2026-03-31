# Buildfarm tools automation workflows

To support the daily work of the buildfarmers, we have created a set of GitHub action workflows to automate some of the tasks. They are listed below:

* [Database Fetcher](https://github.com/osrf/buildfarm-tools-private/actions/workflows/databaseFetcher.yml)
* [Daily Workflow](https://github.com/osrf/buildfarm-tools/actions/workflows/dailyWorkflow.yml)
* [Update Gazebo Dashboard](https://github.com/osrf/buildfarm-tools-private/actions/workflows/updateGzDashboard.yml)


## Database Fetcher

This action is used to update the buildfarmer database every day, so the buildfarmers can use the latest data to triage the build failures.

As part of this workflow, job priorities are generated and synced to the public repository as `job_priorities.csv`.

More information can be found in: [Buildfarm Triage Tools](https://github.com/osrf/buildfarm-tools-private/blob/main/docs/buildfarm_triage_tools.md#database-fetching-scripts)

For details about the priorities generation logic and local execution, see [Job Priorities](./job_priorities.md).

This action can be manually triggered by the buildfarmers to update the database at any time.

> **Note**: This action is private because it uses a GitHub token with write access to the repository. It can only be run by the buildfarmers.

## Daily Workflow

This action maintains [the buildfarmer log](https://github.com/osrf/buildfarm-tools/labels/buildfarmer-log) each week. On Mondays, it creates a new log issue and closes the previous one. Then, each day it comments on the log issue with the daily build and test regressions.

In addition, it verifies the status of the tracked issues and updates their state in the buildfarmer database.

It also automatically refreshes the issue information in the [Buildfarm Issue Triage Spreadsheet](https://docs.google.com/spreadsheets/d/1gX7Hw_aVsI4U05i2-NxCY66a4CmRy1Yyb6dokK5QtMg).

This action can be manually triggered by the buildfarmers to create a new weekly log issue, or publish the daily build and test regressions, at any time.

## Daily workflow component diagram
<img width="735" height="595" alt="535315120-5dde3dec-29e1-4a83-bf93-ed3869bd3216" src="https://github.com/user-attachments/assets/59c339d8-7778-41b4-8695-7f8f523b77c9" />


## Update Gazebo Dashboard

This action keeps [Gazebo dashboard](https://github.com/osrf/buildfarm-tools/Gazebo.md) up to date. It runs every day and check whether there are new changes to the jobs shown in the dashboard. If there are new changes, it updates the dashboard.

> Job changes are detected by comparing the commit date of gazebo release tools [`generated_jobs.txt`](https://github.com/gazebo-tooling/release-tools/blob/master/jenkins-scripts/dsl/logs/generated_jobs.txt) and the commit date of the dashboard.

This action can be manually triggered by the buildfarmers to update the dashboard at any time.

> **Note**: This action is private because it uses a GitHub token with write access to the repository. It can only be run by the buildfarmers.
