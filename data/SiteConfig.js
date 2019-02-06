const config = {
  siteTitle: "마토메", // Site title.
  siteTitleShort: "마토메", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "마토메 - 일본 사이트 정리, 번역", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://matome.fun", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "마토메 - 일본 사이트 정리, 번역", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "234268327499052", // FB Application ID for using app insights
  siteGATrackingID: "UA-132782008-1", // Tracking code ID for google analytics.
  disqusShortname: "matome01", // Disqus shortname.
  postDefaultCategoryID: null, // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY/MM/DD", // Date format for display.
  userName: "Material User", // Username to display in the author segment.
  userEmail: "MaterialUser@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "/logos/blob-shape.svg", // User avatar to display in the author segment.
  userDescription:
    "의역, 오역, 실수 등 양해 부탁드립니다. 문의, 개선점은 트위터로 알려주세요.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/MatomeAdmin",
      iconClassName: "fa fa-twitter"
    }
    /*{
      label: "Email",
      url: "mailto:admin001@matome.fun",
      iconClassName: "fa fa-envelope"
    }*/
  ],
  copyright: "Copyright © 2019" // Copyright string for the footer of the website and RSS feed.
};
// Validate
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;