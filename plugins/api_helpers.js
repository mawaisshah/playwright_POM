import { test as baseTest } from "@playwright/test";

const testPages = baseTest.extend({
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
