#!/usr/bin/env python3
"""
Update Issues Table Script

This script merges the functionality of refresh_known_open_issues.sh and
close_old_known_issues.sh. It:
1. Refreshes the status of open issues from GitHub
2. Closes issues that haven't appeared in the last 20 days
3. Updates issue metadata (priority, assignee, labels, last activity)
4. Logs all changes with timestamps and authors
"""

import argparse
import json
import logging
import re
import sqlite3
import subprocess
import sys
import traceback
from datetime import datetime, timedelta
from pathlib import Path


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)


def run_sql_command(script_dir, sql_file, *args):
    """
    Run a SQL script using sql_run.sh.
    
    Args:
        script_dir: Path to the scripts directory
        sql_file: Name of the SQL file to run
        *args: Arguments to pass to the SQL script
    
    Returns:
        The output of the command as a string
    """
    cmd = [str(script_dir / 'sql_run.sh'), sql_file] + list(args)
    result = subprocess.run(
        cmd,
        cwd=script_dir,
        capture_output=True,
        text=True
    )
    
    if result.returncode != 0:
        logger.error(f"SQL command failed: {result.stderr}")
        return ""
    
    return result.stdout.strip()


def get_github_issue_info(issue_url):
    """
    Get information about a GitHub issue using gh CLI.
    
    Args:
        issue_url: URL of the GitHub issue
    
    Returns:
        Dictionary with issue information, or None if failed
    """
    try:
        result = subprocess.run(
            ['gh', 'issue', 'view', issue_url, '--json', 
             'state,updatedAt,assignees,labels,closedAt'],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        if result.returncode != 0:
            logger.warning(f"Failed to get info for {issue_url}: {result.stderr}")
            return None
        
        return json.loads(result.stdout)
    
    except subprocess.TimeoutExpired:
        logger.warning(f"Timeout getting info for {issue_url}")
        return None
    except Exception as e:
        logger.warning(f"Error getting info for {issue_url}: {e}")
        return None


def calculate_issue_priority(conn, github_issue):
    """
    Calculate priority for an issue based on affected jobs and flakiness.
    This mirrors the Ruby calculate_issue_priority function.
    
    Args:
        conn: Database connection
        github_issue: GitHub issue URL
    
    Returns:
        Priority value (float)
    """
    cursor = conn.cursor()
    
    # Get all errors and jobs associated with this issue
    cursor.execute("""
        SELECT DISTINCT error_name, job_name
        FROM test_fail_issues
        WHERE github_issue = ?
    """, (github_issue,))
    
    rows = cursor.fetchall()
    if not rows:
        return 1.0
    
    # Load job priorities
    script_dir = Path(__file__).parent
    priorities_file = script_dir / 'lib' / 'job_priorities.csv'
    
    job_priorities = {}
    if priorities_file.exists():
        with open(priorities_file, 'r') as f:
            for line in f:
                parts = line.strip().split(',')
                if len(parts) == 2:
                    job_priorities[parts[0]] = float(parts[1])
    
    # Calculate priority based on jobs affected
    total_priority = 0.0
    for error_name, job_name in rows:
        job_priority = job_priorities.get(job_name, 1.0)
        
        # Check if issue is consistently failing (100% failure rate)
        # For simplicity, we'll just use job priority for now
        # The full calculation would involve flakiness queries
        total_priority += job_priority
    
    return round(total_priority, 3)


def determine_issue_status_and_priority(issue_info, conn, github_issue):
    """
    Determine the status and priority of an issue based on GitHub metadata.
    
    Args:
        issue_info: Issue information from GitHub API
        conn: Database connection
        github_issue: GitHub issue URL
    
    Returns:
        Tuple of (status, priority, assignee, last_activity)
    """
    gh_state = issue_info.get('state', 'OPEN')
    
    # Convert GitHub state to our status
    if gh_state == 'CLOSED':
        status = 'CLOSED'
    else:
        status = 'OPEN'
    
    # Get assignee (first one if multiple)
    assignees = issue_info.get('assignees', [])
    assignee = assignees[0]['login'] if assignees else None
    
    # Get last activity
    last_activity = issue_info.get('updatedAt', '')
    
    # Calculate priority
    priority = calculate_issue_priority(conn, github_issue)
    
    # Check labels for special statuses
    labels = issue_info.get('labels', [])
    label_names = [label['name'].lower() for label in labels]
    
    if 'wontfix' in label_names:
        status = 'WONTFIX'
    elif 'disabled' in label_names or 'test-disabled' in label_names:
        status = 'DISABLED'
    
    return status, priority, assignee, last_activity


def refresh_open_issues(script_dir, db_path, dry_run=False):
    """
    Refresh status of all open issues from GitHub.
    
    Args:
        script_dir: Path to the scripts directory
        db_path: Path to the database
        dry_run: If True, don't make any changes
    """
    logger.info("Refreshing open issues from GitHub...")
    
    # Get all open issues
    output = run_sql_command(script_dir, 'get_opened_known_issues.sql')
    
    if not output:
        logger.info("No open issues found")
        return
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    issues_processed = 0
    issues_closed = 0
    issues_updated = 0
    
    for line in output.split('\n'):
        if not line or 'error_name' in line:
            continue
        
        # Extract GitHub issue URL
        match = re.search(r'(https://github.com[^\s]+)', line)
        if not match:
            logger.warning(f"Could not extract GitHub URL from: {line}")
            continue
        
        github_issue = match.group(1)
        logger.info(f"Processing {github_issue}")
        
        # Get issue info from GitHub
        issue_info = get_github_issue_info(github_issue)
        
        if not issue_info:
            logger.warning(f"Could not get info for {github_issue}, skipping")
            continue
        
        issues_processed += 1
        
        # Determine status and priority
        status, priority, assignee, last_activity = determine_issue_status_and_priority(
            issue_info, conn, github_issue
        )
        
        gh_state = issue_info.get('state', 'UNKNOWN')
        logger.info(f"  GitHub state: {gh_state}, DB status: {status}, Priority: {priority}")
        
        if not dry_run:
            # Update the database
            now = datetime.now().isoformat()
            
            cursor.execute("""
                UPDATE test_fail_issues
                SET status = ?,
                    priority = ?,
                    assignee = ?,
                    issue_last_activity = ?,
                    updated_at = ?,
                    last_status_updated_by = 'update_issues_table.py'
                WHERE github_issue = ? AND status = 'OPEN'
            """, (status, priority, assignee, last_activity, now, github_issue))
            
            updated_count = cursor.rowcount
            
            if status == 'CLOSED':
                logger.info(f"  Closed issue {github_issue}")
                issues_closed += 1
            elif updated_count > 0:
                logger.info(f"  Updated {updated_count} record(s) for {github_issue}")
                issues_updated += 1
    
    if not dry_run:
        conn.commit()
    conn.close()
    
    logger.info(f"Processed {issues_processed} issues: {issues_closed} closed, {issues_updated} updated")


def close_stale_issues(script_dir, db_path, days_threshold=20, dry_run=False):
    """
    Close issues that haven't appeared in error logs for more than days_threshold days.
    
    Args:
        script_dir: Path to the scripts directory
        db_path: Path to the database
        days_threshold: Number of days after which to close an issue
        dry_run: If True, don't make any changes
    """
    logger.info(f"Checking for stale issues (not seen in {days_threshold} days)...")
    
    # Get all open issues (including DISABLED and WONTFIX)
    output = run_sql_command(script_dir, 'get_known_issues.sql', 'OPEN')
    
    if not output:
        logger.info("No open issues found")
        return
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    issues_closed = 0
    threshold_date = datetime.now() - timedelta(days=days_threshold)
    
    for line in output.split('\n'):
        if not line or 'error_name' in line:
            continue
        
        # Parse line: error_name|job_name|...
        parts = line.split('|')
        if len(parts) < 2:
            continue
        
        error_name = parts[0]
        job_name = parts[1]
        
        # Get last time this error appeared
        last_times_output = run_sql_command(script_dir, 'errors_get_last_ones.sql', error_name)
        
        # Find the line for this specific job
        last_time_for_job = None
        for time_line in last_times_output.split('\n'):
            if job_name in time_line:
                last_time_for_job = time_line
                break
        
        if not last_time_for_job:
            logger.info(f"No recent errors for '{error_name}' in job '{job_name}', closing")
            if not dry_run:
                cursor.execute("""
                    UPDATE test_fail_issues
                    SET status = 'CLOSED',
                        updated_at = ?,
                        last_status_updated_by = 'update_issues_table.py:stale'
                    WHERE error_name = ? AND job_name = ? AND status = 'OPEN'
                """, (datetime.now().isoformat(), error_name, job_name))
                issues_closed += cursor.rowcount
            continue
        
        # Extract date from the line (format: YYYY-MM-DD)
        date_match = re.search(r'(20\d{2}-\d{2}-\d{2})', last_time_for_job)
        
        if not date_match:
            logger.warning(f"Could not extract date from: {last_time_for_job}")
            continue
        
        error_date_str = date_match.group(1)
        error_date = datetime.strptime(error_date_str, '%Y-%m-%d')
        
        if error_date < threshold_date:
            logger.info(f"Closing stale issue: '{error_name}' in '{job_name}' (last seen: {error_date_str})")
            if not dry_run:
                cursor.execute("""
                    UPDATE test_fail_issues
                    SET status = 'CLOSED',
                        updated_at = ?,
                        last_status_updated_by = 'update_issues_table.py:stale'
                    WHERE error_name = ? AND job_name = ? AND status = 'OPEN'
                """, (datetime.now().isoformat(), error_name, job_name))
                issues_closed += cursor.rowcount
    
    if not dry_run:
        conn.commit()
    conn.close()
    
    logger.info(f"Closed {issues_closed} stale issues")


def update_timestamps(db_path, dry_run=False):
    """
    Update created_at timestamps for rows that don't have them.
    
    Args:
        db_path: Path to the database
        dry_run: If True, don't make any changes
    """
    logger.info("Updating timestamps for existing records...")
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Update records without created_at
    now = datetime.now().isoformat()
    
    if not dry_run:
        cursor.execute("""
            UPDATE test_fail_issues
            SET created_at = ?,
                updated_at = ?
            WHERE created_at IS NULL
        """, (now, now))
        
        updated = cursor.rowcount
        logger.info(f"Updated timestamps for {updated} records")
        
        conn.commit()
    
    conn.close()


def main():
    """Main function."""
    parser = argparse.ArgumentParser(
        description='Update issues table from GitHub and close stale issues'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Run without making any changes'
    )
    parser.add_argument(
        '--days-threshold',
        type=int,
        default=20,
        help='Number of days after which to close stale issues (default: 20)'
    )
    parser.add_argument(
        '--skip-refresh',
        action='store_true',
        help='Skip refreshing open issues from GitHub'
    )
    parser.add_argument(
        '--skip-stale',
        action='store_true',
        help='Skip closing stale issues'
    )
    
    args = parser.parse_args()
    
    if args.dry_run:
        logger.info("DRY RUN MODE - No changes will be made")
    
    # Determine paths
    script_dir = Path(__file__).parent
    db_path = script_dir.parent / 'buildfarmer.db'
    
    if not db_path.exists():
        logger.error(f"Database not found at {db_path}")
        sys.exit(1)
    
    # Update timestamps for existing records
    update_timestamps(db_path, args.dry_run)
    
    # Refresh open issues from GitHub
    if not args.skip_refresh:
        refresh_open_issues(script_dir, db_path, args.dry_run)
    
    # Close stale issues
    if not args.skip_stale:
        close_stale_issues(script_dir, db_path, args.days_threshold, args.dry_run)
    
    logger.info("Issue table update complete")


if __name__ == '__main__':
    main()
