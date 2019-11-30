const fs = require("fs");
const papaparse = require("papaparse");

const saveMoviesInfoToJSON = (data, title) =>
  fs.writeFileSync(`./imdb/${title}.json`, JSON.stringify(data), "UTF-8");

const saveMoviesInfoToCSV = (data, title) =>
  fs.writeFileSync(
    `./imdb/${title}.csv`,
    papaparse.unparse(JSON.stringify(data)),
    "UTF-8"
  );
module.exports = {
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV
};
