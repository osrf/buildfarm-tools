#!/usr/bin/env python3
"""
Create Snapshot Script

This script creates a weekly snapshot of the issue states for performance tracking.
Snapshots are saved as JSON files and can be used to calculate metrics like
"Time to Resolution" for PMC performance assessment.
"""

import json
import logging
import sqlite3
import sys
import traceback
from datetime import datetime
from pathlib import Path


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)


def create_snapshot(db_path, output_dir):
    """
    Create a snapshot of the current state of issues.
    
    Args:
        db_path: Path to the database
        output_dir: Directory to save snapshots
    """
    logger.info("Creating issue snapshot...")
    
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # Get snapshot timestamp
    snapshot_time = datetime.now().isoformat()
    snapshot_date = datetime.now().strftime('%Y-%m-%d')
    
    # Get all issues
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
        ORDER BY error_name, job_name
    """)
    
    issues = []
    for row in cursor.fetchall():
        issues.append({
            'error_name': row['error_name'],
            'package_name': row['package_name'],
            'job_name': row['job_name'],
            'github_issue': row['github_issue'],
            'status': row['status'],
            'created_at': row['created_at'],
            'updated_at': row['updated_at'],
            'issue_last_activity': row['issue_last_activity'],
            'priority': row['priority'],
            'assignee': row['assignee'],
            'last_status_updated_by': row['last_status_updated_by']
        })
    
    # Calculate summary statistics
    status_counts = {}
    for issue in issues:
        status = issue['status']
        status_counts[status] = status_counts.get(status, 0) + 1
    
    # Create snapshot object
    snapshot = {
        'timestamp': snapshot_time,
        'date': snapshot_date,
        'total_issues': len(issues),
        'status_counts': status_counts,
        'issues': issues
    }
    
    conn.close()
    
    # Ensure output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Save snapshot
    output_file = output_dir / f'snapshot_{snapshot_date}.json'
    with open(output_file, 'w') as f:
        json.dump(snapshot, f, indent=2)
    
    logger.info(f"Snapshot saved to {output_file}")
    logger.info(f"Total issues: {len(issues)}")
    logger.info(f"Status breakdown: {status_counts}")
    
    return output_file


def calculate_metrics(snapshots_dir):
    """
    Calculate metrics from historical snapshots.
    
    Args:
        snapshots_dir: Directory containing snapshots
    
    Returns:
        Dictionary with calculated metrics
    """
    logger.info("Calculating metrics from snapshots...")
    
    snapshot_files = sorted(snapshots_dir.glob('snapshot_*.json'))
    
    if len(snapshot_files) < 2:
        logger.info("Not enough snapshots to calculate metrics")
        return {}
    
    # Load all snapshots
    snapshots = []
    for snapshot_file in snapshot_files:
        with open(snapshot_file, 'r') as f:
            snapshots.append(json.load(f))
    
    # Calculate time to resolution for closed issues
    resolutions = []
    
    # Track issues across snapshots
    issue_history = {}  # key: (error_name, job_name), value: list of snapshots
    
    for snapshot in snapshots:
        for issue in snapshot['issues']:
            key = (issue['error_name'], issue['job_name'])
            if key not in issue_history:
                issue_history[key] = []
            issue_history[key].append({
                'date': snapshot['date'],
                'status': issue['status'],
                'created_at': issue['created_at']
            })
    
    # Find issues that were opened and then closed
    for key, history in issue_history.items():
        opened_date = None
        closed_date = None
        
        for i, entry in enumerate(history):
            if entry['status'] in ['OPEN', 'DISABLED', 'WONTFIX']:
                if opened_date is None:
                    opened_date = entry['date']
            elif entry['status'] == 'CLOSED':
                if opened_date is not None and closed_date is None:
                    closed_date = entry['date']
                    
                    # Calculate days to resolution
                    try:
                        opened = datetime.fromisoformat(opened_date)
                        closed = datetime.fromisoformat(closed_date)
                        days = (closed - opened).days
                        resolutions.append(days)
                    except:
                        pass
    
    # Calculate statistics
    metrics = {
        'total_snapshots': len(snapshots),
        'total_resolutions_tracked': len(resolutions)
    }
    
    if resolutions:
        metrics['avg_time_to_resolution_days'] = sum(resolutions) / len(resolutions)
        metrics['min_time_to_resolution_days'] = min(resolutions)
        metrics['max_time_to_resolution_days'] = max(resolutions)
    
    logger.info(f"Metrics: {metrics}")
    
    return metrics


def main():
    """Main function."""
    # Determine paths
    script_dir = Path(__file__).parent
    db_path = script_dir.parent / 'buildfarmer.db'
    snapshots_dir = script_dir.parent / 'snapshots'
    
    if not db_path.exists():
        logger.error(f"Database not found at {db_path}")
        sys.exit(1)
    
    try:
        # Create snapshot
        snapshot_file = create_snapshot(db_path, snapshots_dir)
        
        # Calculate metrics if we have enough snapshots
        calculate_metrics(snapshots_dir)
        
        logger.info("Snapshot creation complete")
        
    except Exception as e:
        logger.error(f"Error creating snapshot: {e}")
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
