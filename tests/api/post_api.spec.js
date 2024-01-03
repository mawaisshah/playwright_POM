const { test, expect } = require('@playwright/test');
const faker = require("faker");

const baseURL = process.env.BASE_URL
const validEmail = process.env.VALID_EMAIL
const invalidEmail = process.env.INVALID_EMAIL
const password = process.env.PASSWORD

test('POST To All Products List', async ({ request }) => {
  console.log(baseURL)
  const response = await request.post(`${baseURL}/productsList`)
  const responseBody = JSON.parse(await response.text());

  expect(response.status()).toBe(200);
  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toContain("This request method is not supported.");
});
test('POST To Search Product', async ({ request }) => {
  const formData = new URLSearchParams();
  formData.append('search_product', 'top');
  const response = await request.post(`${baseURL}/searchProduct`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());
  const hasProductWithTopCategory = responseBody.products.some(
    (product) => product.category.category === "Top"
  );

  const hasProductWithTopName = responseBody.products.some(
    (product) => product.name.toLowerCase().includes("top")
  );

  expect(responseBody.responseCode).toBe(200);
  expect(hasProductWithTopCategory || hasProductWithTopName).toBe(true);
});
test('POST To Search Product Without search_product Parameter', async ({ request }) => {
  const response = await request.post(`${baseURL}/searchProduct`);
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toContain("Bad request, search_product parameter is missing in POST request.");
});
test('POST To Verify Login With Valid Credentials', async ({ request }) => {
  const formData = new URLSearchParams();
  formData.append('email', validEmail);
  formData.append('password', password);
  const response = await request.post(`${baseURL}/verifyLogin`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.message).toContain("User exists!");
});
test('POST To Verify Login Without Email Parameter', async ({ request }) => {
  const formData = new URLSearchParams();
  formData.append('password', password);
  const response = await request.post(`${baseURL}/verifyLogin`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(response.status()).toBe(200);
  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toContain("Bad request, email or password parameter is missing in POST request.");
});
test('POST To Verify Login With Invalid Credentials', async ({ request }) => {
  const formData = new URLSearchParams();
  formData.append('email', invalidEmail);
  formData.append('password', password);
  const response = await request.post(`${baseURL}/verifyLogin`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(404);
  expect(responseBody.message).toContain("User not found!");
});
test('POST To Create User Account', async ({ request }) => {
  const formData = new URLSearchParams();
  formData.append('name', faker.name.firstName());
  formData.append('email', faker.internet.email());
  formData.append('password', password);
  formData.append('title', 'Mr');
  formData.append('birth_date', faker.random.number(31).toString());
  formData.append('birth_month', faker.date.month());
  formData.append('birth_year', faker.random.number({ min: 1950, max: 2002 }).toString());
  formData.append('firstname', faker.name.firstName());
  formData.append('lastname', faker.name.lastName());
  formData.append('company', faker.lorem.word());
  formData.append('address1', faker.address.streetAddress());
  formData.append('address2', faker.address.secondaryAddress());
  formData.append('country', 'Australia');
  formData.append('zipcode', faker.address.zipCode());
  formData.append('state', faker.address.state());
  formData.append('city', faker.address.city());
  formData.append('mobile_number', faker.phone.phoneNumber());
  const response = await request.post(`${baseURL}/createAccount`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toContain("User created!");
});