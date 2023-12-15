// @ts-check
const { test, expect } = require("@playwright/test");
const { signUp } = require("../pages/signup");

test("Verify the user is able to register on the site", async ({ page }) => {
  // await page.goto("/");
  // await page.locator("//a[contains(.,'Signup / Login')]").click();
  // await page.locator("//input[@placeholder='Name']").fill("John");
  // await page.locator("(//input[@type='email'])[2]").fill("John4@gamil.com");
  // await page.locator("button[data-qa='signup-button']").click();
  // await page.locator("#id_gender1").click();
  // await page.locator("input[type='password']").fill("John1234");
  // const day = await page.locator("#days");
  // day.selectOption({ label: "20" });
  // const month = await page.locator("#months");
  // month.selectOption({ label: "October" });
  // const year = await page.locator("#years");
  // year.selectOption({ label: "1998" });
  // await page.locator("#first_name").fill("John");
  // await page.locator("#last_name").fill("Wick");
  // await page.locator("#company").fill("Chapter4");
  // await page.locator("#address1").fill("625 Carson Street");
  // await page.locator("#address2").fill("625 Carson Street");
  // const country = await page.locator("#country");
  // country.selectOption({ label: "Australia" });
  // await page.locator("#state").fill("Kentucky");
  // await page.locator("#city").fill("Cincinnati");
  // await page.locator("#zipcode").fill("45202");
  // await page.locator("#mobile_number").fill("8592509017");
  // await page.locator("(//button[@type='submit'])[1]").click();
  const signUpPage = new signUp(page);
  await signUpPage.signUpPage();
  await signUpPage.userSignUp();
  await signUpPage.registrationForm();
  await expect(page.locator("//b[text()='Account Created!']")).toHaveText(
    "Account Created!"
  );
  await page.locator("a[data-qa='continue-button']").click();
  await expect(page.locator("//a[contains(text(),'Logout')]")).toHaveText(
    "Logout"
  );
});
