const fs = require("fs");

const saveMovieInfo = (data, title) =>
  fs.writeFileSync(`./imdb/${title}.json`, JSON.stringify(data), "UTF-8");

module.exports = {
  saveMovieInfo
};
