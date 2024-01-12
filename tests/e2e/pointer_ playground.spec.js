import { test } from "@playwright/test"

test("Drag & Drop Test", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
    await page.locator("#small-box").dragTo(page.locator(".large-box"));
});
test("Mouse Move Test", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
    await page.locator("#small-box").hover();
    // Press left mouse button (hold)
    await page.mouse.down();
    await page.locator(".large-box").hover();
    // Release the left mouse button
    await page.mouse.up();
});
test("Mouse Actions Test", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
    // Move 50 pixels right, 10 pixels up
    await page.mouse.move(50, -10);
    // Click at (200, 300), then move cursor 20 pixels left, 10 pixels up
    await page.mouse.click(200, 300, { move: true, offset: { x: -20, y: 10 } });
    // Double click at (400, 500)
    await page.mouse.dblclick(400, 500);
    // Right-click at (500, 600)
    await page.mouse.click(500, 600, { button: 'right' });
    // Double right-click
    await page.mouse.down('right', { clickCount: 2 });
    // Release middle mouse button
    await page.mouse.up();
   
});