const request = require("request-promise");
const cheerio = require("cheerio");
const headers = require("../headers.json");

const getTitleAndRating = async URL => {
  const response = await request({
    uri: URL,
    headers,
    gzip: true
  });
  let $ = cheerio.load(response);
  let title = $('div[class="title_wrapper"] > h1')
    .text()
    .trim();
  let rating = $('span[itemprop="ratingValue"]').text();
  let image = $('div[class="poster"] > a > img').attr("src");
  let ratingCount = $('span[itemprop="ratingCount"]').text();
  let releaseDate = $('a[title="See more release dates"]')
    .text()
    .trim();
  let genres = $('div[class="title_wrapper"] a[href^="/search/title?genres"]')
    .map((i, element) => $(element).text())
    .toArray();
  return {
    title,
    rating,
    image,
    ratingCount,
    releaseDate,
    genres
  };
};

const getVariousTitlesAndRatings = async URLS => {
  const requestsArray = URLS.map(url => getTitleAndRating(url));
  const responsesArray = [];
  for (let request of requestsArray) {
    const response = await request;
    responsesArray.push(response);
  }
  return responsesArray;
};

module.exports = {
  getTitleAndRating: getTitleAndRating,
  getVariousTitlesAndRatings: getVariousTitlesAndRatings
};
