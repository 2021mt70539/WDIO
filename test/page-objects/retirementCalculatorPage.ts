
import utils from "../helper/utils"
import testdata from "/webdriverIO/data/constants.json";
import logger from "../helper/logger"


class retirementCalculatorPage {

    // Selectors
    private cookieBtn = "#onetrust-accept-btn-handler";
    private currentAge = "#current-age";
    private retirementAge = "#retirement-age";
    private currentIncome = "#current-income";
    private spouseIncome = "#spouse-income";
    private currentSavings = "#current-total-savings";
    private annualSavings = "#current-annual-savings";
    private savingsIncrease = "#savings-increase-rate";
    private calculateBtn = "//button[contains(text(),'Calculate')]";
    private resultMessage = "#result-message";
    private errorMessage = "#calculator-input-alert-desc";

    private socialSecurityIncomeBtn = "//label[@for='yes-social-benefits']"
    private maritalStatusBtn = "//label[@for='married']"
    private securityOverrideAmount = "//input[@id='social-security-override']"

    public async launch(): Promise<void> {
        try {
            logger.info(`Execution has started...`)
            await browser.url(`${process.env.SECURIAN_URL}`)
            logger.info(`Navigated to Securian Retierment Calculator Webpage`)
            await expect(browser).toHaveTitle(
                "How Much to Save for Retirement | Securian Financial",
            );
            await browser.setTimeout({ implicit: 5000, pageLoad: 3000 });
            await browser.maximizeWindow();
        }
        catch (error) {
            logger.error(`Error while lunching browser: ${error}`);
            throw error;
        }
    }


    public async acceptCookies(): Promise<void> {
        try {
            utils.clickElement(this.cookieBtn);
            logger.info(`User Accepted Cookies`)
        }
        catch (error) {
            logger.error(`Error while accepting cookies: ${error}`);
            throw error;
        }
    }
    public async enterRequriedDetails(): Promise<void> {
        try {
            utils.setValue(this.currentAge, testdata.currentAge)
            logger.info(`User Enter Current Age`)

            utils.setValue(this.retirementAge, testdata.retirementAge)
            logger.info(`User Enter Retirement Age`)

            utils.clickElement(this.currentIncome);
            logger.info(`User Clicks on Current Income Field`)

            utils.setValue(this.currentIncome, testdata.annualIncome)
            logger.info(`User Enters Current Income`)

            utils.clickElement(this.spouseIncome);
            logger.info(`User Clicks on Spouse Income Field`)

            utils.setValue(this.spouseIncome, testdata.spouseAnnualIncome)
            logger.info(`User Entered Spouse Annual Income`)

            utils.setValue(this.currentSavings, testdata.currentSavings)
            logger.info(`User Entered Current Saving`)

            utils.setValue(this.annualSavings, testdata.currentContribution)
            logger.info(`User Entered Annual Saving`)

            utils.setValue(this.savingsIncrease, testdata.contributionIncrease)
            logger.info(`User Entered Contribution Increase Rate`)

        }
        catch (error) {
            logger.error(`Error while Entering Requried Details: ${error}`);
            throw error;
        }

    }

    public async clickCalculate(): Promise<void> {
        try {
            utils.clickElement(this.calculateBtn);
            logger.info(`User clicked on Calculate Button`)
        }
        catch (error) {
            logger.error(`Error while clicking Cacaulate Button: ${error}`);
            throw error;
        }
    }

    public async getResult(): Promise<void> {
        try {
            let result = utils.getText(this.resultMessage);
            console.log("The result is = ", result);
        }
        catch (error) {
            logger.error(`Error while fetching result Message: ${error}`);
            throw error;
        }
    }

    public async errMessage(): Promise<void> {
        try {
            let errorMsg = utils.getText(this.errorMessage);
            console.log("The error message is = ", errorMsg);
        }
        catch (error) {
            logger.error(`Error while fetching error Message: ${error}`);
            throw error;
        }
    }

    public async clickSocialSecurity(): Promise<void> {
        try {
            utils.clickElement(this.socialSecurityIncomeBtn);
            logger.info(`User clicked on socialSecurityIncome Button`)
        }
        catch (error) {
            logger.error(`Error while clickSocialSecurity Button : ${error}`);
            throw error;
        }
    }

    public async enterSocialSecurityDetials(): Promise<void> {
        try {
            utils.clickElement(this.maritalStatusBtn)
            logger.info(`User clicked on maritalStatus Button`)
            utils.setValue(this.securityOverrideAmount, testdata.socialSecurityOverride)
            logger.info(`User Entered securityOverrideAmount`)
        }
        catch (error) {
            logger.error(`Error while entering enterSocialSecurityDetials: ${error}`);
            throw error;
        }
    }
}

export default new retirementCalculatorPage();