exports.login = class login {
  constructor(page) {
    this.page = page;
    //Selectors used for the login page
    this.emailAddressField = page.locator("input[data-qa='login-email']");
    this.passwordField = page.locator("input[type='password']");
    this.loginBtn = page.locator("button[data-qa='login-button']");
    //Data used for the login page
    this.userEmail = "John19@gamil.com";
    this.userPassword = "John1234"
  }
  async userLogin(email, password) {
    await this.emailAddressField.fill(email);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }
}
