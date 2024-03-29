import { test, expect } from "../../plugins/e2e_helpers";
import { setupHooks, page } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to login in to the site using valid credentials", async ({ Signup }) => {
  await Signup.signUpPage();
  const emailInput = page.locator("input[data-qa='login-email']");
  const passwordInput = page.locator("input[type='password']");
  await emailInput.fill("John16@gamil.com");
  await passwordInput.fill("John1234");
  await page.click("button[data-qa='login-button']");
  await expect(Signup.logoutBtn).toHaveText(Signup.logoutText);

});
