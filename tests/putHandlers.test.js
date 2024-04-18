// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = { "name": "BDS"}

test('Put request status verification', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;

	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);
});


test('Put request status body verification', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true);
});
