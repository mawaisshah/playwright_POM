import { test, expect } from "../../plugins/e2e_helpers";

test("Verify the Login Page As Per Figma", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/login");
    await expect(page).toHaveScreenshot("login-page.png");
});
test("Verify the Login Full Page As Per Figma", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/login");
    await expect(page).toHaveScreenshot("login-full-page.png", { fullPage: true });
});
test("Verify the Product Page With Masking As Per Figma", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/products");
    await expect(page).toHaveScreenshot("products-page.png", { fullPage: true, mask: [page.locator("(//div[@class='productinfo text-center']//p)[1]")] });
});
test("Verify the Product Page Section As Per Figma", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/products");
    await expect(page.locator("[id='sale_image']")).toHaveScreenshot("products-page-section.png");
});
test("Verify the Product Page Pixel Ratio As Per Figma", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/products");
    await expect(page.locator("[id='sale_image']")).toHaveScreenshot("products-page-section-with-small-diff.png", {
        maxDiffPixelRatio: 0.05,
        maxDiffPixels: 3000,
    });
});
test.only("Verify the Cart Page On Different Screens", async ({ page }) => {
    await page.goto("https://www.automationexercise.com/view_cart");
    await expect(page).toHaveScreenshot("cart-page-on-iphone.png");
});