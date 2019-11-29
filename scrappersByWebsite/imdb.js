const request = require("request-promise");
const cheerio = require("cheerio");

const getTitleAndRating = async URL => {
  const response = await request({
    uri: URL,
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",

      "accept-encoding": "gzip, deflate, br",

      "accept-language": "en,es;q=0.9,es-ES;q=0.8,fr;q=0.7,en-US;q=0.6",

      "cache-control": "max-age=0",

      dnt: "1",

      referer: " https://www.google.com/",

      "sec-fetch-mode": "navigate",

      "sec-fetch-site": "same-origin",

      "sec-fetch-user": "?1",

      "upgrade-insecure-requests": "1",

      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    gzip: true
  });
  let $ = cheerio.load(response);
  let title = $('div[class="title_wrapper"] > h1')
    .text()
    .trim();
  let rating = $('span[itemprop="ratingValue"]').text();
  let image = $('div[class="poster"] > a > img').attr("src");
  let ratingCount = $('span[itemprop="ratingCount"]').text();

  console.log(title, rating, ratingCount, image);
};

module.exports = {
  getTitleAndRating: getTitleAndRating
};
