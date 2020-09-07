const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityService {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts from Sanity
  const services = result.data.allSanityService.nodes || [];
  services.forEach((service) => {
    const {
      slug: { current: slug },
    } = service;
    createPage({
      path: `/services/${slug}`,
      component: require.resolve('./src/templates/service.js'),
      context: { slug },
    });
  });
};
