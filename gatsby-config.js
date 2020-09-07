const dotenv = require('dotenv');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

const title = 'Pacific Blue Electrical';
const siteUrl = 'https://www.pacificblueelectrical.com.au';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title,
    description: '',
    author: '',
    siteUrl,
    phone: '0439 788 444',
    email: 'pacificblueelectrical@gmail.com',
    location: 'Port Macquarie',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: 'Pacific Blue',
        start_url: '/',
        background_color: fullConfig.theme.colors.brand.black,
        theme_color: fullConfig.theme.colors.brand.black,
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [tailwindcss(tailwindConfig), autoprefixer],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'src/data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        // Set to `true` in order for drafts to replace their published version. By default, drafts will be skipped.
        // overlayDrafts: !isProd,

        // Set to `true` to keep a listener open and update with the latest changes in realtime. If you add a `token` you will get all content updates down to each keypress.
        watchMode: !isProd,

        // If the Sanity GraphQL API was deployed using '--tag <name>',
        // use 'graphqlTag' to specify the tag name. Defaults to 'default'.
        graphqlTag: 'default',

        // Authentication token for fetching data from private datasets, or when using overlayDrafts
        // token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
