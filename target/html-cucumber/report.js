$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature is to test the simplilearn application for both success and failure scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the application for failure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_should_get_an_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the application for failure scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"abc@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Abc@xyz123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_should_get_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the application for failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get an error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "swe@xyz.com",
        "Dev@1234",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "simpl@xyz.com",
        "Learn@12",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "new@qwe.com",
        "Aqw@1234",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the application for failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"swe@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Dev@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_should_get_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the application for failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"simpl@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Learn@12\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_should_get_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the application for failure scenario using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"new@qwe.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Aqw@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginstepDef.i_should_get_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});