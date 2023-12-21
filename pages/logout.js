export class logout {
    constructor(page) {
      this.page = page;
      //Selectors used for the login page
      this.logoutBtn = page.locator("//a[contains(.,'Logout')]");
    }
    async userLogout() {
      await this.logoutBtn.click();
    }
  }
  