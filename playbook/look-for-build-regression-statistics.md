# Look for build regression statistics 

This play will help you gather statistics about build regressions in a job.

> **Note**
> Unlike other plays, this one uses different set of tools:

## Steps

Using testdb you can get historical data between builds in a job. This way, you can compare a passing and a failing build.

First, move to the `testdb` folder.

Then, set the domain and job you want to check via environment variables, and fetch the logs:

```bash
export domain=[domain]
export job=[job]

./fetch.rb -d $domain -j $job -c [build-count] buildlog
```

* build-count is the number of logs you want to fetch

> **Note**
> This script will download log files to you system in `~/osrf/testdb` folder

### Check how many times a pattern has appeared in the logs

Use grep to check how many times a pattern has appeared in the downloaded logs:

```bash
./grep.rb -d $domain -j $job -n [build-count] "[PATTERN]"
```

### Differences between dependencies

**In ROS builds** (not supported for Gazebo), you can compare the log of a failing build with a passing build using `comparebuildrepos.rb` or `comparepip.py`

```bash
./comparebuildrepos.rb -d $domain -j $job -b [base-build-number] -c [compare-build-number]
./comparepip.py -d $domain -j $job -b [base-build-number] -c [compare-build-number]
```

* `comparebuildrepos.rb` will show the difference between the repository versions
* `comparepip.py` will show the difference between the pip packages


