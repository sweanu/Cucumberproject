@Calculator
Feature: This feature will allow you do to all the calculator operations using parameters

  Scenario Outline: To add two numbers and validate the results are coming fine using parameters
    Given I have two numbers <num1> and <num2>
    When I add those two numbers
    Then I should get the result as <result>

    Examples: 
      | num1 | num2 | result |
      |    2 |    2 |      4 |
      |    3 |    3 |      6 |
      |   -7 |   -5 |    -12 |

  Scenario: This scenario will validate addition of multiple numbers
    Given I have below numbers
      | 1 |
      | 2 |
      | 3 |
      | 4 |
    When I add those numbers
    Then I should get the result as 10

  Scenario: To calculate the total bill amount
    Given I want to buy below items
      | Coffee | 20 |
      | Burger | 50 |
    When I purchase them
    Then I should get the bill amount as 70

  Scenario: To calculate the total bill amount using quantity
    Given I want to buy below items using quantity
      | Coffee | 2 | 20 |
      | Burger | 4 | 50 |
      | Pizza  | 1 | 30 |
    Then I should get the bill amount as 270
