-- Add new columns to test_fail_issues table for enhanced tracking
-- This migration extends the table to support automated spreadsheet updates

-- Add CreatedAt timestamp (will be populated by update script for existing rows)
ALTER TABLE test_fail_issues ADD COLUMN created_at TEXT;

-- Add UpdatedAt timestamp (will be populated by update script)
ALTER TABLE test_fail_issues ADD COLUMN updated_at TEXT;

-- Add IssueLastActivity timestamp (from GitHub API)
ALTER TABLE test_fail_issues ADD COLUMN issue_last_activity TEXT;

-- Add Priority (calculated based on job importance and flakiness)
ALTER TABLE test_fail_issues ADD COLUMN priority REAL;

-- Add Assignee (from GitHub issue)
ALTER TABLE test_fail_issues ADD COLUMN assignee TEXT;

-- Add LastStatusUpdatedBy (who changed the status)
ALTER TABLE test_fail_issues ADD COLUMN last_status_updated_by TEXT;
