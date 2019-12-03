const { getVariousTitlesAndRatings } = require("./imdb");
const {
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
} = require("./helperFunctions");

module.exports = {
  getVariousTitlesAndRatings,
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
};
