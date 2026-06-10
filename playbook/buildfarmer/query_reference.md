# Dashboard Query Reference

This document describes the SQLite data contract consumed by the dashboard generator.
Each query is a standalone contract: its output columns, inferred SQLite types, and one sample row.

## Shared view: `active_failures`

Source: `database/sql/create_view-active_failures.sql`

Reusable stored query that identifies persistently broken test/job pairs across the buildfarms.

| Column | Type | Description |
| --- | --- | --- |
| `test_name` | `TEXT` | Test identifier from `test_failures.error_name`. |
| `package` | `TEXT` | Package name from `test_failures.package_name`. |
| `job_name` | `TEXT` | Job identifier. |
| `build_date` | `TEXT` (`YYYY-MM-DD`) | Date of the last active failure for that job. |
| `consecutive_failures` | `INTEGER` | Current consecutive failure streak. |
| `os` | `TEXT` | Normalized operating system label derived from the job name. |
| `arch` | `TEXT` | Normalized architecture label derived from the job name. |

Sample row:

| test_name | package | job_name | build_date | consecutive_failures | os | arch |
| --- | --- | --- | --- | ---: | --- | --- |
| `topic_monitor.topic_monitor.test.test_mypy.test_mypy` | `topic_monitor` | `nightly_linux_debug` | `2026-05-29` | `34` | `linux` | `unknown` |

## 1.1 `active_test_regressions`

Source: `active_test_regressions.sql`

Returns one row per consistently failing test that has not passed in the last 3 days.

| Column | Type | Description |
| --- | --- | --- |
| `test_name` | `TEXT` | Test identifier from `test_failures.error_name`. |
| `package` | `TEXT` | Package name from `test_failures.package_name`. |
| `first_seen_date` | `TEXT` (`YYYY-MM-DD`) | Earliest build date among the active failures in the group. |
| `consecutive_failures` | `INTEGER` | Current consecutive failure streak. |
| `affected_platforms` | `TEXT` (JSON array) | Array of `{ "os": ..., "arch": ... }` objects. |
| `linked_issue` | `TEXT` or `NULL` | Best known GitHub issue URL linked to the regression. |

Sample row:

| test_name | package | first_seen_date | consecutive_failures | affected_platforms | linked_issue |
| --- | --- | --- | ---: | --- | --- |
| `topic_monitor.topic_monitor.test.test_mypy.test_mypy` | `topic_monitor` | `2026-05-29` | `34` | `[{"os":"linux","arch":"unknown"}]` | `https://github.com/ros2/geometry2/issues/941` |

Example run

Command (run from `database/scripts`):

```bash
cd database/scripts
./sql_run.sh active_test_regressions.sql
```

Sample output (first row):

```
test_name                                                   package         first_seen_date  consecutive_failures  affected_platforms                             linked_issue
topic_monitor.topic_monitor.test.test_mypy.test_mypy       topic_monitor   2026-05-29       34                    [{"os":"linux","arch":"unknown"}]       https://github.com/ros2/geometry2/issues/941
```

## 1.2 `flaky_tests`

Source: `flaky_tests.sql`

Returns one row per flaky test, excluding tests already classified in `active_test_regressions`.

| Column | Type | Description |
| --- | --- | --- |
| `test_name` | `TEXT` | Test identifier. |
| `package` | `TEXT` | Package name. |
| `failure_count` | `INTEGER` | Number of failing runs in the 20-day window. |
| `total_runs` | `INTEGER` | Total runs observed in the 20-day window. |
| `fail_rate_pct` | `REAL` | `failure_count / total_runs * 100`, rounded to 2 decimals. |
| `affected_platforms` | `TEXT` (JSON array) | Array of `{ "os": ..., "arch": ... }` objects. |
| `linked_issue` | `TEXT` or `NULL` | Best known GitHub issue URL linked to the flaky test. |

Sample row:

| test_name | package | failure_count | total_runs | fail_rate_pct | affected_platforms | linked_issue |
| --- | --- | ---: | ---: | ---: | --- | --- |
| `1 cmake warnings` | `cmake` | `90` | `145` | `62.07` | `[{"os":"linux","arch":"aarch64"},{"os":"linux","arch":"unknown"},{"os":"unknown","arch":"amd64"}]` | `https://github.com/ros2/rviz/issues/1750` |

Example run

Command (run from `database/scripts`):

```bash
cd database/scripts
./sql_run.sh flaky_tests.sql
```

Sample output (first row):

```
test_name           package   failure_count  total_runs  fail_rate_pct  affected_platforms                                                                 linked_issue
1 cmake warnings    cmake     90             145         62.07          [{"os":"linux","arch":"aarch64"},{"os":"linux","arch":"unknown"},{"os":"unknown","arch":"amd64"}]   https://github.com/ros2/rviz/issues/1750
```

## 1.3 `single_test_history`

Source: `single_test_history.sql`

Returns a 90-day daily time series for a single `test_name`. Missing days are filled with `NULL`.

| Column | Type | Description |
| --- | --- | --- |
| `date` | `TEXT` (`YYYY-MM-DD`) | Day in the 90-day window. |
| `result` | `INTEGER` or `NULL` | `1` = pass, `0` = fail, `NULL` = not run. |

Sample row:

| date | result |
| --- | ---: |
| `2026-03-06` | `0` |

Example run

Command (run from `database/scripts` and replace the test name):

```bash
cd database/scripts
./sql_run.sh single_test_history.sql "topic_monitor.topic_monitor.test.test_mypy.test_mypy"
```

Sample output (snippet):

```
date        result
2026-03-06  0
```

## 1.4 `known_issues_summary`

Source: `known_issues_summary.sql`

Returns one row per GitHub issue tracked in `test_fail_issues`, including all open issues and closed issues seen in a build within the last 30 days.

| Column | Type | Description |
| --- | --- | --- |
| `issue_id` | `TEXT` | GitHub issue URL stored in `test_fail_issues.github_issue`. |
| `title` | `TEXT` | Stable display label derived from the URL because the database does not store the real GitHub issue title. |
| `status` | `TEXT` | Issue tracking status from `test_fail_issues.status`. |
| `priority` | `REAL` or `NULL` | Issue priority. |
| `assignee` | `TEXT` or `NULL` | Issue assignee. |
| `last_activity_date` | `TEXT` (`YYYY-MM-DD`) or `NULL` | Last recorded activity date. |
| `last_seen_in_build_date` | `TEXT` (`YYYY-MM-DD`) or `NULL` | Latest build date where the issue was observed. |
| `stale` | `INTEGER` | `1` when `last_seen_in_build_date` is `NULL` or older than 20 days, otherwise `0`. |

Sample row:

| issue_id | title | status | priority | assignee | last_activity_date | last_seen_in_build_date | stale |
| --- | --- | --- | ---: | --- | --- | --- | ---: |
| `https://github.com/gazebosim/gz-plugin/issues/210` | `gazebosim/gz-plugin#210` | `NOT ASSIGNED` | `0.175` | `Not Assigned` | `NULL` | `2026-05-17` | `0` |

Example run

Command (run from `database/scripts`):

```bash
cd database/scripts
./sql_run.sh known_issues_summary.sql
```

Sample output (first row):

```
issue_id                                           title                      status         priority  assignee       last_activity_date  last_seen_in_build_date  stale
https://github.com/gazebosim/gz-plugin/issues/210  gazebosim/gz-plugin#210   NOT ASSIGNED    0.175     Not Assigned   NULL                2026-05-17               0
```

## Notes

- `affected_platforms` is emitted as SQLite JSON text, not as a native array type.
- `title` in `known_issues_summary` is a fallback label derived from the issue URL because the current schema has no stored issue title field.