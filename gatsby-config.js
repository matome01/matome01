const config = require("./data/SiteConfig");
const urljoin = require("url-join");

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

module.exports = {
  //pathPrefix: config.pathPrefix,
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl), //config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl),// config.pathPrefix),
      feed_url: urljoin(config.siteUrl, /*config.pathPrefix,*/ config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl
        /*,config.pathPrefix*/
      )}/logos/logo-512.png`,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images"
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 672,
              quality: 90,
              wrapperStyle: "white-space: normal; margin-left: 0 !important;",
              withWebp: { quality: 90 }
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener nofollow noreferrer"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.siteGATrackingID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#c62828"
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
      },
    },
    "gatsby-plugin-catch-links",
    //"gatsby-plugin-netlify-cms",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        publicPath: `p.o339w_-iid3vp-neogeo`
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: "/"/*config.pathPrefix*/,
        background_color: "#e0e0e0",
        theme_color: "#c62828",
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // 1. 맨위부터 매치가 되는순간 아래는 거들떠보지도 않음
        // 2. /\.js/가 http로 시작하는 외부 사이트들로부터의 .js들을 매치를 못함. 즉, /\.js/는 동일 사이트 안에서의 매치. 외부 사이트로부터 것을 매치하려면 /^https? 이렇게 앞에 붙여야만 함
        // 3. 하지만 /^https?로 시작하는 것들은 동일 사이트 안까지 포함하여 매치됨
        // 4. /^\/?/ 이런식으로 아무리 해도 아무런 매치도 되지 않음. 즉 /^가 붙었을 때, 무조건 http가 나옴. 즉 /^[^h]/는 아무런 매치도 안됌
        runtimeCaching: [{
          urlPattern: /(\.js$|\.css$|static\/)/, 
          handler: "cacheFirst", 
          options: { 
            cacheName: "first-cache-321"
          }
        }, {
          urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
          handler: "staleWhileRevalidate",
          options: {
            cacheName: "second-cache-321"
          }
        }, {
          urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
          handler: "staleWhileRevalidate",
          options: {
            cacheName: "third-cahce-321"
          }
        }, {
          urlPattern: "/",
          handler: `networkFirst`,
          options: {
            networkTimeoutSeconds: 10,
            cacheName: 'fourth-cache-321',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "GatsbyJS Material Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  { "content:encoded": edge.node.html },
                  { author: config.userEmail }
                ]
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields { slug }
                    frontmatter {
                      title
                      cover
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ko'
      }
    }
  ]
};
