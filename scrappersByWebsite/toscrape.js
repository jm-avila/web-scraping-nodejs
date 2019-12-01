const request = require("request-promise");
const cheerio = require("cheerio");

const login = async () => {
  let initialRequest = await request("http://quotes.toscrape.com/login");
  let $ = cheerio.load(initialRequest);
  let csrfToken = $('input[name="csrf_token"]').val();

  let loginRequest = await request({
    uri: "",
    method: "POST",
    headers: {}
  });
  debugger;
};

module.exports = { login };
