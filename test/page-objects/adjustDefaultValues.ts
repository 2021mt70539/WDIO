
import utils from "../helper/utils"
import testdata from "/webdriverIO/data/constants.json";
import logger from "../helper/logger"


class adjustDefaultValuesPage {

    // Selectors


    private adjustDefaultValueLink = "//a[@data-bs-target='#default-values-modal']"
    private otherRetirementlIncome = "//input[@id='additional-income']"
    private yearOnRetirementIncome = "//input[@id='retirement-duration']"
    private includeInflation = "//label[@for='include-inflation']"
    private inflationRate = "//input[@id='expected-inflation-rate']"
    private retirementAnnualIncome = "//input[@id='retirement-annual-income']"
    private preRetiermentRoi = "//input[@id='pre-retirement-roi']"
    private postRetiermentRoi = "//input[@id='post-retirement-roi']"
    private adjustDefaultValueSaveClickBtn = "//button[@onclick='savePersonalizedValues();']"



    public async adjustDefaultValueClick(): Promise<void> {
        try {
            utils.clickElement(this.adjustDefaultValueLink);
            logger.info(`User Clicked on adjustDefaultValueLink`)
        }
        catch (error) {
            logger.error(`Error while clicking adjustDefaultValueLink: ${error}`);
            throw error;
        }
    }

    public async enteradjustDefaultValue(): Promise<void> {
        try {
            utils.clickElement(this.otherRetirementlIncome);
            logger.info(`User Clicked on otherRetirementlIncome`)
            utils.setValue(this.otherRetirementlIncome, testdata.otherIncome)
            logger.info(`User entered otherRetirementlIncome`)

            utils.clickElement(this.yearOnRetirementIncome);
            logger.info(`User Clicked on yearOnRetirementIncome`)
            utils.setValue(this.yearOnRetirementIncome, testdata.retirementYears)
            logger.info(`User entered yearOnRetirementIncome`)

            utils.clickElement(this.includeInflation);
            logger.info(`User Clicked on includeInflation`)

            utils.clickElement(this.inflationRate);
            logger.info(`User Clicked on inflationRate`)
            utils.setValue(this.inflationRate, testdata.inflationRate)
            logger.info(`User entered inflationRate`)

            utils.clickElement(this.retirementAnnualIncome);
            logger.info(`User Clicked on retirementAnnualIncome`)
            utils.setValue(this.retirementAnnualIncome, testdata.incomeReplacement)
            logger.info(`User entered retirementAnnualIncome`)

            utils.clickElement(this.preRetiermentRoi);
            logger.info(`User Clicked on preRetiermentRoi`)
            utils.setValue(this.preRetiermentRoi, testdata.preRetirementReturn)
            logger.info(`User entered preRetiermentRoi`)

            utils.clickElement(this.postRetiermentRoi);
            logger.info(`User Clicked on postRetiermentRoi`)
            utils.setValue(this.postRetiermentRoi, testdata.postRetirementReturn)
            logger.info(`User entered postRetiermentRoi`)
        }
        catch (error) {
            logger.error(`Error while entering adjustDefaultValue: ${error}`);
            throw error;
        }

    }

    public async adjustDefaultValueSaveClick(): Promise<void> {
        try {
            utils.clickElement(this.adjustDefaultValueSaveClickBtn);
            logger.info(`User Clicked on adjustDefaultValueSave Button`)
        }
        catch (error) {
            logger.error(`Error while clicking adjustDefaultValueSave Button: ${error}`);
            throw error;
        }
    }
}

export default new adjustDefaultValuesPage();