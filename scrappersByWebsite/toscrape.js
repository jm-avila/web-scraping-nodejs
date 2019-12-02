const request = require("request-promise");
const cheerio = require("cheerio");
const loggedInHeaders = require("../toscrape/loggedInHeaders.json");
const loginHeaders = require("../toscrape/loginHeaders.json");

const login = async () => {
  const getCookies = headers =>
    headers["set-cookie"].map(value => value.split(";")[0]).join(" ");

  try {
    let initialRequest = await request({
      uri: "http://quotes.toscrape.com/login",
      method: "GET",
      gzip: true,
      resolveWithFullResponse: true
    });

    let loginCookies = getCookies(initialRequest.headers);
    let loggedInCookies = null;

    let $ = cheerio.load(initialRequest.body);
    let csrfToken = $('input[name="csrf_token"]').val();

    await request({
      uri: "http://quotes.toscrape.com/login",
      method: "POST",
      headers: {
        ...loginHeaders,
        Cookie: loginCookies
      },
      gzip: true,
      form: {
        csrf_token: csrfToken,
        username: "admin",
        password: "admin"
      },
      resolveWithFullResponse: true
    });
  } catch (error) {
    let statusCode = error.statusCode;
    if (statusCode === 302) {
      loggedInCookies = getCookies(error.response.headers);
    }
  }

  if (loggedInCookies) {
    await request({
      uri: "http://quotes.toscrape.com/",
      method: "GET",
      headers: {
        ...loggedInHeaders,
        Cookie: loggedInCookies
      },
      gzip: true,
      resolveWithFullResponse: true
    });
  }
  debugger;
};

module.exports = { login };
