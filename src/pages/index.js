import React from 'react';

import GatsbyImage from 'gatsby-image';
import {
  Layout,
  SEO,
  Hero,
  ListItem,
  BlueLink,
  Contact,
  Heading,
} from '../components';
import { useGraphQL } from '../hooks';

function IndexPage() {
  const { homeHeroImage } = useGraphQL();

  return (
    <Layout>
      <SEO title="Home" />
      <Hero bgImage={homeHeroImage.childImageSharp.fluid}>
        <HeroCopy />
      </Hero>
      <ServicesIntro />
      <Contact
        bgColorClass="bg-brand-yellow"
        textColorClass="text-black"
        subHeading="In need of an electrician?"
      />
    </Layout>
  );
}

function HeroCopy() {
  return (
    <>
      <h1 className="font-serif text-5xl leading-none text-white sm:text-6xl">
        <span className="leading-none">DO IT ONCE,</span>
        <br />
        <span className="leading-none">DO IT RIGHT</span>
      </h1>
      <ul className="mt-4 space-y-1">
        <ListItem>All Types Of Electrical Work</ListItem>
        <ListItem>Friendly Knowledgeable Electricians</ListItem>
        <ListItem>Prompt And Professional</ListItem>
        <ListItem>Trusted And Reliable</ListItem>
        <ListItem>Free Quotes</ListItem>
      </ul>
    </>
  );
}

function ServicesIntro() {
  const { homeHeroTwoImage } = useGraphQL();
  return (
    <article className="grid md:grid-cols-2">
      <div className="px-4 pb-24 sm:px-8 lg:px-20">
        <Heading
          heading={['Port Macquarie’s', 'most versatile', 'electricians']}
          tag="h2"
        />
        <div className="pt-8 pb-12 prose text-white">
          <p>
            Wether your project involves level 2, general electrical or phone
            &amp; data, you can be assured Pacific Blue Electrical can safely
            and professionally complete your project without outsourcing to
            other contractors to save your time and money.
          </p>
          <p>
            We listen to what you want, discuss available options and suggest
            the best solutions for your needs.
          </p>
        </div>
        <BlueLink to="/services/" text="Find out more here" />
      </div>
      <div>
        <GatsbyImage
          fluid={homeHeroTwoImage.childImageSharp.fluid}
          className="object-cover object-center h-full"
        />
      </div>
    </article>
  );
}

export default IndexPage;
