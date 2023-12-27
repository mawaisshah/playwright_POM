import { test } from "@playwright/test";
const { webkit } = require("@playwright/test");
let browser, context, page;
export const setupHooks = () => {
  test.beforeEach(async () => {
    await page.goto("https://www.automationexercise.com/login");
  });
  test.afterEach(async () => {
    await page.reload();
  });
  test.beforeAll(async () => {
    browser = await webkit.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });
  test.afterAll(async () => {
    await browser.close();
  });
};
export { page };
