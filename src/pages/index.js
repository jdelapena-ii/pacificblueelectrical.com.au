import React from 'react';

import { Layout, SEO, Contact, Hero } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  const { omnicare } = useGraphQL();
  return (
    <Layout>
      <SEO title="Home" />
      <Hero image={omnicare.childImageSharp.fluid} />
      <h1 className="font-serif">Hello world!</h1>
      <Contact />
    </Layout>
  );
}
