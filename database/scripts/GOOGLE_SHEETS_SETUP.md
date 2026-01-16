# Google Sheets Integration Setup Guide

This guide explains how to set up the Google Sheets integration for automated Buildfarm Issues tracking.

## Prerequisites

- A Google Cloud project
- Access to the Buildfarm Issues Spreadsheet (or permission to create a new one)
- Repository admin access to set secrets

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use an existing one)
3. Note the project ID

## Step 2: Enable Google Sheets API

1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Give it a name (e.g., "buildfarm-automation")
4. Grant it the "Editor" role (or create a custom role with Sheets access)
5. Click "Done"

## Step 4: Create Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Click "Create"
6. Save the downloaded JSON file securely

## Step 5: Share Spreadsheet with Service Account

1. Open your Buildfarm Issues Spreadsheet
2. Click "Share"
3. Add the service account email address (found in the JSON file, looks like: `buildfarm-automation@project-id.iam.gserviceaccount.com`)
4. Grant "Editor" permissions
5. Uncheck "Notify people"
6. Click "Share"

## Step 6: Get Spreadsheet ID

The spreadsheet ID is in the URL of your Google Sheet:
```
https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
```

Copy the `SPREADSHEET_ID` part.

## Step 7: Set GitHub Secrets

Add the following secrets to your GitHub repository:

### Method 1: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"

Add these two secrets:

**GOOGLE_SHEETS_CREDENTIALS**
- Value: The entire contents of the JSON file from Step 4
- Copy the whole JSON content including the outer braces

**BUILDFARM_SPREADSHEET_ID**
- Value: The spreadsheet ID from Step 6

### Method 2: Using GitHub CLI

```bash
# Set the credentials (replace path with your JSON file)
gh secret set GOOGLE_SHEETS_CREDENTIALS < /path/to/service-account-key.json

# Set the spreadsheet ID
gh secret set BUILDFARM_SPREADSHEET_ID --body "your-spreadsheet-id-here"
```

## Step 8: Test the Integration

### Test Locally (Optional)

```bash
cd database/scripts

# Set environment variables
export GOOGLE_SHEETS_CREDENTIALS=/path/to/service-account-key.json
export BUILDFARM_SPREADSHEET_ID=your-spreadsheet-id

# Run the update script
python3 update_spreadsheet.py
```

### Test in GitHub Actions

1. Go to "Actions" tab in your repository
2. Select "Daily Workflow"
3. Click "Run workflow"
4. Wait for it to complete
5. Check your spreadsheet for updates

## Spreadsheet Structure

The automation will create/update these tabs:

### Buildfarm Issues Tab

| Column | Description |
|--------|-------------|
| Error Name | Name of the test/error |
| Package Name | Package where error occurs |
| Job Name | CI job name |
| GitHub Issue | Link to tracking issue |
| Status | OPEN/CLOSED/DISABLED/WONTFIX |
| Created At | When issue was first tracked |
| Updated At | Last update timestamp |
| Issue Last Activity | Last activity on GitHub issue |
| Priority | Calculated priority value |
| Assignee | GitHub username |
| Last Status Updated By | Who/what updated the status |

### Job Priorities Tab

| Column | Description |
|--------|-------------|
| Job Name | CI job name |
| Priority | Priority value (0.25 to 1.0) |

## Troubleshooting

### "Permission denied" error

- Verify the service account email is shared with the spreadsheet
- Check that it has "Editor" permissions

### "Spreadsheet not found" error

- Verify the spreadsheet ID is correct
- Check that the spreadsheet hasn't been deleted
- Ensure the service account has access

### "Invalid credentials" error

- Verify the JSON credentials are correct
- Check that the service account key hasn't been deleted or revoked
- Ensure the Google Sheets API is enabled in your project

### Workflow skips spreadsheet update

The workflow will skip the spreadsheet update if the secrets are not set. Check:
```yaml
if: ${{ secrets.GOOGLE_SHEETS_CREDENTIALS != '' && secrets.BUILDFARM_SPREADSHEET_ID != '' }}
```

## Security Considerations

- **Never commit the service account JSON file to the repository**
- Store the JSON file securely if keeping a local copy
- Rotate service account keys periodically (recommended: every 90 days)
- Use the principle of least privilege - only grant necessary permissions
- Monitor the service account activity in Google Cloud Console

## Maintenance

### Rotating Service Account Keys

1. Create a new key (Step 4)
2. Update the GitHub secret
3. Test that it works
4. Delete the old key from Google Cloud Console

### Updating Spreadsheet Structure

If you need to add/modify columns:

1. Edit `update_spreadsheet.py`
2. Update the `headers` list in `update_issues_tab()` or `update_priorities_tab()`
3. Update the data rows accordingly
4. Test locally before committing

## Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [gspread Python Library](https://docs.gspread.org/)
- [Service Account Authentication](https://cloud.google.com/iam/docs/service-accounts)
