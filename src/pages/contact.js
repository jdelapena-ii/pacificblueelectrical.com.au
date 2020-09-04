import React from 'react';
import { Layout, SEO, Contact, Hero, MapImage } from '../components';
import { useGraphQL } from '../hooks';

function ContactPage() {
  const { contactHeroImage } = useGraphQL();

  return (
    <Layout>
      <SEO title="Contact Us" />
      <Hero bgImage={contactHeroImage.childImageSharp.fluid}>
        <h1 className="flex flex-col max-w-md mb-8 font-serif text-6xl leading-none text-white">
          We would love to help you with your electrical needs
        </h1>
        <a
          href="tel:404040404"
          className="inline-block px-6 font-serif text-lg tracking-normal text-white transition duration-300 ease-in-out rounded bg-brand-yellow"
        >
          Call us today
        </a>
      </Hero>
      <Contact subHeading="We are here to help" />
      <article className="-mt-12">
        <MapImage />
      </article>
    </Layout>
  );
}

export default ContactPage;
