const faker = require("faker");
export class contactUs {
    constructor(page) {
        this.page = page;
        //Selectors used for the login page
        this.contactUsIcon = page.locator("//a[contains(.,'Contact us')]");
        this.name = page.locator("//input[@data-qa='name']");
        this.email = page.locator("//input[@data-qa='email']");
        this.subject = page.locator("//input[@data-qa='subject']");
        this.message = page.locator("//textarea[@class='form-control']");
        this.uploadFile = page.locator("input[name='upload_file']");
        this.Submit = page.locator("input[type='submit']");
        this.Success = page.locator("div.status.alert.alert-success");
        //Data used for the login page
        this.nameText = faker.internet.userName();
        this.emailText = faker.internet.email();
        this.subjectText = faker.lorem.word();
        this.messageText = faker.lorem.word();
        this.successText = "Success! Your details have been submitted successfully.";
    }
    async getInTouch() {
        await this.contactUsIcon.click();
        await this.name.fill(this.nameText);
        await this.email.fill(this.emailText);
        await this.subject.fill(this.subjectText);
        await this.message.fill(this.messageText);
    }
    async chooseFile() {
        await this.uploadFile.setInputFiles("D:/playwright_POM/read-csv.csv");
        // event listener
        this.page.once("dialog", (dialog) => {
            console.log(dialog.message);
            dialog.accept();
        });
        await this.Submit.click();
    }
};
