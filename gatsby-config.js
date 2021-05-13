/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Techie Portfolio',
    description: 'A portfolio template created by McTechie',
    copyright: 'This website is copyright 2021 Techie Portfolio',
    contact: 'me@thetechieportfolio.com'
  }
}
