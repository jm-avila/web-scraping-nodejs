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

module.exports = {
  puppeteerScreenshot,
  puppeteerSearchResultsScreenshot
};
