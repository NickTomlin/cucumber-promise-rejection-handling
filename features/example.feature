Feature: Exception handling inside Cucumber step definitions

  Scenario: Promise rejection inside a step definition
    When I return a rejected promise
    Then The scenario should fail gracefully

  Scenario: A passing test
    Then I experience great success
