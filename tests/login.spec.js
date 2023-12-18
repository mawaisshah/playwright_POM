const { test, expect } = require("@playwright/test");
const { login } = require("../pages/login");
const { signUp } = require("../pages/signup");

test("Verify the user is able to login in to the site using valid credentials", async ({
  page,
}) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await expect(signUpPage.logoutBtn).toHaveText(signUpPage.logoutText);
});
