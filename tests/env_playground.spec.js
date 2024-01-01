import { test, expect } from "@playwright/test";
test("Verify the user is able to login in to the site using valid credentials", async ({page}) => {
    await page.goto(process.env.BASE_URL);
    const emailInput = page.locator("input[placeholder='Username']");
    const passwordInput = page.locator("input[type='password']");
    await emailInput.fill(process.env.USER_EMAIL);
    await passwordInput.fill(process.env.PASSWORD);
    await page.click("input[type='submit']");
    expect(page.locator("//div[text()='Sauce Labs Backpack']")).toHaveText("Sauce Labs Backpack")
  });
