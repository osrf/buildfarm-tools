# Reporting Problems

After you have investigated an issue (test regression or build regression) and you have determined that is a new problem in the buildfarm, you should report it to the respective dev team by opening a GitHub issue and adding it to the [Buildfarm Issues Spreadsheet](https://docs.google.com/spreadsheets/d/1gX7Hw_aVsI4U05i2-NxCY66a4CmRy1Yyb6dokK5QtMg/edit?gid=0#gid=0).

## Spreadsheet Explanation

> You can read more about Known issues here: [Known Issues Docs](./known_issues.md).

There are two tabs for each project (ROS Issues and Gazebo Issues).
Each one contains a table with all the issues reported for that specific project.
Normally it contains a filter to not show issues with status "Disabled" and "Completed".

The columns are described below:
- **Issue**: The link to the reported issue
- **Assignee**: The person assigned to investigate and fix the issue
- **Status**: The status of the issue. It can be one of the following:
  - **Not assigned**: The issue has been reported but there is no developer assigned to solve it yet.
  - **Investigating**: The issue has been assigned and the developer is investigating the issue.
  - **Pending Fix**: There is a PR opened to fix the issue.
  - **Blocked**: The issue depends on another change the team doesn't have control of.
  - **To be disabled**: The test regressions mentioned on the issue should be disabled as a decision of the team.
  - **Help Wanted**: The issue needs more information or is a low priority to solve that someone from the community can take.
  - **Completed**: The issue has been fixed and is not happening anymore.
  - **Obliviated**: There was not a fix to the issue, but it is not happening anymore.
  - **Disabled**: The test regressions mentioned on the issue were disabled.

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


You can check some examples of issues in the [Buildfarm Issues Spreadsheet](https://docs.google.com/spreadsheets/d/1gX7Hw_aVsI4U05i2-NxCY66a4CmRy1Yyb6dokK5QtMg/edit?gid=0#gid=0).

[Back :arrow_backward: ](../index.md)
