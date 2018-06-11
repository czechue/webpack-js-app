import puppeteer from 'puppeteer';
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
const pixelTest = require('./diffImages')


let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()
  await page.goto('http://localhost:8080/');
  page.emulate(iPhone)
})

describe('screenshots are correct', () => {
  it('/index', async() => {
    const file = 'screenshot.png';
    await page.screenshot({ path: file })
    return pixelTest.compareScreenshots(file)
  })
})
afterAll(() => {
  browser.close()
})