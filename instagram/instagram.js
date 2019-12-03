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

  const {
    username,
    full_name,
    biography,
    profile_pic_url_hd,
    edge_owner_to_timeline_media: { count: numOfposts, edges },
    edge_followed_by: { count: followers },
    edge_follow: { count: following }
  } = userData;

  const latestPosts = edges.map(({ node: { id, shortcode, display_url } }) => ({
    id,
    shortcode,
    display_url
  }));

  debugger;
  return {
    username,
    full_name,
    biography,
    profile_pic_url_hd,
    numOfposts,
    followers,
    following,
    latestPosts
  };
};
module.exports = { getInstagramUserJSON };
