# Add a new ROS Distribution

In buildfarm-tools adding a ROS ditribution implies:
1. Add new jobs to [`buildfarm-tools-private/common.py`](https://github.com/osrf/buildfarm-tools-private/blob/main/common.py) (e.g., https://github.com/osrf/buildfarm-tools-private/pull/60)
2. Update [`buildfarm-tools/ROS2.md`](https://github.com/osrf/buildfarm-tools/blob/main/ROS2.md) dashboard (https://github.com/osrf/buildfarm-tools/pull/147/)
3. Update [`buildfarm-tools/database/scripts/lib/job_priorities.csv`](https://github.com/osrf/buildfarm-tools/blob/main/database/scripts/lib/job_priorities.csv) (e.g., https://github.com/osrf/buildfarm-tools/pull/148). Steps to follow:
    1. Manually add Kilted jobs to [Buildfarm Triage Sheet](https://docs.google.com/spreadsheets/d/1gX7Hw_aVsI4U05i2-NxCY66a4CmRy1Yyb6dokK5QtMg/edit?gid=1789704531#gid=1789704531)
    2. Update priorities in the sheet
    3. Copy priorities from the sheet to the csv file
    4. Fix the format of pasted elements to be in the same format as the csv file
        * Run `awk '{print $1 "," $NF}' job_priorities.csv > job_priorities_new.csv`
        * Check that `job_priorities_new.csv` has the correct format and then replace original file with `mv job_priorities_new.csv job_priorities.csv`
