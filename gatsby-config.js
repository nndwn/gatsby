/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
          icon: 'src/images/icon.jpg',
      }
   },
  {
    resolve: `gatsby-plugin-emotion`,
    options: {
      // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
      // The values for each key in this example are the defaults the plugin uses.
      sourceMap: false,
      autoLabel: "dev-only",
      labelFormat: `[local]`,
      cssPropOptimization: true,
    },
  },
],
  
}
