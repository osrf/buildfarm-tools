# Reporting Problems

After you have investigated an issue (test regression or build regression) and you have determined that is a new problem in the buildfarm, you should report it to the respective dev team by opening a GitHub issue and adding it to the [Buildfarm Payload Board](https://github.com/orgs/osrf/projects/23/views/1).

## Board Explanation

Views:
* **All Issues**: Is a board that contains all the known issues in the buildfarm. You can read more about Known issues here: [Known Issues Docs](./known_issues.md).
* **ROS**: Contains all the issues related to ROS.
* **Gazebo**: Contains all the issues related to Gazebo.

All Issues Columns:
* **New / Triage**: This is an issue that we know it exists, isn't formally reported, and we're not doing something about that right now.
* **Investigating**: This is an issue that we know it exists, isn't formally reported and we're investigating why is it happening.
* **Blocked**: This is an issue that is reported, but there is an external factor that blocks us or dev team from fixing it.
* **Disabled**: This is an issue that is reported we decided to disable it to keep CI green. Usually happens because it was affecting our builds for too long or it was declared low priority by the dev teams.
* **Reported**: This is an issue that is reported, and the dev team is aware of it. It's pending to be assigned to someone in a dev team.
* **Fixing / Assigned**: This is an issue that is reported, and there is someone assigned to fix it.
* **Fixed**: These are issues that were fixed and are not present on the buildfarm anymore.

## Reporting an Issue

The information that you should include in most of the issues is:
* OS Version.
* Build type: source or binary.
* Reference build (Failing job name).
* Failing tests (if any).
* Log output for each test (you can add it inside a `<details>` tag to avoid cluttering the issue).


Some issues require more information, for example:
* Is this happening on a specific buildfarm machine?
* Flaky ratio/percentage (or if it's a consistent failure).
  * You can put this information in table format as the result of [`calculate_flakiness_jobs.sql`](./buildfarmer_triage_tools.md#calculate_flakiness_jobssql).
* Related issues in other repos (if any).


You can check some examples of issues in the [Buildfarm Payload Board](https://github.com/orgs/osrf/projects/23/views/1).

[Back :arrow_backward: ](../index.md)
