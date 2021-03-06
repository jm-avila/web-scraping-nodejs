const dotenv = require("dotenv");
const {
  getVariousTitlesAndRatings,
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
} = require("./imdb");
const { login } = require("./toscrape");
const { getInstagramUserJSON } = require("./instagram");
const {
  puppeteerScreenshot,
  puppeteerSearchResultsScreenshot,
  puppeteerPdf,
  puppeteerGetUrlAndTitle,
  puppeteerEmulatePhone,
  puppeteerInstagramLogin,
  puppeteerRequestInterception,
  puppeteerBasicAuthentication
} = require("./puppeteer");

dotenv.config();

// const URLS = [
//   "https://www.imdb.com/title/tt4047350/?ref_=nv_sr_srsg_0",
//   "https://www.imdb.com/title/tt3042408/?ref_=fn_al_tt_4"
// ];

// getVariousTitlesAndRatings(URLS).then(data => {
//   downloadPosters(data, "movies_i_like_posters");
//   data.forEach(({ title }) => {
//     saveMoviesInfoToJSON(data, title);
//     saveMoviesInfoToCSV(data, title);
//   });
// });

// getInstagramUserJSON("willsmith").then(console.log);

// puppeteerSearchResultsScreenshot(
//   "www.google.com",
//   "googlePuppeteerSearchResults.png",
//   'input[aria-label="Search"]',
//   "puppeteer"
// );

// puppeteerPdf("www.google.com", "googleMainPage.pdf");

// puppeteerGetUrlAndTitle("www.google.com").then(console.log);

// puppeteerEmulatePhone(
//   "www.google.com",
//   "iPhone X",
//   "googleMainPagePuppeteerIPhoneX.png"
// );

// puppeteerInstagramLogin(process.env.INSTA_USER, process.env.INSTA_PASSWORD);

// puppeteerRequestInterception("learnscraping.com/");

puppeteerBasicAuthentication();
