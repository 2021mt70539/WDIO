Feature: retierment Calc

    Feature Description
    its for the demo

    @securian
    Scenario: Navigate to the Securian Pre-retirement calculator Webpage

        Given user lunches the Securian Website
        When user accepts cookies at securian weboage
        When user enter the current age
        When user enter the retirement age
        When user enter the current annual income
        When user enter the spouse's annual income
        When user enter current retirement savings balance
        When user enter the currently saving each year for retirement
        When user enter the rate of increase in your savings each year

        When user selects include Social Security benefits
        When user selects marital status
        When user enter the social security override amount

        When user click on adjust default values
        When user enter what other income will have during retirement
        When user enter how many years do you plan to depend on retirement income
        When user selects post-retirement income increase with inflation
        When user enter what is the expected inflation rate
        When user enter final annual income available in each year of retirement

        When user enter pre-retirement investment return
        When user enter post-retirement investment return
        Then user click on save changes in default calculator values
        Then user click on calculate
        Then user verify the amount calculated in result page

