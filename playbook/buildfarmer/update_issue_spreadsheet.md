# Update Issue Spreadsheet

This page explains how to sync active known issues from the buildfarm database into the Buildfarm Issues Spreadsheet.
The sync is performed by [scripts/update_spreadsheet.py](../../../scripts/update_spreadsheet.py).

## When to run

Run this after refreshing known issues or when you need the spreadsheet to reflect the current open issues in the database.

## Prerequisites

- Access to the Buildfarm Issues Spreadsheet and the service account in [credentials.json](../../../credentials.json).
- The buildfarm database is present and up to date in [buildfarm-tools/database](../../database/).
- Python deps installed (the script uses `gspread`).

## Create spreadsheet credentials

Steps to get the spreadsheet credentials:

1. Go to https://console.cloud.google.com with your Google account.
2. Create a new project, then enable **Google Sheets API** and **Google Drive API**.
3. Go to https://console.cloud.google.com/apis/credentials and create a new Service account credential.
	- Give the credential a name and a description.
	- With no additional parameters, save the credential.
4. Click your credential address and go to **Keys**.
	- Click **Add Key** > **Create new key**.
	- Select **JSON**.
	- Save it as [buildfarm-tools-private/credentials.json](../../../credentials.json).
5. Go to the spreadsheet you want to edit (in this case **Buildfarm Issue Triage**).
	- Click **Share**.
	- Share the spreadsheet with the `client_email` found in the downloaded credentials file.

## Data source

The script executes [get_active_known_issues.sql](../../database/scripts/get_active_known_issues.sql) via `sql_run.sh`.
The SQL query is:

```sql
SELECT 
	github_issue,
	status,
	assignee,
	priority,
	created_at,
	issue_last_activity
FROM test_fail_issues
WHERE status != "CLOSED"
GROUP BY github_issue;
```

## What the script does

1. Runs the SQL query and parses each row as one GitHub issue.
2. Builds the issue key as `owner/repo#number` from the issue URL.
3. Routes each issue to a sheet tab:
   - **Gazebo Issues** if the key contains `gazebo` or `gz-` (case-insensitive).
   - Otherwise to **ROS Issues**.
4. Updates existing rows (match by issue key in column A) or appends new rows.
5. Paints newly appended rows green for visibility.

The spreadsheet columns are populated as:

- Issue key (`owner/repo#number`)
- Assignee (or `Not assigned`)
- Status (or `Not assigned`)
- Created at
- Last activity
- Priority
- Notes (empty)

## Run the sync

From the repository root:

```bash
python3 scripts/update_spreadsheet.py
```

If you run it from another directory, the script still works because it resolves paths relative to its location.

## Troubleshooting

- **SQL error**: Make sure [buildfarm-tools/database/scripts/sql_run.sh](../../database/scripts/sql_run.sh) is executable and the database exists.
- **Auth error**: Verify the service account in [credentials.json](../../../credentials.json) has access to the spreadsheet.
- **Sheet not found**: Check `SHEET_NAME`, `ROS_SHEET`, and `GAZEBO_SHEET` in [scripts/update_spreadsheet.py](../../../scripts/update_spreadsheet.py).
- **Invalid URLs skipped**: The database must store full GitHub issue URLs (e.g., `https://github.com/org/repo/issues/123`).

# Links to other pages

## Guides

* [Known Issues](./known_issues.md)
* [Reporting Problems](./reporting_problems.md)
* [Buildfarmer triage tools](./buildfarmer_triage_tools.md#database-scripts-usage)

[Back :arrow_backward: ](../index.md)
