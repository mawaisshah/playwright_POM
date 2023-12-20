const { test, expect } = require("@playwright/test");
const { login } = require("../pages/login");
const { signUp } = require("../pages/signup");
const { logout } = require("../pages/logout");

test("Verify the user is able to logout from the site", async ({ page }) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  const logoutPage = new logout(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await logoutPage.userLogout();
  await expect(signUpPage.signUpBtn).toHaveText(signUpPage.signupText);
});
