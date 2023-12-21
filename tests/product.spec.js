import { test, expect } from "../plugins/fixtures";

test("Verify the user is able to search for a product", async ({
  Signup,
  Login,
  Product,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.searchForProduct(Product.searchFor);
  await expect(Product.productName).toContainText(Product.searchFor.trim());
});
test("Verify the user is able to search a product by category", async ({
  Signup,
  Login,
  Product,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.productByCategory();
  await expect(Product.categoryTitle).toContainText(Product.searchFor.trim());
});
test("Verify the user is able to search a product by brand", async ({
  Signup,
  Login,
  Product,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.productByBrand();
  await expect(Product.categoryTitle).toContainText(Product.brandName.trim());
});
test("Verify the user is able to submit a review", async ({
  Signup,
  Login,
  Product,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.productReview();
  await expect(Product.submittedLabel).toContainText(
    Product.submittedText.trim()
  );
});
test("Verify the user is able to add the product to the cart", async ({
  Signup,
  Login,
  Product,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.addToCart();
  await expect(Product.addedLabel).toContainText(Product.addedText.trim());
});
test("Verify the user is able to remove the product from the cart", async ({
  Signup,
  Login,
  Product,
}) => {
  await Signup.signUpPage();
  await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.addToCart();
  await Product.removeProduct();
  await expect(Product.emptyCartLabel).toContainText(
    Product.emptyCartText.trim()
  );
});
