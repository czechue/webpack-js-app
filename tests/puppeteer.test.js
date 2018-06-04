import puppeteer from 'puppeteer';
import faker from 'faker';
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

const user = {
	firsName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email()
};

const isDebugging = () => {
	const debugging_mode = {
		headless: false,
		slowMo: 50,
		devtools: true
	};
	return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

let browser;
let page;
beforeAll(async () => {
	browser = await puppeteer.launch(isDebugging());
	page = await browser.newPage();
	await page.goto('http://localhost:8080/');
	page.setViewport({ width: 500, height: 2400 });
});

describe('on page load', () => {
	test(
		'h1 loads correctly',
		async () => {
			const html = await page.$eval('[data-testid="h1"]', (e) => e.innerHTML);

			expect(html).toBe('This is nice Webpack boilerplate');
		},
		16000
	);

	test('nav loads correctly', async () => {
		const navbar = await page.$eval(
			'[data-testid="navbar"]',
			(el) => (el ? true : false)
		);
		const listItems = await page.$$('[data-testid="nav-li"]');

		expect(navbar).toBe(true);
		expect(listItems.length).toBe(4);
	});

	test(
		'login form works correctly',
		async () => {
            // CONDITION WHEN JWT TOKEN IS REQUIRED TO SUBMIT THE FORM
            // await page.setCookie({ name: 'JWT', value: '123asd1231' })

			await page.click('[data-testid="firstName"]');
			await page.type('[data-testid="firstName"]', user.firsName, {
				delay: 10
			});

			await page.click('[data-testid="lastName"]');
			await page.type('[data-testid="lastName"]', user.lastName, { delay: 10 });

			await page.click('[data-testid="email"]');
			await page.type('[data-testid="email"]', user.email, { delay: 10 });

			await page.click('[data-testid="button"');

			await page.waitForSelector('[data-testid="success"]');
		},
		16000
	);

	describe('login form', () => {
		test(
			'fills out form and submits',
			async () => {
				const page2 = await browser.newPage();
				await page2.emulate(iPhone);
                await page2.goto('http://localhost:8080/');

                // CONDITION WHEN JWT TOKEN IS REQUIRED TO SUBMIT THE FORM
                // await page2.setCookie({ name: 'JWT', value: '123asd1231'})

				const firstNameEl = await page2.$('[data-testid="firstName"]');
				const lastNameEl = await page2.$('[data-testid="lastName"]');
				const emailEl = await page2.$('[data-testid="email"]');
				const buttonEl = await page2.$('[data-testid="button"]');

				await firstNameEl.tap();
				await page2.type('[data-testid="firstName"]', user.firsName, {
					delay: 10
				});

				await lastNameEl.tap();
				await page2.type('[data-testid="lastName"]', user.lastName, {
					delay: 10
				});

				await emailEl.tap();
				await page2.type('[data-testid="email"]', user.email, { delay: 10 });

				await buttonEl.tap();

				await page2.waitForSelector('[data-testid="success"]');
			},
			16000
		);

		test('sets firstName cookie', async () => {
			const page3 = await browser.newPage();
			await page3.emulate(iPhone);
			await page3.goto('http://localhost:8080/');

			const cookies = await page3.cookies();
			const firstNameCookie = cookies.find(
				(c) => c.name === 'firstName' && c.value === user.firsName
			);

			expect(firstNameCookie).not.toBeUndefined();
		}, 16000);
	});
});

afterAll(() => {
	if (isDebugging()) {
		browser.close();
	}
});
