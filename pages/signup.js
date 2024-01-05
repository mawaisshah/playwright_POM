const faker = require("faker");
const baseURL = process.env.BASE_URL_E2E
export class signUp {
  constructor(page) {
    this.page = page;
    //Selectors used for the signUp page
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
    this.accountCreated = page.locator("//b[text()='Account Created!']");
    this.logoutBtn = page.locator("//a[contains(text(),'Logout')]");
    this.continueBtn = page.locator("a[data-qa='continue-button']");
    //Data used for the signUp page
    this.userNameText = faker.internet.userName();
    this.userEmailText = faker.internet.email();
    this.accountCreatedText = "Account Created!";
    this.logoutText = "Logout";
    this.signupText = "Signup / Login";
    this.registrationData = [
      "John1234",
      faker.random.number(31).toString(),
      faker.date.month(),
      faker.random.number({ min: 1950, max: 2002 }).toString(),
      faker.name.firstName(),
      faker.name.lastName(),
      faker.lorem.word(),
      faker.address.streetAddress(),
      faker.address.secondaryAddress(),
      "Australia",
      faker.address.state(),
      faker.address.city(),
      faker.address.zipCode(),
      faker.phone.phoneNumber(),
    ];
  }
  async signUpPage() {
    await this.page.goto(baseURL);
    await this.signUpBtn.click();
  }
  async userSignUp(name, email) {
    await this.userName.fill(name);
    await this.userEmail.fill(email);
    await this.signUpBtn2.click();
  }
  async registrationForm(userData) {
    await this.mrBtn.click();
    await this.password.fill(userData[0]);
    await this.day.selectOption({ label: userData[1] });
    await this.month.selectOption({ label: userData[2] });
    await this.year.selectOption({ label: userData[3] });
    await this.fName.fill(userData[4]);
    await this.lName.fill(userData[5]);
    await this.companyName.fill(userData[6]);
    await this.address1.fill(userData[7]);
    await this.address2.fill(userData[8]);
    await this.country.selectOption({ label: userData[9] });
    await this.state.fill(userData[10]);
    await this.city.fill(userData[11]);
    await this.zipCode.fill(userData[12]);
    await this.phoneNumber.fill(userData[13]);
    await this.submitBtn.click();
  }
}
