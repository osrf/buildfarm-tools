# Buildfarmer Payload tasks process vision
The Buildfarmer Payload (also referred to as Buildfarmer) role is the subset of tasks defined to increase the quality of the ROS/Gazebo code by actively tracking and categorizing problems shipped with new code in a timely manner, making it easier for the development teams to:
* Fix most errors when they are introduced.
* Decide if an error that pops up in CI is a flaky test already existing in the codebase.
* Identify how often an error occurs and decide how to proceed.

Historically there was a role called "Build Cop" assigned to build/test regressions related to new code and a "Buildfarmer" involved in investigating build/test regressions related to changes in the Infrastructure of the project. Now that the project has grown in maturity, the new Buildfarmer Payload role will actively track both types of regressions, making sure that:
* CI nightlies are kept in a healthy state.
* Escalate problems to the infra or development teams, as needed.
* Follow up on error investigations.
* Generate metrics about the state of the buildfarms that are being tracked.


## Internal process and rationale behind it

We already have a priority document explaining the order of relevancy of the possible errors, this is a new set of standards to define what we expect of the internal buildfarmer process:

1. Auto-log any error appearing in the nightlies, even when there is no one around. This could serve future investigations.
2. Any person can be assigned to Buildfarmer Payload in case of necessity, this implies:
   * Basic duties should be easy to automate, even scripted.
   * Everyone assigned to Buildfarmer Payload must log/communicate internally any actions completed in the name of the role, so other folks can make progress on top of previous actions.
   * There will be a public log with investigations related to the Buildfarmer Payload duties.
   * Actions related to Buildfarmer Payload will be differentiated from actions related to the infra team, it is not the responsibility of this role to investigate infra issues, instead those will be escalated.
   * As of today, this role will be assigned to someone from the Infrastructure team. In the future, we want to make it possible for people in the community to volunteer to take it.
3. Core Team and community developers should be able to check if an existent error in their build is also happening in the nightlies CI.
4. Consecutive test failures priorities policy: Test errors occuring consecutively will be prioritized in terms of order of investigation. In the case of Gazebo jobs, the failing build will be retriggered to confirm if the error occurs a third time in a row. Errors happening three times in a row will be reported immediately to the development teams in case the buildfarmer investigation wasn't enough to solve it. Errors that have appeared at least three times in a 2 week window, will also be prioritized. Buildfarmer Payload scripts will prioritize accordingly new investigations based on this.
5. Flaky tests will be categorized based on how often they appear in a given month in a unstable builds.
   * **~7% or errors that happened only once** Will not be reported.
   * **7% - 20%** Will be reported and announced in the weekly meetings. This category will be considered as known issues, as we won’t aim to disable those tests.
   * **20% - 100%** Will be reported, investigated internally, and eventually assigned someone from the development teams. Flaky tests falling in this category will be expected to be disabled 3 weeks after being assigned a developer to take a look or after being reported.
6. The buildfarmer team will keep track of all the tests disabled internally and generate a report monthly. That way any developer can track those and aim to fix the underlying issues.
7. As a new error gets investigated, make sure to close the reported issues/investigations ONLY after the issue is addressed in all combinations of job, platform, distribution where it was reported. Group errors in one a single issue if there's evidence they share an underlying reason (appeared after the same date, they occur in the same jobs, etc).
8. Reports to generate monthly:
   * Buildfarm average greenness per distro / platform (TBD)
   * Total number of tests and skipped tests: Those can be obtained using the jenkins API, will be saved to our internal database.
   * Report of disabled tests: we currently don't have any tools to automate tracking this, as a first approach, we will rely on development teams to let the Buildfarmer Payload whenever tests are being disabled.
   * Report of flaky tests.
   * Average time job per OS.
   * Instance rotation reports, private reference: autoscaling_metrics_report.py
   * Time to response metrics: Issues reported, first time appeared, time to assign, time to close

   Those will be created by the person assigned to Buildfarmer Payload and will be analyzed by different people in the team accordingly.


## Definitions

* Flaky test: Any test that, given the same code and environment, may throw both PASS and FAILED results.

* Known issue: Any reported flaky test existent in the development codebase that the buildfarmer team won’t push to disable. This could happen when the underlying issue has a low probability of appareance and/or requires a significant engineering effort of the developer teams to address.

* Buildfarm team: Anyone from the infrastructure or development teams that works directly or indirectly towards keeping the buildfarms in a healthy state.

* Development teams: ROS team and Gazebo team, people from the community actively working on any of these two projects.