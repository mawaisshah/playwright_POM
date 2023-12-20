const { test, expect } = require("@playwright/test");
const { login } = require("../pages/login");
const { signUp } = require("../pages/signup");
const { product } = require("../pages/product");
const { cart } = require("../pages/cart");

test("Verify the user is able to proceed to checkout", async ({ page }) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  const productPage = new product(page);
  const cartPage = new cart(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await productPage.addToCart();
  await cartPage.proceedToCheckout();
  await expect(cartPage.orderPlacedLabel).toContainText(
    cartPage.orderPlacedText.trim()
  );
});
test("Verify the user is able to download the invoice", async ({ page }) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  const productPage = new product(page);
  const cartPage = new cart(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await productPage.addToCart();
  await cartPage.proceedToCheckout();
  const fileExists = await cartPage.downloadInvoice();
  expect(fileExists).toBe(true);
});
