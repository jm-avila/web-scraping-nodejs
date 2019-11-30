const fs = require("fs");
const papaparse = require("papaparse");
const request = require("request");
const headers = require("../headers.json");

const saveMoviesInfoToJSON = (data, title) =>
  fs.writeFileSync(`./imdb/${title}.json`, JSON.stringify(data), "UTF-8");

const saveMoviesInfoToCSV = (data, title) =>
  fs.writeFileSync(
    `./imdb/${title}.csv`,
    papaparse.unparse(JSON.stringify(data)),
    "UTF-8"
  );

const downloadPosters = async moviesData => {
  for await (let movie of moviesData) {
    const { title, image } = movie;
    await request({ uri: image, headers, gzip: true }).pipe(
      fs.createWriteStream(`./imdb/${title}.jpg`)
    );
  }
};

module.exports = {
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
};
