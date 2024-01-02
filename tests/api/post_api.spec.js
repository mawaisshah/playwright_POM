const { test, expect } = require('@playwright/test');

test('POST To Verify Login without email parameter', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    data:{
        "password": "123456",
    }
  })
  const responseBody = JSON.parse(await response.text());

  expect(response.status()).toBe(200);
  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toContain("Bad request, email or password parameter is missing in POST request.");
});