exports.signUp = class signUp {
  constructor(page) {
    this.page = page;
    this.signUpBtn = page.locator("//a[contains(.,'Signup / Login')]");
    this.userName = page.locator("//input[@placeholder='Name']");
    this.userEmail = page.locator("(//input[@type='email'])[2]");
    this.signUpBtn2 = page.locator("button[data-qa='signup-button']");
    this.mrBtn = page.locator("#id_gender1");
    this.password = page.locator("input[type='password']");
    this.day = page.locator("#days");
    this.month = page.locator("#months");
    this.year = page.locator("#years");
    this.fName = page.locator("#first_name");
    this.lName = page.locator("#last_name");
    this.companyName = page.locator("#company");
    this.address1 = page.locator("#address1");
    this.address2 = page.locator("#address2");
    this.country = page.locator("#country");
    this.state = page.locator("#state");
    this.city = page.locator("#city");
    this.zipCode = page.locator("#zipcode");
    this.phoneNumber = page.locator("#mobile_number");
    this.submitBtn = page.locator("(//button[@type='submit'])[1]");
  }
  async signUpPage() {
    await this.page.goto("/");
    await this.signUpBtn.click();
  }
  async userSignUp() {
    await this.userName.fill("John");
    await this.userEmail.fill("John6@gamil.com");
    await this.signUpBtn2.click();
  }
  async registrationForm() {
    await this.mrBtn.click();
    await this.password.fill("John1234");
    await this.day.selectOption({ label: "20" });
    await this.month.selectOption({ label: "October" });
    await this.year.selectOption({ label: "1998" });
    await this.fName.fill("John");
    await this.lName.fill("Wick");
    await this.companyName.fill("Chapter4");
    await this.address1.fill("625 Carson Street");
    await this.address2.fill("625 Carson Street");
    await this.country.selectOption({ label: "Australia" });
    await this.state.fill("Kentucky");
    await this.city.fill("Cincinnati");
    await this.zipCode.fill("45202");
    await this.phoneNumber.fill("8592509017");
    await this.submitBtn.click();
  }
};
