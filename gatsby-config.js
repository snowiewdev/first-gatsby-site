// allow gatsby to know to use the plugin when building the site
module.exports = {
  siteMetadata: {
    title: `First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

// description: `site description`,
// image: `/images/icon.png`,
