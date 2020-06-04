$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/virgingames/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As a User I want to login into Virgingames website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on Virgingames homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 14,
      "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abc123@yahoomail.com",
        "Tajmahal06",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 15,
      "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abc1@yahoomail.com",
        "Tajmahal07",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 16,
      "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "abc12@yahoomail.com",
        "Tajmahal08",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 17,
      "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6846488800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on Virgingames homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email \"abc123@yahoomail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"Tajmahal06\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnVirgingamesHomepage()"
});
formatter.result({
  "duration": 114364000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 24285860800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@yahoomail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 249262700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tajmahal06",
      "offset": 18
    }
  ],
  "location": "LoginTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 162971300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 117655400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 32
    }
  ],
  "location": "LoginTestSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 259451600,
  "status": "passed"
});
formatter.after({
  "duration": 629362600,
  "status": "passed"
});
formatter.before({
  "duration": 5705848200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on Virgingames homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email \"abc1@yahoomail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"Tajmahal07\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnVirgingamesHomepage()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 24153251500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1@yahoomail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 225633300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tajmahal07",
      "offset": 18
    }
  ],
  "location": "LoginTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 156501800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 117694300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 32
    }
  ],
  "location": "LoginTestSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 237486100,
  "status": "passed"
});
formatter.after({
  "duration": 648919800,
  "status": "passed"
});
formatter.before({
  "duration": 5658874000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-login-successfully-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on Virgingames homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email \"abc12@yahoomail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"Tajmahal08\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnVirgingamesHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 23839105300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12@yahoomail.com",
      "offset": 15
    }
  ],
  "location": "LoginTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 229642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tajmahal08",
      "offset": 18
    }
  ],
  "location": "LoginTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 142076900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 111625200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 32
    }
  ],
  "location": "LoginTestSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 298604900,
  "status": "passed"
});
formatter.after({
  "duration": 642691900,
  "status": "passed"
});
});