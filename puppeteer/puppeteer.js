const puppeteer = require("puppeteer");

const puppeteerScreenshot = async (url, fileName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://${url}`);
  await page.screenshot({ path: `./puppeteer/screenshots/${fileName}` });

  await browser.close();
};

module.exports = {
  puppeteerScreenshot
};
