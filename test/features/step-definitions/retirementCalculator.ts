import { Given, When, Then } from "@wdio/cucumber-framework";
import retirementCalculatorPage from "../../page-objects/retirementCalculatorPage";
import adjustDefaultValues from "../../page-objects/adjustDefaultValues";

//retierment calculator

Given(/^user lunches the securian retirement calculator$/, async function () {

  retirementCalculatorPage.launch()

});

When(/^user accepts cookies at securian webpage$/, async function () {
  retirementCalculatorPage.acceptCookies()
});

When(/^user enters all required fields$/, async function () {

  retirementCalculatorPage.enterRequriedDetails()

});

When(/^user click on calculate button$/, async function () {
  retirementCalculatorPage.clickCalculate()
});

Then(/^user verify the amount calculated in result page$/, async function () {
  retirementCalculatorPage.getResult()
});

Then(/^user should see an error message$/, async function () {
  let errorMsg = retirementCalculatorPage.errMessage()
  console.log("The error message is = ", errorMsg);
});

When(/^user selects social security as yes$/, async function () {
  retirementCalculatorPage.clickSocialSecurity()
});

Then(/^user enters additional social security fields$/, async function () {

  retirementCalculatorPage.enterSocialSecurityDetials()
});

When(/^user click on adjust default values link$/, async function () {

  adjustDefaultValues.adjustDefaultValueClick()
});

When(/^user enters default calculator values$/, async function () {
  adjustDefaultValues.enteradjustDefaultValue()
});

Then(/^user click on save changes$/, async function () {
  adjustDefaultValues.adjustDefaultValueSaveClick()
});