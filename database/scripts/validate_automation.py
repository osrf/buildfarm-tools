#!/usr/bin/env python3
"""
Validation script for buildfarm automation scripts.

This script performs basic validation checks on the automation scripts
to ensure they can run without errors.
"""

import os
import sys
from pathlib import Path


def validate_imports():
    """Validate that all required modules can be imported."""
    print("Validating imports...")
    
    required_modules = [
        'yaml',
        'sqlite3',
        'csv',
        'json',
        'logging',
        're',
        'subprocess',
        'datetime',
    ]
    
    optional_modules = [
        ('gspread', 'Google Sheets integration'),
        ('google.oauth2.service_account', 'Google authentication'),
    ]
    
    errors = []
    
    for module in required_modules:
        try:
            __import__(module)
            print(f"  ✓ {module}")
        except ImportError as e:
            errors.append(f"Required module '{module}' not found: {e}")
            print(f"  ✗ {module}")
    
    for module, purpose in optional_modules:
        try:
            __import__(module)
            print(f"  ✓ {module} (optional - {purpose})")
        except ImportError:
            print(f"  ⚠ {module} (optional - {purpose}) - not available")
    
    return errors


def validate_file_structure():
    """Validate that all expected files exist."""
    print("\nValidating file structure...")
    
    script_dir = Path(__file__).parent
    db_path = script_dir.parent / 'buildfarmer.db'
    
    required_files = [
        (script_dir / 'generate_priorities.py', 'Generate priorities script'),
        (script_dir / 'update_issues_table.py', 'Update issues table script'),
        (script_dir / 'update_spreadsheet.py', 'Update spreadsheet script'),
        (script_dir / 'create_snapshot.py', 'Create snapshot script'),
        (script_dir / 'lib' / 'job_priorities_config.yaml', 'Job priorities config'),
        (db_path, 'Buildfarmer database'),
    ]
    
    errors = []
    
    for file_path, description in required_files:
        if file_path.exists():
            print(f"  ✓ {description}: {file_path.name}")
        else:
            errors.append(f"Missing file: {description} at {file_path}")
            print(f"  ✗ {description}: {file_path.name}")
    
    return errors


def validate_database_schema():
    """Validate that the database has the expected schema."""
    print("\nValidating database schema...")
    
    import sqlite3
    
    script_dir = Path(__file__).parent
    db_path = script_dir.parent / 'buildfarmer.db'
    
    if not db_path.exists():
        return ["Database file not found"]
    
    errors = []
    
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        # Check test_fail_issues table
        cursor.execute("PRAGMA table_info(test_fail_issues)")
        columns = {row[1] for row in cursor.fetchall()}
        
        expected_columns = {
            'error_name',
            'package_name',
            'job_name',
            'github_issue',
            'status',
            'created_at',
            'updated_at',
            'issue_last_activity',
            'priority',
            'assignee',
            'last_status_updated_by',
        }
        
        missing_columns = expected_columns - columns
        if missing_columns:
            errors.append(f"Missing columns in test_fail_issues: {missing_columns}")
            print(f"  ✗ test_fail_issues table missing columns: {missing_columns}")
        else:
            print(f"  ✓ test_fail_issues table has all required columns")
        
        conn.close()
    
    except Exception as e:
        errors.append(f"Error validating database: {e}")
        print(f"  ✗ Database validation error: {e}")
    
    return errors


def validate_config_file():
    """Validate that the config file is valid YAML."""
    print("\nValidating configuration file...")
    
    import yaml
    
    script_dir = Path(__file__).parent
    config_path = script_dir / 'lib' / 'job_priorities_config.yaml'
    
    if not config_path.exists():
        return ["Configuration file not found"]
    
    errors = []
    
    try:
        with open(config_path, 'r') as f:
            config = yaml.safe_load(f)
        
        if not isinstance(config, dict):
            errors.append("Configuration file is not a valid dictionary")
            print(f"  ✗ Invalid configuration format")
        else:
            print(f"  ✓ Configuration file is valid YAML")
            print(f"  ✓ Found {len(config)} categories")
    
    except Exception as e:
        errors.append(f"Error parsing configuration: {e}")
        print(f"  ✗ Configuration parsing error: {e}")
    
    return errors


def validate_scripts_syntax():
    """Validate Python scripts have valid syntax."""
    print("\nValidating script syntax...")
    
    import py_compile
    
    script_dir = Path(__file__).parent
    
    scripts = [
        'generate_priorities.py',
        'update_issues_table.py',
        'update_spreadsheet.py',
        'create_snapshot.py',
    ]
    
    errors = []
    
    for script in scripts:
        script_path = script_dir / script
        try:
            py_compile.compile(str(script_path), doraise=True)
            print(f"  ✓ {script}")
        except py_compile.PyCompileError as e:
            errors.append(f"Syntax error in {script}: {e}")
            print(f"  ✗ {script}")
    
    return errors


def main():
    """Run all validation checks."""
    print("=" * 60)
    print("Buildfarm Automation Validation")
    print("=" * 60)
    
    all_errors = []
    
    # Run all validation checks
    all_errors.extend(validate_imports())
    all_errors.extend(validate_file_structure())
    all_errors.extend(validate_database_schema())
    all_errors.extend(validate_config_file())
    all_errors.extend(validate_scripts_syntax())
    
    # Print summary
    print("\n" + "=" * 60)
    if all_errors:
        print("VALIDATION FAILED")
        print("=" * 60)
        print("\nErrors found:")
        for error in all_errors:
            print(f"  • {error}")
        sys.exit(1)
    else:
        print("VALIDATION PASSED")
        print("=" * 60)
        print("\nAll checks passed! The automation scripts are ready to use.")
        sys.exit(0)


if __name__ == '__main__':
    main()
