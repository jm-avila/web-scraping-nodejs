const { getVariousTitlesAndRatings } = require("./scrappersByWebsite/imdb");
const {
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
} = require("./imdb/helperFunctions");

const URLS = [
  "https://www.imdb.com/title/tt4047350/?ref_=nv_sr_srsg_0",
  "https://www.imdb.com/title/tt3042408/?ref_=fn_al_tt_4"
];

getVariousTitlesAndRatings(URLS).then(data =>
  downloadPosters(data, "movies_i_like_posters")
);
