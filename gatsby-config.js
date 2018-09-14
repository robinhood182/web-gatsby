module.exports = {
  siteMetadata: {
    myName: `Robyn Navarro`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3zxbrepu84fq`,
        accessToken: `e09ef5827655cd4383b43a9d2df5c015b3694e405d8fdee75209f9344195d5a2`,
      },
    },
  ],
}