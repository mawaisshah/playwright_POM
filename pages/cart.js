const fs = require("fs").promises;
export class cart {
  constructor(page) {
    this.page = page;
    //Selectors used for the login page
    this.viewCartLink = page.locator("//u[text()='View Cart']");
    this.checkoutBtn = page.locator("a.btn.btn-default.check_out");
    this.placeOrderBtn = page.locator("//a[contains(text(),'Place Order')]");
    this.nameOnCardField = page.locator("//input[@data-qa='name-on-card']");
    this.cardNumberField = page.locator(
      "//input[@class='form-control card-number']"
    );
    this.cvcField = page.locator("//input[@class='form-control card-cvc']");
    this.monthField = page.locator("//input[@data-qa='expiry-month']");
    this.yearField = page.locator("//input[@data-qa='expiry-year']");
    this.confirmBtn = page.locator("//button[@data-qa='pay-button']");
    this.orderPlacedLabel = page.locator("//b[text()='Order Placed!']");
    this.downloadInvoiceBtn = page.locator(
      "//a[contains(text(),'Download Invoice')]"
    );
    //Data used for the login page
    this.nameOnCardText = "John Wick";
    this.cardNumberText = "4242424242424242";
    this.cvcText = "123";
    this.monthText = "1";
    this.yearText = "2024";
    this.orderPlacedText = "Order Placed!";
  }
  async proceedToCheckout() {
    await this.viewCartLink.click();
    await this.checkoutBtn.click();
    await this.placeOrderBtn.click();
    await this.nameOnCardField.fill(this.nameOnCardText);
    await this.cardNumberField.fill(this.cardNumberText);
    await this.cvcField.fill(this.cvcText);
    await this.monthField.fill(this.monthText);
    await this.yearField.fill(this.yearText);
    await this.confirmBtn.click();
  }
  async downloadInvoice() {
    await this.downloadInvoiceBtn.click();
    const expectedFilePath = "C:/Users/DELL/Downloads/invoice.txt";
    let fileExists;
    try {
      await fs.access(expectedFilePath);
      fileExists = true;
    } catch (error) {
      fileExists = false;
    }
    return fileExists;
  }
};