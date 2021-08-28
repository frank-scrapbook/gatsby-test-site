module.exports = {
  flags: {
    DEV_WEBPACK_CACHE: false,
    FAST_DEV: false,
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false
  },
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Frank's Gatsby Tutorial - Test Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
