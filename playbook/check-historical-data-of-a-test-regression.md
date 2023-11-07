# Check historical data of a test regression

This playbook will help you to check historical data of a test regression.

## Steps

First, move to the `database/scripts` folder.

### Check if the test is reported as a known issue

```bash
./sql_run.sh is_known_issue.sql "<test-name>"
```

### Check first or last 25 occurrences

```bash
./sql_run.sh errors_get_first_time.sql "<test-name>" # First 25
./sql_run.sh errors_get_last_ones.sql "<test-name>" # Last 25
```
### Check flakiness ratio in a time range

```bash
./sql_run.sh calculate_flakiness_jobs.sql "<test-name>" "<time-range>" # Replace with the name of the test and the time range (e.g., 30 days) you want to check
```

## Example

Get historical data of `EntityFeatureMapFixture.AddCastRemoveEntity` test:

```bash
./sql_run.sh errors_get_first_time.sql "EntityFeatureMapFixture.AddCastRemoveEntity"
```

<details>
<summary>
Output:
</summary>

```
error_name|package_name|job_name|build_number|build_datetime|node_name
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|90|2021-03-30 11:57:08|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|91|2021-03-31 11:57:11|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|92|2021-04-06 11:57:07|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|93|2021-04-17 11:57:07|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|3|2021-04-26 20:48:20|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|4|2021-04-27 18:57:25|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|94|2021-04-30 11:57:09|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|9|2021-05-03 18:28:01|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|10|2021-05-06 01:36:41|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|11|2021-05-12 18:36:10|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|95|2021-05-13 11:57:08|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|12|2021-05-17 18:36:09|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|96|2021-05-18 11:57:08|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|98|2021-05-21 16:41:32|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|14|2021-05-24 18:36:07|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|99|2021-05-25 11:57:10|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|100|2021-05-28 11:57:09|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|15|2021-05-28 18:36:08|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|101|2021-06-12 11:57:05|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|102|2021-06-17 11:57:08|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|16|2021-06-17 18:37:11|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|103|2021-06-23 11:57:09|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ci-win|104|2021-06-24 11:57:07|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|17|2021-06-26 18:36:09|
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ign_gazebo-ign-5-win|18|2021-06-30 18:36:06|

```

</details>


Get historical data of `EntityFeatureMapFixture.AddCastRemoveEntity` test:

```bash
./sql_run.sh errors_get_last_ones.sql "EntityFeatureMapFixture.AddCastRemoveEntity"
```

<details>
<summary>
Output:
</summary>

```
error_name|package_name|job_name|build_number|build_datetime|node_name
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|338|2023-11-06 16:06:00.585000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|337|2023-11-02 15:12:09.053000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|336|2023-10-31 18:41:34.235000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|335|2023-10-27 19:06:09.671000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|334|2023-10-23 18:06:02.503000|mac-six.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|333|2023-10-19 17:06:09.818000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|332|2023-10-15 17:06:00.579000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|331|2023-10-11 16:19:00.494000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|330|2023-10-10 13:37:45.612000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|329|2023-10-09 21:32:43.827000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|328|2023-10-09 16:06:16.239000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|327|2023-10-05 15:31:02.172000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|326|2023-10-04 15:12:07.965000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|325|2023-10-02 23:57:38.177000|mac-six.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|324|2023-10-02 23:51:25.562000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|323|2023-09-29 16:06:07.045000|mac-eight.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|319|2023-09-20 03:06:16.013000|mac-four.ventura
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo6-homebrew-amd64|206|2023-05-24 10:06:34.650000|mac-eight.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-gz-sim7-homebrew-amd64|92|2023-05-23 08:18:50.444000|mac-six.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-gz-sim7-homebrew-amd64|91|2023-05-22 16:05:10.350000|mac-six.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo6-homebrew-amd64|173|2023-01-05 14:14:49.410000|mac-ultron.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo6-homebrew-amd64|172|2023-01-05 09:48:34.221000|mac-omnidroid.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-ign-gazebo6-homebrew-amd64|171|2023-01-02 12:28:11.610000|mac-ultron.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-gz-sim7-homebrew-amd64|45|2023-01-02 12:16:21.448000|mac-glados.bigsur
EntityFeatureMapFixture.AddCastRemoveEntity|EntityFeatureMapFixture|ignition_gazebo-ci-gz-sim7-homebrew-amd64|44|2023-01-02 10:51:29.526000|mac-omnidroid.bigsur

```

</details>


Get flakiness ratio of `EntityFeatureMapFixture.AddCastRemoveEntity` test in the last 30 days:

```bash
./sql_run.sh calculate_flakiness_jobs.sql "EntityFeatureMapFixture.AddCastRemoveEntity" "30 days"
```

<details>
<summary>
Output:
</summary>

```
job_name|last_fail|first_fail|build_count|failure_count|failure_percentage
ignition_gazebo-ci-ign-gazebo3-homebrew-amd64|2023-11-06|2023-10-09|11|11|100.0
```

</details>




