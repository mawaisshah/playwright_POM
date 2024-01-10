import { test, expect } from "../../plugins/e2e_helpers";
test.use({ storageState: "./loginAuth.json" });

test("Verify the user is able to proceed to checkout", async ({
  Login,
  Product,
  Cart,
}) => {
  await Login.userLogin();
  await Product.addToCart();
  await Cart.proceedToCheckout();
  await expect(Cart.orderPlacedLabel).toContainText(
    Cart.orderPlacedText.trim()
  );
});
// test("Verify the user is able to download the invoice", async ({
//   Login,
//   Product,
//   Cart,
// }) => {
//   await Login.userLogin();
//   await Product.addToCart();
//   await Cart.proceedToCheckout();
//   const fileExists = await Cart.downloadInvoice();
//   expect(fileExists).toBe(true);
// });
