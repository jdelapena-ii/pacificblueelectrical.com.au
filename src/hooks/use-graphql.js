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
            phone
            email
            location
          }
        }
        homeHeroImage: file(relativePath: { eq: "hero/home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        homeHeroTwoImage: file(relativePath: { eq: "hero/home-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        serviceHeroImage: file(relativePath: { eq: "hero/service.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        serviceLevel2HeroImage: file(
          relativePath: { eq: "hero/service-level-2.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        serviceLevel2GridImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
            relativeDirectory: { eq: "grid/level-2" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }

        aboutHeroImage: file(relativePath: { eq: "hero/about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        aboutHeroTwoImage: file(relativePath: { eq: "hero/about-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        contactHeroImage: file(relativePath: { eq: "hero/contact.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pmqMap: file(relativePath: { eq: "pmq-map.png" }) {
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
