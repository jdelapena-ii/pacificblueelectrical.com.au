import React from 'react';

import {
  Layout,
  SEO,
  Hero,
  ListItem,
  Heading,
  Contact,
  HeadingWithCopy,
} from '../../components';
import { useGraphQL } from '../../hooks';

function ServicePage() {
  return (
    <Layout>
      <SEO title="Services" />
      <HeroSection />
      <OurServices />
      <Contact
        bgColorClass="bg-brand-yellow"
        textColorClass="text-black"
        subHeading="In need of an electrician?"
      />
    </Layout>
  );
}

function HeroSection() {
  const { serviceHeroImage } = useGraphQL();
  return (
    <Hero bgImage={serviceHeroImage.childImageSharp.fluid}>
      <h1 className="max-w-xl font-serif text-5xl leading-none text-white sm:text-6xl">
        Your local electrician on the Mid North Coast
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

function OurServices() {
  return (
    <HeadingWithCopy
      heading={<Heading heading={['Our ', 'services']} tag="h2" />}
    >
      <p>
        Wether your project involves level 2, general electrical or phone &amp;
        data, you can be assured Pacific Blue Electrical can safely and
        professionally comlete your project without outsourcing to other
        contractors to save your time and money.
      </p>
      <p>
        We listen to what you want, discuss available options and suggest the
        best solutions for your needs.
      </p>
    </HeadingWithCopy>
  );
}

export default ServicePage;
