CREATE TABLE IF NOT EXISTS build_regression_reasons (
    reason TEXT NOT NULL,
    pattern TEXT NOT NULL,
    reason_type TEXT NOT NULL, -- LOG | SECTION
    PRIMARY KEY (reason, pattern)
)