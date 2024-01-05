import { test as baseTest } from "@playwright/test";
const BASE_URL = process.env.BASE_URL_API;

const testPages = baseTest.extend({
  postEndPoints: async ({},use) => {
    const productList = `${BASE_URL}/productsList`;
    const searchProduct = `${BASE_URL}/searchProduct`;
    const verifyLogin = `${BASE_URL}/verifyLogin`;
    const createAccount = `${BASE_URL}/createAccount`;
    await use({ productList, searchProduct, verifyLogin, createAccount });
  },  
  postData: async ({},use) => {
        const notSupported = "This request method is not supported.";
        const badRequestSearchProduct = "Bad request, search_product parameter is missing in POST request.";
        const userExists = "User exists!";
        const badRequestEmailPassword = "Bad request, email or password parameter is missing in POST request.";
        const userNotFound = "User not found!";
        const userCreated = "User created!";
        await use({ notSupported, badRequestSearchProduct, userExists, badRequestEmailPassword, userNotFound, userCreated });
      }
});
export const test = testPages;
export const expect = testPages.expect;
