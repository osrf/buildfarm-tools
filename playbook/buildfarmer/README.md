# What is the buildfarmer role?

As stated in the [onboarding guide](../../docs/onboarding.md):

> The buildfarmer is in charge of monitoring build regressions, [test regresions](./glossary.md#test-regression), [flaky tests](./glossary.md#flaky-tests) and general warnings on the buildfarm. As well, it reports any issue to the corresponding project team and tracks the status until it's resolved.

# How does the buildfarmer role work?

Every buildfarmer should follow the [priorities document](../../docs/priorities.md) for triaging issues.

TL;DR:

1. Keep the buildfarm up and running
2. Keep enough machines
3. Check build regressions
4. Check test regressions

For items 1 and 2 refer to the [priorities document](../../docs/priorities.md#priorities) items 1 and 2.

Items 3 and 4 are covered in [Looking for regressions](./looking_for_regressions.md).

To acomplish the above tasks, the buildfarmer has a set of tools and resources to work with. For more information refer to [Buildfarmer triage tools](./buildfarmer_triage_tools.md).

> Check the [workflow document](../../workflows/crola1702_2022-10-21.md) to get the big picture of the buildfarmer role.

After checking that the buildfarm is up and running, and that there are enough machines, the buildfarmer should check for regressions:  [Looking for regressions](./looking_for_regressions.md).

[Back :arrow_backward: ](../index.md)
