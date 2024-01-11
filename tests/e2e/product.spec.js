import { test, expect } from "../../plugins/e2e_helpers";
test.use({storageState: "./loginAuth.json"});
import { setupHooks } from "../../plugins/hooks";
setupHooks();

test("Verify the user is able to search for a product", async ({
  Login,
  Product,
}) => {
  await Login.userLogin();
  await Product.searchForProduct(Product.searchFor);
  await expect(Product.productName).toContainText(Product.searchFor.trim());
});
test("Verify the user is able to search a product by category", async ({
  Login,
  Product,
}) => {
  await Login.userLogin();
  await Product.productByCategory();
  await expect(Product.categoryTitle).toContainText(Product.searchFor.trim());
});
test("Verify the user is able to search a product by brand", async ({
  Login,
  Product,
}) => {
  await Login.userLogin();
  await Product.productByBrand();
  await expect(Product.categoryTitle).toContainText(Product.brandName.trim());
});
test("Verify the user is able to submit a review", async ({
  Login,
  Product,
}) => {
  await Login.userLogin();
  await Product.productReview();
  await expect(Product.submittedLabel).toContainText(
    Product.submittedText.trim()
  );
});
test("Verify the user is able to add the product to the cart", async ({
  Login,
  Product,
}) => {
  await Login.userLogin();
  await Product.addToCart();
  await expect(Product.addedLabel).toContainText(Product.addedText.trim());
});
test("Verify the user is able to remove the product from the cart", async ({
  Login,
  Product,
}) => {
  await Login.userLogin();
  await Product.addToCart();
  await Product.removeProduct();
  await expect(Product.emptyCartLabel).toContainText(
    Product.emptyCartText.trim()
  );
});

