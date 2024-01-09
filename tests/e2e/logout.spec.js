import { test, expect } from "../../plugins/e2e_helpers";

test("Verify the user is able to logout from the site", async ({
  Signup,
  Logout,
}) => {
  await Signup.signUpPage();
  // await Login.userLogin(Login.userEmail, Login.userPassword);
  await Logout.userLogout();
  await expect(Signup.signUpBtn).toHaveText(Signup.signupText);
});
