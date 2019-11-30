const {
  getTitleAndRating,
  getVariousTitlesAndRatings
} = require("./scrappersByWebsite/imdb");

const URL = "https://www.imdb.com/title/tt4158110/";
const URLS = [
  URL,
  "https://www.imdb.com/title/tt4047350/?ref_=nv_sr_srsg_0",
  "https://www.imdb.com/title/tt3042408/?ref_=fn_al_tt_4"
];
getTitleAndRating(URL).then(console.log);
// getVariousTitlesAndRatings(URLS).then(console.log);
