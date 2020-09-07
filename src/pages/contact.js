import React from 'react';
import {
  Layout,
  SEO,
  Contact,
  Hero,
  MapImage,
  YellowLink,
} from '../components';
import { useGraphQL } from '../hooks';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <HeroSection />
      <Contact subHeading="We are here to help" />
      <MapImage />
    </Layout>
  );
}

function HeroSection() {
  const {
    contactHeroImage,
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <Hero bgImage={contactHeroImage.childImageSharp.fluid}>
      <h1 className="flex flex-col max-w-md mb-8 font-serif text-6xl leading-none text-white">
        We would love to help you with your electrical needs
      </h1>
      <YellowLink
        to={`tel:${siteMetadata.phone.split(' ').join('')}`}
        text="Call us today"
      />
    </Hero>
  );
}

export default ContactPage;
