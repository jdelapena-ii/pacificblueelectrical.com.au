// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import useGraphQL from './src/hooks/use-graphql.js'
// const { site } = useGraphQL();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

export function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        homeHeroImage: file(relativePath: { eq: "hero/home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutHeroImage: file(relativePath: { eq: "about/about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutSecondaryImage: file(
          relativePath: { eq: "about/aboutsecondary.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
}
