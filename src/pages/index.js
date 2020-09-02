import React from 'react';

import { Layout, SEO, Contact, Hero } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Contact />
    </Layout>
  );
}
