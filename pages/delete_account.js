exports.deleteAcc = class deleteAcc {
  constructor(page) {
    this.page = page;
    //Selectors used for the login page
    this.deleteAccBtn = page.locator("//a[contains(.,'Delete Account')]");
    this.deleteLabel = page.locator("//b[text()='Account Deleted!']");
    //Data used for the login page
    this.deleteText = "Account Deleted!";
  }
  async deleteUser() {
    await this.deleteAccBtn.click();
  }
};
