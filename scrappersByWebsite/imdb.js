const request = require("request-promise");
const cheerio = require("cheerio");

const getTitleAndRating = async URL => {
  const response = await request(URL);
  let $ = cheerio.load(response);
  let title = $('div[class="title_wrapper"] > h1').text();
  let rating = $('span[itemprop="ratingValue"]').text();
  console.log(title, rating);
};

module.exports = {
  getTitleAndRating: getTitleAndRating
};
