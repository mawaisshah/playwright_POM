const { test, expect } = require("@playwright/test");
const { signUp } = require("../pages/signup");

test("Verify the user is able to register on the site", async ({ page }) => {
  const signUpPage = new signUp(page);
  await signUpPage.signUpPage();
  await signUpPage.userSignUp(
    signUpPage.userEmailText,
    signUpPage.userEmailText
  );
  await signUpPage.registrationForm(signUpPage.registrationData);
  await expect(signUpPage.accountCreated).toHaveText(
    signUpPage.accountCreatedText
  );
  await signUpPage.continueBtn.click();
  await expect(signUpPage.logoutBtn).toHaveText(signUpPage.logoutText);
});
