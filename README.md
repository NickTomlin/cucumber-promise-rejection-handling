Minimal example of cucumber handling rejections thrown in promises.

TLDR; It does just fine.

```shell
npm i
npm t

Feature: Exception handling inside Cucumber step definitions

  Scenario: Promise rejection inside a step definition
  ✖ When I return a rejected promise
  - Then The scenario should fail gracefully

  Scenario: A passing test
  ✓ Then I experience great success

Failures:

1) Scenario: Promise rejection inside a step definition - features/example.feature:3
   Step: When I return a rejected promise - features/example.feature:4
   Step Definition: features/definitions.js:11
   Message:
     Purposeful Rejection

2 scenarios (1 failed, 1 passed)
3 steps (1 failed, 1 skipped, 1 passed)
0m00.002s
npm ERR! Test failed.  See above for more details.
```
