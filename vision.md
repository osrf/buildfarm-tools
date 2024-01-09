# Vision of the buildfarmer payload
Subset of tasks defined to increase the quality of the ROS/Gazebo code by actively tracking and categorizing problems shipped with new code in a timely manner, making it easier for the development teams to:
* Fix most errors when they are introduced.
* Decide if an error that pops up in CI is a flaky test already existing in the codebase.
* Identify how often an error occurs and decide how to proceed.

## Internal process and rationale behind it

We already have a priority document explaining the order of relevancy of the possible errors, this is a new set of standards to define what we expect of the internal buildfarmer process:

1. Auto-log any error appearing in the nightlies, even when there is no one around. This could serve future investigations.
2. Any person can become a Buildfarmer Payload in case of necessity, this implies:
   * Basic duties should be easy to automate, even scripted.
   * Every Buildfarmer Payload must log/communicate internally any actions completed in the name of the role, so other folks can make progress on top of previous actions.
   * There will be a public log with investigations related to the Buildfarmer Payload duties.
   * Actions related to Buildfarmer Payload will be differentiated from actions related to the infra team, it is not resposability of the role to investigate infra issues, instead those will be escalated.
3. Core Team and community developers should be able to check if an existent error in his build it’s also happening in the nightlies CI.
4. Flaky tests will be categorized based on how often they appear
   * **~5%** Will not be reported.
   * **6% - 15%** Will be reported and announced in the weekly meetings. This category will be considered as known issues, as we won’t aim to disable those tests.
   * **15% - 100%** Will be reported, investigated internally, and eventually assigned someone from the development teams. Flaky tests falling in this category will be expected to be disabled 3 weeks after being assigned a developer to take a look or after being reported.
5. The buildfarmer team will keep track of all the tests disabled internally and generate a report monthly. That way any developer can track those and aim to fix the underlying issues.
6. As a new error gets investigated, make sure to close the reported issues/investigations ONLY after the issue is addressed in all combinations of job, platform, distribution where it was reported. Group errors in one a single issue if there's evidence they share an underlying reason (appeared after the same date, they occur in the same jobs, etc).
7. Reports to generate monthly:
   * Buildfarm average greenness per distro / platform.
   * Disabled tests.
   * Average time job per OS.
   * Instance rotation reports.
   * Jenkins metrics reports.

   Those will be created by the assigned Buildfarmer Payload and will be analyzed by different people in the team accordingly.


## Definitions

* Flaky test: Any test that, given the same code and environment, may throw both PASS and FAILED results.

* Known issue: Any reported flaky test existent in the development codebase that the buildfarmer team won’t push to disable. This could happen when the underlying issue has a low probability of appareance and/or requires a significant engineering effort of the developer teams to address.

