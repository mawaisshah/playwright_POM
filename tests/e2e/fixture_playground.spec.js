import { test as myTest } from "@playwright/test";
import { setupHooks, page } from "../../plugins/hooks";
setupHooks();

const base = myTest.extend({
  userData: async ({ }, use) => {
    const userEmail = "John15@gmail.com";
    const password = "John1234";
    const subscribedLabel = page.locator("[id='success-subscribe']");
    const signupBtn = page.locator("//a[contains(.,'Signup / Login')]");
    const subscribedText = "You have been successfully subscribed!";

    await use({ userEmail, password, subscribedLabel, subscribedText, signupBtn });
  },

  subscription: async ({  }, use) => {
    const subscriptionFunction = async (email) => {
      await page.fill("input[type='email']", email);
      await page.click("button#subscribe>i");
    };

    await use(subscriptionFunction);
  },

  signUp: async ({  }, use) => {
    const signUpFunction = async () => {
      await page.click("//a[contains(.,'Signup / Login')]");
    };

    await use(signUpFunction);
  },

  login: async ({  }, use) => {
    const loginFunction = async (email, password) => {
      await page.fill("input[name='email']", email);
      await page.fill("input[name='password']", password);
      await page.click("button[data-qa='login-button']");
    };

    await use(loginFunction);
  },
});

// export const test = base;
export const expect = base.expect;

base(
  "Verify the user is able to subscribe to the site",
  async ({ signUp, login, subscription, userData }) => {
    await signUp();
    await login(userData.userEmail, userData.password);
    await subscription(userData.userEmail);
    await expect(userData.subscribedLabel).toHaveText(userData.subscribedText);
  }
);
