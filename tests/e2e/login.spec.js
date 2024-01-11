import { test, expect } from "../../plugins/e2e_helpers";
test.use({storageState: "./loginAuth.json"});
import { setupHooks } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to login in to the site using valid credentials", async ({
  Signup,
  Login
}) => {
  await Login.userLogin();
  await expect(Signup.logoutBtn).toHaveText(Signup.logoutText);
});

