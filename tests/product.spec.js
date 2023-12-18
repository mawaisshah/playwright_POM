const { test, expect } = require("@playwright/test");
const { login } = require("../pages/login");
const { signUp } = require("../pages/signup");
const { product } = require("../pages/product");

test("Verify the user is able to search for a product", async ({ page }) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  const productPage = new product(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await productPage.searchForProduct(productPage.searchFor);
  await expect(productPage.productName).toContainText(
    productPage.searchFor.trim()
  );
});
test("Verify the user is able to search a product by category", async ({
  page,
}) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  const productPage = new product(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await productPage.productByCategory();
  await expect(productPage.categoryTitle).toContainText(
    productPage.searchFor.trim()
  );
});
test("Verify the user is able to search a product by brand", async ({
  page,
}) => {
  const signUpPage = new signUp(page);
  const loginPage = new login(page);
  const productPage = new product(page);
  await signUpPage.signUpPage();
  await loginPage.userLogin(loginPage.userEmail, loginPage.userPassword);
  await productPage.productByBrand();
  await expect(productPage.categoryTitle).toContainText(
    productPage.brandName.trim()
  );
});
