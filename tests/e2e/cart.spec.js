import { test, expect } from "../../plugins/e2e_helpers";

test("Verify the user is able to proceed to checkout", async ({
  Signup,
  Product,
  Cart,
}) => {
  await Signup.signUpPage();
  // await Login.userLogin(Login.userEmail, Login.userPassword);
  await Product.addToCart();
  await Cart.proceedToCheckout();
  await expect(Cart.orderPlacedLabel).toContainText(
    Cart.orderPlacedText.trim()
  );
});
// test("Verify the user is able to download the invoice", async ({
//   Signup,
//   Login,
//   Product,
//   Cart,
// }) => {
//   await Signup.signUpPage();
//   await Login.userLogin(Login.userEmail, Login.userPassword);
//   await Product.addToCart();
//   await Cart.proceedToCheckout();
//   const fileExists = await Cart.downloadInvoice();
//   expect(fileExists).toBe(true);
// });
