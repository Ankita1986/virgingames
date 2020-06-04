Feature: Login functionality
  As a User I want to login into Virgingames website


  Scenario Outline: User should not login successfully with invalid credentials
    Given I am on Virgingames homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"

    Examples:
      | email                | password   | errorMessage                                                              |
      | abc123@yahoomail.com | Tajmahal06 | Please try again, your username/email or password has not been recognised |
      | abc1@yahoomail.com   | Tajmahal07 | Please try again, your username/email or password has not been recognised |
      | abc12@yahoomail.com  | Tajmahal08 | Please try again, your username/email or password has not been recognised |
