import { test, chromium } from "@playwright/test";
let browser, context, page;
export const setupHooks = () => {
  test.beforeEach(async () => {
    await context.route('**/*', route => {
      if (route.request().url().includes('ads')) {
        route.abort();
      } else {
        route.continue();
      }
    });

  });
  test.afterEach(async () => {
  });
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });
  test.afterAll(async () => {
    await browser.close();
  });
};
export { page };
