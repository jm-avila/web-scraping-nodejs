const {
  getVariousTitlesAndRatings,
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
} = require("./imdb");
const { login } = require("./toscrape");
const { getInstagramUserJSON } = require("./instagram");

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

getInstagramUserJSON("demium_startups").then(console.log);
