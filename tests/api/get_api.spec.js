import { test, expect } from '../../plugins/api_helpers';
const validEmail = process.env.VALID_EMAIL_API

test('Get All Products List', async ({ request, getEndPoints }) => {
    const response = await request.get(getEndPoints.productList)
    const responseBody = JSON.parse(await response.text());

    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.products).toBeTruthy();
});
test('Get All Brands List', async ({ request, getEndPoints }) => {
    const response = await request.get(getEndPoints.brandsList)
    const responseBody = JSON.parse(await response.text());

    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.brands).toBeTruthy();
});
test('Get User Detail By Email', async ({ request, getEndPoints }) => {
    const url = new URL(getEndPoints.userDetail);
    url.searchParams.append('email', validEmail);
    const response = await request.get(url.toString(), {
        headers: {
            'Content-Type': 'application/json', 
        },
    });
    const responseBody = JSON.parse(await response.text());

    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.user).toBeTruthy();
});
