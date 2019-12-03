const request = require("request-promise");
const cheerio = require("cheerio");
// check if JSON is valid at https://jsonlint.com/

const getInstagramUserJSON = async userName => {
  const baseUrl = "https://www.instagram.com";
  const userUrl = `${baseUrl}/${userName}/`;

  const response = await request(userUrl);
  const $ = cheerio.load(response);
  const sharedDataString = $('body > script[type="text/javascript"]')
    .eq(0)
    .html();
  // regex made with https://regexr.com/
  const sharedDataRegex = /window._sharedData = (.+);/;
  const sharedDataJson = sharedDataRegex.exec(sharedDataString)[1];
  const sharedDataObj = JSON.parse(sharedDataJson);
  const userData = sharedDataObj.entry_data.ProfilePage[0].graphql.user;

  const { username, full_name, biography, profile_pic_url_hd } = userData;
  const { count: numOfposts } = userData.edge_owner_to_timeline_media;
  const { count: followers } = userData.edge_followed_by;
  const { count: following } = userData.edge_follow;
  debugger;
  return {
    username,
    full_name,
    biography,
    profile_pic_url_hd,
    numOfposts,
    followers,
    following
  };
};
module.exports = { getInstagramUserJSON };
