import React from 'react';

import { Layout, SEO, Contact, Map, ImageGrid } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Contact />
      <ImageGrid />
      <Map />
    </Layout>
  );
}
