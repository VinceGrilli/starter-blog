module.exports = {
  siteMetadata: {
    title: `Vince Grilli`,
    description: `Starter Blog for learnin real good n stuff`,
    author: `@VinceGrilli`,
    siteUrl: `https://adoring-jang-d07e3d.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starter Blog`,
        short_name: `startBlog`,
        start_url: `/`,
        background_color: `#4c4744`,
        theme_color: `#4c4744`,
        display: `minimal-ui`,
        icon: `src/images/brain-jar.jpg`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify',
    `gatsby-plugin-offline`,
  ],
};
