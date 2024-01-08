import { test, expect } from '../../plugins/api_helpers';
const faker = require("faker");
const email = faker.internet.email();
const password = process.env.PASSWORD_API;


test.beforeAll(async ({ request, postData, postEndPoints }) => {
    const formData = new URLSearchParams();
    formData.append('name', faker.name.firstName());
    formData.append('email', email);
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
test('Delete to Verify Login', async ({ request, deleteEndPoints, deleteData }) => {
    const response = await request.delete(deleteEndPoints.verifyLogin)
    const responseBody = JSON.parse(await response.text());

    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toContain(deleteData.notSupported);
});
test('Delete Method To Delete User Account', async ({ request, deleteEndPoints, deleteData }) => {
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);
    const response = await request.delete(deleteEndPoints.deleteAccount, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: formData.toString()
    });
    const responseBody = JSON.parse(await response.text());

    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toContain(deleteData.accountDeleted);
});