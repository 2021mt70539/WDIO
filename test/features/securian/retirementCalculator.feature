
Feature: Securian Retirement Calculator

    Feature Description
    Testcases for Securian Retirement Calculator

    Background:
        Given user lunches the securian retirement calculator

    @regression
    Scenario: Submit securian retirement calculator with only required fields
        When user accepts cookies at securian webpage
        When user enters all required fields
        When user click on calculate button
        Then user verify the amount calculated in result page

    @negative @regression
    Scenario: User does not enter requried fields
        When user accepts cookies at securian webpage
        When user click on calculate button
        Then user should see an error message

    @regression
    Scenario: Submit securian retirement calculator with social security income
        When user accepts cookies at securian webpage
        When user enters all required fields
        When user selects social security as yes
        Then user enters additional social security fields
        When user click on calculate button

    @regression
    Scenario: Submit securian retirement calculator with default calculator values
        When user accepts cookies at securian webpage
        When user enters all required fields
        When user click on adjust default values link
        When user enters default calculator values
        Then user click on save changes
        Then user click on calculate button