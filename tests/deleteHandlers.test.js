// eslint-disable-next-line no-undef
const config = require('../config');

test('Verify if kit was deleted', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);
});


test('DELETE request status body verification', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE', 
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true);
});