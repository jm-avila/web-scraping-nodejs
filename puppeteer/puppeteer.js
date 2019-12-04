const puppeteer = require("puppeteer");

const puppeteerScreenshot = async (url, fileName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://${url}`);
  await page.screenshot({ path: `./puppeteer/screenshots/${fileName}` });

  await browser.close();
};

const puppeteerSearchResultsScreenshot = async (
  url,
  fileName,
  selector,
  inputValue
) => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });

  const page = await browser.newPage();
  await page.goto(`https://${url}`);

  await page.type(selector, inputValue, { delay: 100 });
  await page.keyboard.press("Enter");
  await page.waitForNavigation();
  await page.screenshot({ path: `./puppeteer/screenshots/${fileName}` });

  await browser.close();
};

const puppeteerPdf = async (url, fileName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://${url}`);
  await page.pdf({ path: `./puppeteer/pdf/${fileName}` });

  await browser.close();
};

const puppeteerGetUrlAndTitle = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://${url}`);

  const title = await page.title();
  const currentUrl = await page.url();

  await browser.close();

  return {
    title,
    initial: url,
    currentUrl
  };
};

const puppeteerEmulatePhone = async (url, device, fileName) => {
  // check the available devices at: https://github.com/puppeteer/puppeteer/blob/master/lib/DeviceDescriptors.js
  const devices = require("puppeteer/DeviceDescriptors");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.emulate(devices[device]);
  await page.goto(`https://${url}`);
  await page.screenshot({ path: `./puppeteer/screenshots/${fileName}` });

  await browser.close();
};

module.exports = {
  puppeteerScreenshot,
  puppeteerSearchResultsScreenshot,
  puppeteerPdf,
  puppeteerGetUrlAndTitle,
  puppeteerEmulatePhone
};
