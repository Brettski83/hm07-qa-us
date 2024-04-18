// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code....', async () => {
	let actualStatuscode;
	try { 
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200);
});


test('Body should contain the kit name "For picnic" in GET', async () => {
	let actualresponseBody
	try { 
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualresponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	expect(actualresponseBody["name"]).toBe("For picnic");
});