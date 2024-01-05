import { test, expect } from '../../plugins/api_helpers';
const faker = require("faker");

const validEmail = process.env.VALID_EMAIL_API
const invalidEmail = process.env.INVALID_EMAIL_API
const password = process.env.PASSWORD_API

test('POST To All Products List', async ({ request, postData, postEndPoints }) => {
  const response = await request.post(postEndPoints.productList)
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toContain(postData.notSupported);
});
test('POST To Search Product', async ({ request, postEndPoints }) => {
  const formData = new URLSearchParams();
  formData.append('search_product', 'top');
  const response = await request.post(postEndPoints.searchProduct, {
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
test('POST To Search Product Without search_product Parameter', async ({ request, postData, postEndPoints }) => {
  const response = await request.post(postEndPoints.searchProduct);
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toContain(postData.badRequestSearchProduct);
});
test('POST To Verify Login With Valid Credentials', async ({ request, postData, postEndPoints }) => {
  const formData = new URLSearchParams();
  formData.append('email', validEmail);
  formData.append('password', password);
  const response = await request.post(postEndPoints.verifyLogin, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.message).toContain(postData.userExists);
});
test('POST To Verify Login Without Email Parameter', async ({ request, postData, postEndPoints }) => {
  const formData = new URLSearchParams();
  formData.append('password', password);
  const response = await request.post(postEndPoints.verifyLogin, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(response.status()).toBe(200);
  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toContain(postData.badRequestEmailPassword);
});
test('POST To Verify Login With Invalid Credentials', async ({ request, postData, postEndPoints }) => {
  const formData = new URLSearchParams();
  formData.append('email', invalidEmail);
  formData.append('password', password);
  const response = await request.post(postEndPoints.verifyLogin, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(404);
  expect(responseBody.message).toContain(postData.userNotFound);
});
test('POST To Create User Account', async ({ request, postData, postEndPoints }) => {
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
  const response = await request.post(postEndPoints.createAccount, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString()
  });
  const responseBody = JSON.parse(await response.text());

  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toContain(postData.userCreated);
});