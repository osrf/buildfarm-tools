#!/usr/bin/env python3
"""
Update Spreadsheet Script

This script updates the Buildfarm Issues Spreadsheet with data from the database.
It handles:
1. Buildfarm Issues tab - synced from test_fail_issues table
2. Jobs Priorities tab - synced from job_priorities.csv
3. Authentication with Google Sheets API using service account

Usage:
    export GOOGLE_SHEETS_CREDENTIALS=/path/to/credentials.json
    export BUILDFARM_SPREADSHEET_ID=your_spreadsheet_id
    python3 update_spreadsheet.py
"""

import csv
import logging
import os
import sqlite3
import sys
import traceback
from datetime import datetime
from pathlib import Path

try:
    import gspread
    from google.oauth2.service_account import Credentials
except ImportError:
    print("Error: gspread and google-auth are required. Install with:")
    print("  pip install gspread google-auth")
    sys.exit(1)


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)


# Google Sheets API scopes
SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file'
]


def get_google_sheets_client(credentials_path):
    """
    Get authenticated Google Sheets client.
    
    Args:
        credentials_path: Path to service account credentials JSON file
    
    Returns:
        Authenticated gspread client
    """
    if not os.path.exists(credentials_path):
        raise FileNotFoundError(f"Credentials file not found: {credentials_path}")
    
    credentials = Credentials.from_service_account_file(
        credentials_path,
        scopes=SCOPES
    )
    
    return gspread.authorize(credentials)


def get_issues_from_database(db_path):
    """
    Get all issues from the test_fail_issues table.
    
    Args:
        db_path: Path to the database
    
    Returns:
        List of dictionaries with issue data
    """
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("""
        SELECT 
            error_name,
            package_name,
            job_name,
            github_issue,
            status,
            created_at,
            updated_at,
            issue_last_activity,
            priority,
            assignee,
            last_status_updated_by
        FROM test_fail_issues
        ORDER BY 
            CASE status
                WHEN 'OPEN' THEN 1
                WHEN 'DISABLED' THEN 2
                WHEN 'WONTFIX' THEN 3
                WHEN 'CLOSED' THEN 4
            END,
            priority DESC NULLS LAST,
            error_name
    """)
    
    issues = []
    for row in cursor.fetchall():
        issues.append({
            'error_name': row['error_name'],
            'package_name': row['package_name'],
            'job_name': row['job_name'],
            'github_issue': row['github_issue'] or '',
            'status': row['status'],
            'created_at': row['created_at'] or '',
            'updated_at': row['updated_at'] or '',
            'issue_last_activity': row['issue_last_activity'] or '',
            'priority': row['priority'] if row['priority'] is not None else '',
            'assignee': row['assignee'] or '',
            'last_status_updated_by': row['last_status_updated_by'] or ''
        })
    
    conn.close()
    return issues


def update_issues_tab(worksheet, issues):
    """
    Update the Buildfarm Issues tab with data from database.
    
    Args:
        worksheet: gspread worksheet object
        issues: List of issue dictionaries
    """
    logger.info(f"Updating Issues tab with {len(issues)} issues...")
    
    # Prepare header row
    headers = [
        'Error Name',
        'Package Name',
        'Job Name',
        'GitHub Issue',
        'Status',
        'Created At',
        'Updated At',
        'Issue Last Activity',
        'Priority',
        'Assignee',
        'Last Status Updated By'
    ]
    
    # Prepare data rows
    rows = [headers]
    for issue in issues:
        rows.append([
            issue['error_name'],
            issue['package_name'],
            issue['job_name'],
            issue['github_issue'],
            issue['status'],
            issue['created_at'],
            issue['updated_at'],
            issue['issue_last_activity'],
            str(issue['priority']) if issue['priority'] != '' else '',
            issue['assignee'],
            issue['last_status_updated_by']
        ])
    
    # Clear existing content and update
    worksheet.clear()
    worksheet.update('A1', rows, value_input_option='RAW')
    
    # Format header row (bold)
    worksheet.format('A1:K1', {
        'textFormat': {'bold': True},
        'backgroundColor': {'red': 0.9, 'green': 0.9, 'blue': 0.9}
    })
    
    logger.info("Issues tab updated successfully")


def update_priorities_tab(worksheet, priorities_csv_path):
    """
    Update the Job Priorities tab with data from CSV.
    
    Args:
        worksheet: gspread worksheet object
        priorities_csv_path: Path to job_priorities.csv
    """
    logger.info("Updating Job Priorities tab...")
    
    if not priorities_csv_path.exists():
        logger.warning(f"Priorities CSV not found at {priorities_csv_path}")
        return
    
    # Read CSV
    rows = [['Job Name', 'Priority']]
    with open(priorities_csv_path, 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) == 2:
                rows.append(row)
    
    # Clear existing content and update
    worksheet.clear()
    worksheet.update('A1', rows, value_input_option='RAW')
    
    # Format header row
    worksheet.format('A1:B1', {
        'textFormat': {'bold': True},
        'backgroundColor': {'red': 0.9, 'green': 0.9, 'blue': 0.9}
    })
    
    logger.info(f"Job Priorities tab updated with {len(rows)-1} jobs")


def ensure_worksheet_exists(spreadsheet, title, rows=1000, cols=26):
    """
    Ensure a worksheet exists in the spreadsheet, creating it if necessary.
    
    Args:
        spreadsheet: gspread spreadsheet object
        title: Title of the worksheet
        rows: Number of rows
        cols: Number of columns
    
    Returns:
        The worksheet object
    """
    try:
        return spreadsheet.worksheet(title)
    except gspread.WorksheetNotFound:
        logger.info(f"Creating worksheet '{title}'...")
        return spreadsheet.add_worksheet(title=title, rows=rows, cols=cols)


def main():
    """Main function."""
    # Get configuration from environment variables
    credentials_path = os.environ.get('GOOGLE_SHEETS_CREDENTIALS')
    spreadsheet_id = os.environ.get('BUILDFARM_SPREADSHEET_ID')
    
    if not credentials_path:
        logger.error("GOOGLE_SHEETS_CREDENTIALS environment variable not set")
        logger.error("Set it to the path of your service account JSON file")
        sys.exit(1)
    
    if not spreadsheet_id:
        logger.error("BUILDFARM_SPREADSHEET_ID environment variable not set")
        logger.error("Set it to your Google Spreadsheet ID")
        sys.exit(1)
    
    # Determine paths
    script_dir = Path(__file__).parent
    db_path = script_dir.parent / 'buildfarmer.db'
    priorities_csv_path = script_dir / 'lib' / 'job_priorities.csv'
    
    if not db_path.exists():
        logger.error(f"Database not found at {db_path}")
        sys.exit(1)
    
    try:
        # Authenticate with Google Sheets
        logger.info("Authenticating with Google Sheets...")
        client = get_google_sheets_client(credentials_path)
        
        # Open spreadsheet
        logger.info(f"Opening spreadsheet {spreadsheet_id}...")
        spreadsheet = client.open_by_key(spreadsheet_id)
        
        # Update Buildfarm Issues tab
        issues = get_issues_from_database(db_path)
        issues_worksheet = ensure_worksheet_exists(spreadsheet, 'Buildfarm Issues', rows=2000, cols=11)
        update_issues_tab(issues_worksheet, issues)
        
        # Update Job Priorities tab
        priorities_worksheet = ensure_worksheet_exists(spreadsheet, 'Job Priorities', rows=1000, cols=2)
        update_priorities_tab(priorities_worksheet, priorities_csv_path)
        
        logger.info("Spreadsheet update complete!")
        logger.info(f"View at: https://docs.google.com/spreadsheets/d/{spreadsheet_id}")
        
    except Exception as e:
        logger.error(f"Error updating spreadsheet: {e}")
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
