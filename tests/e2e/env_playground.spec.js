import { test, expect } from "@playwright/test";
const baseUrl = process.env.BASE_URL_E2E;
test("Verify the user is able to login in to the site using valid credentials", async ({page}) => {
    await page.goto(`${baseUrl}/login`);
    const emailInput = page.locator("input[data-qa='login-email']");
    const passwordInput = page.locator("input[type='password']");
    await emailInput.fill(process.env.EMAIL_E2E);
    await passwordInput.fill(process.env.PASSWORD_E2E);
    await page.click("button[data-qa='login-button']");
    expect(page.locator("//a[contains(.,'Logout')]")).toHaveText(" Logout")
  });
