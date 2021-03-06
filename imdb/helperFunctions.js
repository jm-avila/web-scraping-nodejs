const fs = require("fs");
const papaparse = require("papaparse");
const request = require("request");
const headers = require("./headers.json");

const saveMoviesInfoToJSON = (data, title) =>
  fs.writeFileSync(
    `./imdb/downloads/${title}.json`,
    JSON.stringify(data),
    "UTF-8"
  );

const saveMoviesInfoToCSV = (data, title) =>
  fs.writeFileSync(
    `./imdb/downloads/${title}.csv`,
    papaparse.unparse(JSON.stringify(data)),
    "UTF-8"
  );

const downloadPosters = async moviesData => {
  for await (let movie of moviesData) {
    const { title, image } = movie;
    try {
      await new Promise((resolve, reject) =>
        request({ uri: image, headers, gzip: true })
          .pipe(fs.createWriteStream(`./imdb/downloads/${title}.jpg`))
          .on("finish", resolve)
          .on("error", reject)
      );
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  saveMoviesInfoToJSON,
  saveMoviesInfoToCSV,
  downloadPosters
};
