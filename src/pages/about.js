import React from 'react';

import { Layout, SEO, Contact, PageHero } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  const { jade } = useGraphQL();
  return (
    <Layout>
      <SEO title="Home" />
      <PageHero image={jade.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
}
