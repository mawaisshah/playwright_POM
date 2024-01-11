import { test, expect } from "../../plugins/e2e_helpers";
import { setupHooks } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to register on the site", async ({ Signup }) => {
  await Signup.signUpPage();
  await Signup.userSignUp(Signup.userEmailText, Signup.userEmailText);
  await Signup.registrationForm(Signup.registrationData);
  await expect(Signup.accountCreated).toHaveText(Signup.accountCreatedText);
  await Signup.continueBtn.click();
  await expect(Signup.logoutBtn).toHaveText(Signup.logoutText);
});
