export class login {
  constructor(page) {
    this.page = page;
    //Selectors used for the login page
    this.emailAddressField = page.locator("input[data-qa='login-email']");
    this.passwordField = page.locator("input[type='password']");
    this.loginBtn = page.locator("button[data-qa='login-button']");
    //Data used for the login page
    this.userEmail = process.env.EMAIL_E2E;
    this.userPassword = process.env.PASSWORD_E2E;
    this.baseURL = process.env.BASE_URL_E2E;

  }
  async userLogin() {
    await this.page.goto(this.baseURL);

  }
}
