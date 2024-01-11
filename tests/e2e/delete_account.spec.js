import { test, expect } from "../../plugins/e2e_helpers";
import { setupHooks } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to delete the registered account", async ({
  Signup,
  Delete,
}) => {
  await Signup.signUpPage();
  await Signup.userSignUp(Signup.userEmailText, Signup.userEmailText);
  await Signup.registrationForm(Signup.registrationData);
  await Signup.continueBtn.click();
  await Delete.deleteUser();
  await expect(Delete.deleteLabel).toHaveText(Delete.deleteText);
});
