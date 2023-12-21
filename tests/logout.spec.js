import { test, expect } from "../plugins/fixtures";

test("Verify the user is able to logout from the site", async ({
  Signup,
  Login,
  Logout,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Logout.userLogout();
  await expect(Signup.signUpBtn).toHaveText(Signup.signupText);
});
