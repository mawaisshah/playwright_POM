import { test as baseTest } from "@playwright/test";
import { signUp } from "../pages/signup";
import { login } from "../pages/login";
import { product } from "../pages/product";
import { cart } from "../pages/cart";
import { logout } from "../pages/logout";
import { deleteAcc } from "../pages/delete_account";

const testPages = baseTest.extend({
  Signup: async ({ page }, use) => {
    await use(new signUp(page));
  },
  Login: async ({ page }, use) => {
    await use(new login(page));
  },
  Product: async ({ page }, use) => {
    await use(new product(page));
  },
  Cart: async ({ page }, use) => {
    await use(new cart(page));
  },
  Logout: async ({ page }, use) => {
    await use(new logout(page));
  },
  Delete: async ({ page }, use) => {
    await use(new deleteAcc(page));
  },
});
export const test = testPages;
export const expect = testPages.expect;
