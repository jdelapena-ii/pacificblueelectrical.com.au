import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import {
  Layout,
  SEO,
  Hero,
  ImageGrid,
  ListItem,
  HeadingWithCopy,
  Heading,
  CheckboxSection,
  Contact,
} from '../components';
import { useGraphQL } from '../hooks';

function Service({ data: { sanityService } }) {
  const { serviceLevel2GridImages } = useGraphQL();

  return (
    <Layout>
      <SEO title={`${sanityService.title} - Service`} />
      <HeroSection sanityService={sanityService} />
      <ServiceCopy sanityService={sanityService} />
      <CheckboxSection sanityService={sanityService} />
      <div className="mt-24" />
      <ImageGrid images={sanityService.imageGalleryImages} />
      <div className="mt-24" />
      <Contact
        bgColorClass="bg-brand-yellow"
        textColorClass="text-black"
        subHeading="In need of an electrician?"
      />
    </Layout>
  );
}

function HeroSection({ sanityService }) {
  return (
    <Hero bgImage={sanityService.heroImage.asset.fluid}>
      <h1 className="font-serif text-5xl leading-none text-white sm:text-6xl">
        {sanityService.heroHeading.map((heading, i) => (
          <Fragment key={i}>
            <span className="leading-none">{heading}</span>
            <br />
          </Fragment>
        ))}
      </h1>
      <ul className="mt-4 space-y-1">
        {sanityService.heroListItems.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </ul>
    </Hero>
  );
}

HeroSection.propTypes = {
  sanityService: PropTypes.object.isRequired,
};

function ServiceCopy({ sanityService }) {
  return (
    <HeadingWithCopy
      heading={<Heading heading={sanityService.serviceHeading} tag="h2" />}
    >
      <div className="mb-4">
        <BlockContent blocks={sanityService._rawServiceDescription} />
      </div>
    </HeadingWithCopy>
  );
}

ServiceCopy.propTypes = {
  sanityService: PropTypes.object.isRequired,
};

Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    sanityService(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      serviceHeading
      _rawServiceDescription
      _rawListSectionDescription
      id
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageGalleryImages {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroHeading
      description
      heroListItems
      listSectionHeading
      listSectionListItems
    }
  }
`;

export default Service;
