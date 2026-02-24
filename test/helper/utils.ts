class Util {

    /*
     * Clicks on a web element after waiting for it to be displayed.
     */

    public async clickElement(selector: string): Promise<void> {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 5000 });
        await element.click();
    }

    /*
     * Retrieves visible text from a web element.
     */

    public async getText(selector: string,timeout: number = 10000): Promise<string> {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        return await element.getText();
    }

     /*
     * Enters text into an input field.
     */

    public async setValue(selector: string,value: string,timeout: number = 10000): Promise<void> {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        await element.setValue(value);
    }
}

export default new Util();