import React from 'react';

import { Layout, SEO, Contact, Hero } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  const { jade } = useGraphQL();
  return (
    <Layout>
      <SEO title="About" />
      <Hero image={jade.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
}
