import React from 'react';

import {
  Layout,
  SEO,
  Hero,
  ImageGrid,
  ListItem,
  HeadingWithCopy,
  Heading,
  CheckboxSection,
} from '../../components';
import { useGraphQL } from '../../hooks';

function ServicesPage() {
  const { serviceLevel2GridImages } = useGraphQL();

  return (
    <Layout>
      <SEO title="Level 2 - Service" />
      <HeroSection />
      <ServiceCopy />
      <CheckboxSection />
      <ImageGrid images={serviceLevel2GridImages.edges} />
    </Layout>
  );
}

function HeroSection() {
  const { serviceLevel2HeroImage } = useGraphQL();
  return (
    <Hero bgImage={serviceLevel2HeroImage.childImageSharp.fluid}>
      <h1 className="font-serif text-5xl leading-none text-white sm:text-6xl">
        <span className="leading-none">We are accredited, </span>
        <br />
        <span className="leading-none">qualified &amp; insured</span>
      </h1>
      <ul className="mt-4 space-y-1">
        <ListItem>All Types Of Electrical Work</ListItem>
        <ListItem>Friendly Knowledgeable Electricians</ListItem>
        <ListItem>Prompt And Professional</ListItem>
        <ListItem>Trusted And Reliable</ListItem>
        <ListItem>Free Quotes</ListItem>
      </ul>
    </Hero>
  );
}

function ServiceCopy() {
  return (
    <HeadingWithCopy
      heading={<Heading heading={['Our ', 'services']} tag="h2" />}
    >
      <p className="mb-4 text-white">
        Whether your project involves level 2, general electrical or phone &amp;
        data, you can be assured Pacific Blue Electrical can safely and
        professionally complete your project without outsourcing to other
        contractors to save your time and money.
      </p>
      <p className="text-white">
        We listen to what you want, discuss available options and suggest the
        best solutions for your needs.
      </p>
    </HeadingWithCopy>
  );
}

export default ServicesPage;
