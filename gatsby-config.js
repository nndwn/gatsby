/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
          icon: 'src/images/icon.jpg',
      }
   },
   {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      develop: true, // Enable while using `gatsby develop`
      //tailwind: true, // Enable tailwindcss support
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      purgeOnly : ['components/', 'css/'], // Purge only these files/folders
      purgeCSSOptions: {
        // https://purgecss.com/configuration.html#options
        // safelist: ['safelist'], // Don't remove this selector
      },
      // More options defined here https://purgecss.com/configuration.html#options
    },
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
