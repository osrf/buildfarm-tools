# Issue Snapshots

This directory contains weekly snapshots of the issue states for performance tracking.

## Files

Snapshot files are named: `snapshot_YYYY-MM-DD.json`

Example: `snapshot_2024-01-15.json`

## Purpose

These snapshots are used to:
- Track issue trends over time
- Calculate "Time to Resolution" metrics
- Assess PMC performance
- Identify patterns in issue lifecycle

## Generation

Snapshots are automatically created by the Weekly Snapshot workflow (`.github/workflows/weekly-snapshot.yml`) which runs every Monday at 00:00 UTC.

You can also manually create a snapshot:
```bash
cd database/scripts
python3 create_snapshot.py
```

## Format

Each snapshot is a JSON file containing:
```json
{
  "timestamp": "ISO 8601 timestamp",
  "date": "YYYY-MM-DD",
  "total_issues": 123,
  "status_counts": {
    "OPEN": 10,
    "CLOSED": 100,
    "DISABLED": 8,
    "WONTFIX": 5
  },
  "issues": [
    {
      "error_name": "...",
      "package_name": "...",
      "job_name": "...",
      "github_issue": "...",
      "status": "...",
      "created_at": "...",
      "updated_at": "...",
      "issue_last_activity": "...",
      "priority": 1.0,
      "assignee": "...",
      "last_status_updated_by": "..."
    }
  ]
}
```

## Git Ignore

Snapshot files are excluded from git (see `.gitignore`) because they can be large. They are stored in the workflow artifacts instead.

## Retention

The weekly workflow commits snapshots to the repository. Consider implementing retention policies to avoid repository bloat:
- Keep last 52 weeks (1 year) of snapshots
- Archive older snapshots to separate storage
- Or adjust `.gitignore` to exclude snapshots entirely and rely on workflow artifacts
