const { test, expect } = require("@playwright/test");
const { signUp } = require("../pages/signup");
const { deleteAcc } = require("../pages/delete_account");

test("Verify the user is able to delete the registered account", async ({
  page,
}) => {
  const signUpPage = new signUp(page);
  const deleteAccount = new deleteAcc(page);
  await signUpPage.signUpPage();
  await signUpPage.userSignUp(
    signUpPage.userEmailText,
    signUpPage.userEmailText
  );
  await signUpPage.registrationForm(signUpPage.registrationData);
  await signUpPage.continueBtn.click();
  await deleteAccount.deleteUser();
  await expect(deleteAccount.deleteLabel).toHaveText(deleteAccount.deleteText);
});
