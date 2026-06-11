# Migrations

This directory contains the ordered SQL scripts used to evolve the dashboard schema.

Run them in numerical order on a fresh database or on a copy of an existing `buildfarmer.db` snapshot:

1. `1_create_table-server_status.sql`
2. `2_migrate_server_status_platforms.sql`
3. `3_create_view-active_failures.sql`

## Purpose

- `1_create_table-server_status.sql` defines the target `server_status` table schema.
- `2_migrate_server_status_platforms.sql` backfills platform data for older snapshots.
- `3_create_view-active_failures.sql` creates the reusable view consumed by the dashboard queries.

## Pre-migration schema

The schema below is the shape used before the platform normalization migration. It is included here so the migration history is explicit and easy to audit.

```sql
CREATE TABLE IF NOT EXISTS server_status(
    job_name TEXT PRIMARY KEY NOT NULL,
    server_status TEXT,
    release TEXT,
    os_name TEXT,
    project TEXT,
    domain TEXT
);
```

## Target schema

After the migration, `server_status` also stores normalized platform columns so downstream queries do not need to parse `job_name` repeatedly.

```sql
CREATE TABLE IF NOT EXISTS server_status(
    job_name TEXT PRIMARY KEY NOT NULL,
    server_status TEXT,
    release TEXT,
    os_name TEXT,
    platform_os TEXT,
    platform_arch TEXT,
    project TEXT,
    domain TEXT
);
```

## Notes

- Apply the scripts in order. The migration script expects the base table to exist before it runs.
- Use the scripts in this folder for the migration path. The dashboard query files outside this folder consume the resulting schema and view.
- When testing locally, run the scripts against a copy of the database first.