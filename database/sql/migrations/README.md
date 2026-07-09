# Migrations

SQL scripts that evolve the `buildfarmer.db` schema. Run them in order on any
database that needs to be brought up to date.

## Files

| # | File | What it does |
|---|------|--------------|
| 01 | `01_views.sql` | Creates all shared views in dependency order: `job_platforms` → `issue_links` → `active_failures`. Idempotent (uses `DROP VIEW IF EXISTS`); safe to re-run at any time to pick up the latest query logic. |

## View Dependency Order

```text
server_status
    └── job_platforms        (derives platform_os / platform_arch from os_name + job_name)
            └── active_failures   (uses job_platforms for platform labels)

test_fail_issues
    └── issue_links          (best non-obliviated GitHub issue per test/package/job)
