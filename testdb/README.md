# Nuclearsandwich's experimental test report database scripts.

Some scripts for generating and querying a local flat-file database of Jenkins test reports and build logs.


## Database "schema"

The root of the test data base defaults to `$HOME/osrf/testdb` but can be configured with the `TESTDB_DIR` environment variable.
Within the root directory are domain directories with names matching the Jenkins domain names such as `build.osrfoundation.org` and `ci.ros2.org`.
Within each domain directory are job directories with names matching the Jenkins job name such as `ign_gui_ci-win` and `nightly_linux-rhel_release`.
within each job directory are build directories with names matching the Jenkins build number such as `1948` or `810`.
Within each build directory are files related to that build, most commonly `testreport.json.gz` which contains a compresed json document with the Jenkins test report results.
Build directories may also contain a `build.txt` file containing the plaintext console log for the job or other files in the future.

Example layout:
```
TESTDB_DIR/
  build.osrfoundation.org/
  ...
  ci.ros2.org/
    nightly_linux_debug/
      1848/...
      1849/...
      ...
      1948/
        testreport.json.gz
        build.txt
    nightly_linux_release/
```

## Scripts

These scripts are written in Ruby because they weren't ever really intended to leave my machine.
If this project matures and these scripts start gaining wider adoption and Ruby is a barrier to contribution I'll rewrite them.
Probably in awk.

Any relatively recent Ruby interpreter (>=2.0.0) and standard library should be sufficient to run the scripts.
If a performant JSON parser is installed (Simdjson or Oj, in Ruby) they will be used instead of the stdlib parser.
However processing time is not egregious without the performant JSON parsers so they are not required.
