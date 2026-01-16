#!/usr/bin/env python3
"""
Generate job_priorities.csv from job_priorities_config.yaml

This script reads job patterns and priorities from the configuration file
and queries the database to generate a CSV file with job priorities.
"""

import csv
import re
import sqlite3
import sys
import yaml
from pathlib import Path


def load_config(config_path):
    """Load the job priorities configuration from YAML file."""
    with open(config_path, 'r') as f:
        return yaml.safe_load(f)


def get_all_jobs(db_path):
    """Query all unique job names from the database."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Get all unique job names from server_status table
    cursor.execute("SELECT DISTINCT job_name FROM server_status ORDER BY job_name")
    jobs = [row[0] for row in cursor.fetchall()]
    
    conn.close()
    return jobs


def match_job_to_priority(job_name, config):
    """
    Match a job name against patterns in the config and return the priority.
    Returns the first matching priority, or the default priority if no match.
    """
    # Iterate through all categories
    for category_name, patterns in config.items():
        if category_name == 'default':
            continue
            
        # Patterns can be a list of pattern objects or a single priority value
        if isinstance(patterns, list):
            for pattern_obj in patterns:
                if isinstance(pattern_obj, dict) and 'pattern' in pattern_obj:
                    pattern = pattern_obj['pattern']
                    priority = pattern_obj['priority']
                    
                    # Try to match the regex pattern
                    try:
                        if re.match(pattern, job_name):
                            return priority
                    except re.error as e:
                        print(f"Warning: Invalid regex pattern '{pattern}': {e}", file=sys.stderr)
                        continue
    
    # Return default priority if no match
    default_priority = config.get('default', {}).get('priority', 1.0)
    return default_priority


def generate_priorities_csv(config_path, db_path, output_path):
    """
    Generate the job_priorities.csv file.
    
    Args:
        config_path: Path to the YAML configuration file
        db_path: Path to the SQLite database
        output_path: Path to the output CSV file
    """
    # Load configuration
    config = load_config(config_path)
    
    # Get all jobs from database
    jobs = get_all_jobs(db_path)
    
    if not jobs:
        print("Warning: No jobs found in database", file=sys.stderr)
        return
    
    # Generate job priorities
    job_priorities = []
    for job_name in jobs:
        priority = match_job_to_priority(job_name, config)
        job_priorities.append((job_name, priority))
    
    # Sort by job name for consistency
    job_priorities.sort(key=lambda x: x[0])
    
    # Write to CSV
    with open(output_path, 'w', newline='') as f:
        writer = csv.writer(f)
        for job_name, priority in job_priorities:
            writer.writerow([job_name, priority])
    
    print(f"Generated {output_path} with {len(job_priorities)} job priorities")


def main():
    """Main function."""
    # Determine paths
    script_dir = Path(__file__).parent
    config_path = script_dir / 'lib' / 'job_priorities_config.yaml'
    db_path = script_dir.parent / 'buildfarmer.db'
    output_path = script_dir / 'lib' / 'job_priorities.csv'
    
    # Check if config file exists
    if not config_path.exists():
        print(f"Error: Configuration file not found at {config_path}", file=sys.stderr)
        sys.exit(1)
    
    # Check if database exists
    if not db_path.exists():
        print(f"Error: Database file not found at {db_path}", file=sys.stderr)
        sys.exit(1)
    
    # Generate the CSV
    try:
        generate_priorities_csv(config_path, db_path, output_path)
    except Exception as e:
        print(f"Error generating priorities CSV: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
