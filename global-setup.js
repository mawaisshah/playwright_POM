import { chromium } from "@playwright/test";
const password = process.env.PASSWORD_E2E;
const email = process.env.EMAIL_E2E;

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.automationexercise.com/login");
    await page.fill("input[name='email']", email);
    await page.fill("input[name='password']", password);
    await page.click("button[data-qa='login-button']");

    // Save the state 
    await page.context().storageState({path: "./loginAuth.json"});
    await browser.close();
}
export default globalSetup;