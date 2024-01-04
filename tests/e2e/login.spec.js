import { test, expect } from "../../plugins/e2e_helpers";

test("Verify the user is able to login in to the site using valid credentials", async ({
  Signup,
  Login,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await expect(Signup.logoutBtn).toHaveText(Signup.logoutText);
});
