import { test as baseTest } from "@playwright/test";
import { signUp } from "../pages/signup";
import { login } from "../pages/login";
import { product } from "../pages/product";
import { cart } from "../pages/cart";
import { logout } from "../pages/logout";
import { deleteAcc } from "../pages/delete_account";
import { page } from "./hooks";
const testPages = baseTest.extend({
  Signup: async ({  }, use) => {
    await use(new signUp(page));
  },
  Login: async ({  }, use) => {
    await use(new login(page));
  },
  Product: async ({  }, use) => {
    await use(new product(page));
  },
  Cart: async ({  }, use) => {
    await use(new cart(page));
  },
  Logout: async ({  }, use) => {
    await use(new logout(page));
  },
  Delete: async ({  }, use) => {
    await use(new deleteAcc(page));
  },
});
export const test = testPages;
export const expect = testPages.expect;
