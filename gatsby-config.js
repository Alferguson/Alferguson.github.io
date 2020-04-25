module.exports = {
  siteMetadata: {
    title: `John Alexander Ferguson's Portfolio`,
    author: `John Alexander Ferguson`,
    description: `Portfolio for John Alexander Ferguson, a Software Engineer with an emphasis in Front-End Technologies`,
    siteUrl: `https://alferguson.github.io/`,
    social: {
      twitter: `alferguson_JS`
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/BlogTemplate'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`
      }
    },
  ]
};
