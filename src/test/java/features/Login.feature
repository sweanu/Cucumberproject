@Browser
Feature: This feature is to test the simplilearn application for both success and failure scenario

  Background: 
    Given I have launched the application
    And I click on login link

  @WIP
  Scenario: Validate the application for success scenario
    When I enter the username
    And I enter the password
    And I click the login button
    Then I should land on home page

  @Sanity
  Scenario: Validate the application for failure scenario
    When I enter the username
    And I enter the password
    And I click the login button
    Then I should get an error message

  @Sanity
  Scenario: Validate the application for failure scenario using parameters
    When I enter the username as "abc@xyz.com"
    And I enter the password as "Abc@xyz123"
    And I click the login button
    Then I should get an error message as "The email or password you have entered is invalid."

  @Regression @Sanity
  Scenario Outline: Validate the application for failure scenario using parameters
    When I enter the username as "<Username>"
    And I enter the password as "<Password>"
    And I click the login button
    Then I should get an error message as "<Error>"

    Examples: 
      | Username      | Password | Error                                              |
      | swe@xyz.com   | Dev@1234 | The email or password you have entered is invalid. |
      | simpl@xyz.com | Learn@12 | The email or password you have entered is invalid. |
      | new@qwe.com   | Aqw@1234 | The email or password you have entered is invalid. |
