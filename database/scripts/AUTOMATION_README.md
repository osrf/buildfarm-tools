# Buildfarm Issues Automation

This directory contains scripts to automate the management and tracking of buildfarm issues.

## Overview

The automation system consists of several components that work together to:
1. Track job priorities based on configurable patterns
2. Synchronize GitHub issues with the local database
3. Update a Google Spreadsheet with current issue status
4. Create weekly snapshots for performance metrics

## Scripts

### `generate_priorities.py`

Generates `lib/job_priorities.csv` from `lib/job_priorities_config.yaml`.

**Usage:**
```bash
cd database/scripts
python3 generate_priorities.py
```

**Configuration:**
Edit `lib/job_priorities_config.yaml` to add or modify job patterns and their priorities.

### `update_issues_table.py`

Merges functionality from `refresh_known_open_issues.sh` and `close_old_known_issues.sh`.
Updates the `test_fail_issues` table with:
- Current status from GitHub
- Priority calculations
- Assignee information
- Last activity timestamps

**Usage:**
```bash
cd database/scripts
python3 update_issues_table.py [options]

Options:
  --dry-run              Run without making changes
  --days-threshold N     Close issues not seen in N days (default: 20)
  --skip-refresh         Skip refreshing open issues from GitHub
  --skip-stale           Skip closing stale issues
```

**Requirements:**
- `gh` CLI must be installed and authenticated
- `GITHUB_TOKEN` environment variable must be set

### `update_spreadsheet.py`

Updates a Google Spreadsheet with data from the database.

**Usage:**
```bash
cd database/scripts
export GOOGLE_SHEETS_CREDENTIALS=/path/to/credentials.json
export BUILDFARM_SPREADSHEET_ID=your_spreadsheet_id
python3 update_spreadsheet.py
```

**Setup:**
1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a service account and download credentials JSON
4. Share your spreadsheet with the service account email
5. Set environment variables with credentials path and spreadsheet ID

**Sheets Updated:**
- **Buildfarm Issues**: All issues from `test_fail_issues` table
- **Job Priorities**: All jobs and their priorities from `job_priorities.csv`

### `create_snapshot.py`

Creates weekly snapshots of issue states for performance tracking.

**Usage:**
```bash
cd database/scripts
python3 create_snapshot.py
```

Snapshots are saved to `database/snapshots/` and used to calculate metrics like:
- Time to resolution
- Issue trends over time
- Status distribution changes

## Database Schema

The `test_fail_issues` table has been extended with the following columns:

| Column | Type | Description |
|--------|------|-------------|
| `created_at` | TEXT | When the issue was first tracked |
| `updated_at` | TEXT | Last time the record was updated |
| `issue_last_activity` | TEXT | Last activity on the GitHub issue |
| `priority` | REAL | Calculated priority based on job importance |
| `assignee` | TEXT | GitHub username of assignee |
| `last_status_updated_by` | TEXT | Script or user that last updated status |

## Workflow Integration

### Daily Workflow

The daily workflow (`.github/workflows/dailyWorkflow.yml`) runs:
1. `generate_priorities.py` - Update job priorities
2. `update_issues_table.py` - Sync with GitHub
3. `update_spreadsheet.py` - Update spreadsheet (if credentials configured)
4. Report generation (existing)

### Weekly Snapshot

The weekly snapshot workflow (`.github/workflows/weekly-snapshot.yml`) runs every Monday:
1. `create_snapshot.py` - Create issue state snapshot
2. Commit and push snapshot to repository

## Configuration Files

### `lib/job_priorities_config.yaml`

Defines patterns and priorities for different job types. Patterns are regular expressions matched against job names.

**Example:**
```yaml
ros2_ci:
  - pattern: "^Rci__nightly-(release|debug)_ubuntu_noble_amd64$"
    priority: 1.0
  - pattern: "^Rci__nightly-performance_ubuntu_noble_amd64$"
    priority: 0.25

default:
  priority: 1.0
```

### Environment Variables

Required for automation:

| Variable | Description | Required For |
|----------|-------------|--------------|
| `GITHUB_TOKEN` | GitHub API token | update_issues_table.py |
| `GOOGLE_SHEETS_CREDENTIALS` | Path to service account JSON | update_spreadsheet.py |
| `BUILDFARM_SPREADSHEET_ID` | Google Spreadsheet ID | update_spreadsheet.py |

## Migrating from Shell Scripts

The new Python scripts replace the functionality of:

### `refresh_known_open_issues.sh` → `update_issues_table.py`
- Now uses GitHub CLI JSON output instead of parsing text
- Adds priority calculation
- Adds assignee tracking
- Better error handling and logging

### `close_old_known_issues.sh` → `update_issues_table.py`
- Same functionality, integrated into one script
- Configurable threshold (default 20 days)
- Better logging

## Testing

Test the scripts in dry-run mode before applying changes:

```bash
# Test issue updates
cd database/scripts
python3 update_issues_table.py --dry-run

# Test priorities generation
python3 generate_priorities.py

# Test snapshot creation
python3 create_snapshot.py
```

## Troubleshooting

### "gh: command not found"
Install GitHub CLI: https://cli.github.com/

### "gspread module not found"
Install Python dependencies:
```bash
pip install -r requirements.txt
```

### "Permission denied" errors
Ensure service account has edit access to the spreadsheet.

### "No open issues found"
This is normal if there are no open issues in the database.

## Maintenance

### Adding New Job Patterns

1. Edit `lib/job_priorities_config.yaml`
2. Add new pattern with appropriate priority
3. Run `generate_priorities.py`
4. Commit the updated config and CSV

### Modifying Priority Calculation

Edit the `calculate_issue_priority()` function in `update_issues_table.py` to change how priorities are calculated based on job importance and flakiness.

### Changing Stale Issue Threshold

Use the `--days-threshold` option:
```bash
python3 update_issues_table.py --days-threshold 30  # 30 days instead of 20
```

Or update the workflow file to change the default.
