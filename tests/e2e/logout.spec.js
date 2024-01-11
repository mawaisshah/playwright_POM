import { test, expect } from "../../plugins/e2e_helpers";
test.use({storageState: "./loginAuth.json"});
import { setupHooks } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to logout from the site", async ({
  Signup,
  Login,
  Logout,
}) => {
  await Login.userLogin();
  await Logout.userLogout();
  await expect(Signup.signUpBtn).toHaveText(Signup.signupText);
});
