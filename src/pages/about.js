import React from 'react';

import { Layout, SEO, Contact, Hero, Map } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Contact />
      <Map />
    </Layout>
  );
}
