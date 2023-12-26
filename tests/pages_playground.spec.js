const { test, expect } = require("@playwright/test");
const { chromium, webkit, firefox } = require("playwright");

test("Test Chromium: single browser with a single page", async () => {
  const browserChromium = await chromium.launch();
  const pageChromium = await browserChromium.newPage();
  await pageChromium.goto("https://www.automationexercise.com/login");
  await expect(pageChromium).toHaveTitle(
    "Automation Exercise - Signup / Login"
  );
});
test("Test WebKit: single browser with multiple pages || Open different browsers", async () => {
  const browserWebkit = await webkit.launch();
  const pageWebkit1 = await browserWebkit.newPage();
  const pageWebkit2 = await browserWebkit.newPage();
  await pageWebkit1.goto("https://www.automationexercise.com/login");
  await expect(pageWebkit1).toHaveTitle("Automation Exercise - Signup / Login");
  await pageWebkit2.goto("https://www.facebook.com/");
  await expect(pageWebkit2).toHaveTitle("Facebook – log in or sign up");
});
test("Test Chromium: single browser with multiple pages || Open same browser", async () => {
  const browserChromium = await chromium.launch();
  const context = await browserChromium.newContext();
  const pageChromium1 = await context.newPage();
  const pageChromium2 = await context.newPage();
  await pageChromium1.goto("https://www.automationexercise.com/login");
  await expect(pageChromium1).toHaveTitle(
    "Automation Exercise - Signup / Login"
  );
  await pageChromium2.goto("https://www.facebook.com/");
  await expect(pageChromium2).toHaveTitle("Facebook – log in or sign up");
});
test("Test Firefox: multiple browsers with single pages", async () => {
  const browserChromium = await chromium.launch();
  const browserFirefox = await firefox.launch();
  const pageChromium = await browserChromium.newPage();
  const pageFirefox = await browserFirefox.newPage();
  await pageChromium.goto("https://www.automationexercise.com/login");
  await expect(pageChromium).toHaveTitle(
    "Automation Exercise - Signup / Login"
  );
  await pageFirefox.goto("https://www.facebook.com/");
  await expect(pageFirefox).toHaveTitle("Facebook – log in or sign up");
});
test("Test Chromium: Event handling on newtab", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://app.pangolin.exchange/");
  await page.click("a#bridge>img");
  const newPage = await context.waitForEvent("page");
  expect(newPage.locator("//button[text()='Connect Wallet']")).toContainText(
    "Connect Wallet"
  );
  await expect(newPage).toHaveTitle("Avalanche Bridge | Core");
});
