import { Given, When, Then } from "@wdio/cucumber-framework";
import logger from "../../helper/logger"
//retierment calculator

Given(/^user lunches the Securian Website$/, async function () {
  logger.info(`Execution has started...`)
  //await browser.url("https://www.securian.com/insights-tools/retirement-calculator.html");
  await browser.url(`${process.env.SECURIAN_URL}`)
  logger.info(`Navigated to Securian Retierment Calculator Webpage`)
  await expect(browser).toHaveTitle(
    "How Much to Save for Retirement | Securian Financial",
  );
  await browser.setTimeout({ implicit: 5000, pageLoad: 3000 });
  await browser.maximizeWindow();
  await browser.pause(3000);
});

When(/^user accepts cookies at securian weboage$/, async function () {
  let acceptCookies = await $("#onetrust-accept-btn-handler");
  await acceptCookies.click();
  await browser.pause(3000);
});

When(/^user enter the current age$/, async function () {
  let currentAge = await $("#current-age");
  await currentAge.setValue(`${process.env.CURRENT_AGE}`);
  await browser.pause(3000);
});

When(/^user enter the retirement age$/, async function () {
  let retirementAge = await $("#retirement-age");
  await retirementAge.setValue(`${process.env.RETIREMENT_AGE}`);
  await browser.pause(3000);
});

When(/^user enter the current annual income$/, async function () {
  let currentAnnualIncome = await $("#current-income");
  await currentAnnualIncome.click();
  await currentAnnualIncome.setValue(`${process.env.CURRENT_INCOME}`);
  await browser.pause(3000);
});

When(/^user enter the spouse's annual income$/, async function () {
  let spouseAnnualIncome = await $("#spouse-income");
  await spouseAnnualIncome.click();
  await spouseAnnualIncome.setValue(`${process.env.SPOUSE_INCOME}`);
  await browser.pause(3000);
});

When(/^user enter current retirement savings balance$/, async function () {
  let currentRetierementSaving = await $(
    "//input[@id='current-total-savings']",
  );
  await currentRetierementSaving.click();
  await currentRetierementSaving.setValue(`${process.env.CURRENT_RETIRMENT_SAVING}`);
  await browser.pause(3000);
});

When(
  /^user enter the currently saving each year for retirement$/,
  async function () {
    let rateOfIncrease = await $("//input[@id='current-annual-savings']");
    await rateOfIncrease.click();
    await rateOfIncrease.setValue(`${process.env.RATE_OF_INCRESE}`);
    await browser.pause(3000);
  },
);

When(
  /^user enter the rate of increase in your savings each year$/,
  async function () {
    let savingIncreseRate = await $("//input[@id='savings-increase-rate']");
    await savingIncreseRate.click();
    await savingIncreseRate.setValue(`${process.env.SAVING_INCRESE_RATE}`);
    await browser.pause(3000);
  },
);

When(/^user selects include Social Security benefits$/, async function () {
  let socialSecurityBenefits = await $("//label[@for='yes-social-benefits']");
  await socialSecurityBenefits.click();
  await browser.pause(3000);
});

When(/^user selects marital status$/, async function () {
  let maritalStatus = await $("//label[@for='married']");
  await maritalStatus.click();
  await browser.pause(3000);
});

When(/^user enter the social security override amount$/, async function () {
  let socialSecurityOverride = $("//input[@id='social-security-override']");
  await socialSecurityOverride.click();
  await socialSecurityOverride.setValue(`${process.env.SOCIAL_SECURITY}`);
  await browser.pause(3000);
});

When(/^user click on adjust default values$/, async function () {
  let defaultValuesModal = $("//a[@data-bs-target='#default-values-modal']");
  await defaultValuesModal.click();
  await browser.pause(3000);
});

When(
  /^user enter what other income will have during retirement$/,
  async function () {
    let additionalIncome = $("//input[@id='additional-income']");
    additionalIncome.click();
    additionalIncome.setValue(`${process.env.ADDITIONAL_INCOME}`);
    await browser.pause(3000);
  },
);

When(
  /^user enter how many years do you plan to depend on retirement income$/,
  async function () {
    let retirementlIncome = $("//input[@id='retirement-duration']");
    await retirementlIncome.click();
    await retirementlIncome.setValue(`${process.env.RETIREMENT_INCOME_DURATION}`);
    await browser.pause(3000);
  },
);

When(
  /^user selects post-retirement income increase with inflation$/,
  async function () {
    let includeInflation = $("//label[@for='include-inflation']");
    await includeInflation.click();
    await browser.pause(3000);
  },
);

When(/^user enter what is the expected inflation rate$/, async function () {
  let inflationRate = $("//input[@id='expected-inflation-rate']");
  await inflationRate.click();
  await inflationRate.setValue(`${process.env.INFLATION_RATE}`);
  await browser.pause(3000);
});

When(
  /^user enter final annual income available in each year of retirement$/,
  async function () {
    let retirementAnnualIncome = $("//input[@id='retirement-annual-income']");
    await retirementAnnualIncome.click();
    await retirementAnnualIncome.setValue(`${process.env.RETIREMENT_ANNUAL_INCOME}`);
    await browser.pause(3000);
  },
);

When(/^user enter pre-retirement investment return$/, async function () {
  let preRetiermentRoi = $("//input[@id='pre-retirement-roi']");
  await preRetiermentRoi.click();
  await preRetiermentRoi.setValue(`${process.env.PRE_RETIREMENT_INVESTMENT_RETURN}`);
  await browser.pause(3000);
});

When(/^user enter post-retirement investment return$/, async function () {
  let postRetiermentRoi = $("//input[@id='post-retirement-roi']");
  await postRetiermentRoi.click();
  await postRetiermentRoi.setValue(`${process.env.POST_RETIREMENT_INVESTMENT_RETURN}`);
  await browser.pause(5000);
});

Then(
  /^user click on save changes in default calculator values$/,
  async function () {
    let saveChanges = $("//button[contains(text(),'Save changes')]");
    await saveChanges.click();
    await browser.pause(3000);
  },
);

Then(/^user click on calculate$/, async function () {
  let calculate = $("//button[contains(text(),'Calculate')]");
  await calculate.click();
  await browser.pause(10000);
});

Then(/^user verify the amount calculated in result page$/, async function () {
  let result = $("//p[@id='result-message']");
  await result.getText();
  console.log("The result is = ",result);
  await browser.pause(3000);
});