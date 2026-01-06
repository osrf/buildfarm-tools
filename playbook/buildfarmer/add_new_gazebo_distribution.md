# Add a new Gazebo Distribution

In buildfarm-tools adding a new Gazebo ditribution implies:
1. Add new collection to [`buildfarm-tools-private/common.py`](https://github.com/osrf/buildfarm-tools-private/blob/main/common.py) (e.g., https://github.com/osrf/buildfarm-tools-private/pull/66)
2. [Run Update Gazebo Dashboard GitHub Action](https://github.com/osrf/buildfarm-tools-private/actions/workflows/updateGzDashboard.yml) 
3. Update [`buildfarm-tools/database/scripts/lib/job_priorities.csv`](https://github.com/osrf/buildfarm-tools/blob/main/database/scripts/lib/job_priorities.csv) (e.g., https://github.com/osrf/buildfarm-tools/pull/148). Steps to follow:
    1. Copy the output of `print_gz_collections` function from [`buildfarm-tools-private/common.py`](https://github.com/osrf/buildfarm-tools-private/blob/main/common.py) to [Buildfarm Triage Sheet](https://docs.google.com/spreadsheets/d/1gX7Hw_aVsI4U05i2-NxCY66a4CmRy1Yyb6dokK5QtMg/edit?gid=743426324#gid=743426324)
        * In the buildfarm-tools-private folder, run the command: `python3 -c 'import common; common.print_gz_collections()' | xclip -selection clipboard`. This will allow you to just paste into the browser the columns: Job, Collection and OS.
    2. Update the collection penalization named function via Data > Named functions > Collection Penalization (edit). Update the formula definition to bump the penalization of a job being part of a specific collection (e.g., harmonic jobs have less priority, so they have more penalization).
    3. Copy priorities from the sheet to the csv file (the first column should be the job name and the last one the job priority).
    4. Fix the format of pasted elements to be in the same format as the csv file
        * Run `awk '{print $1 "," $NF}' job_priorities.csv > job_priorities_new_gazebo.csv`
        * Check that `job_priorities_new_gazebo.csv` has the correct format and then replace the gazebo contents of the original file with the contents of the new file.
