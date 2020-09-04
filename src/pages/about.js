import React from 'react';

import { Layout, SEO, Contact, Map, MapImage } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Contact />
      <MapImage />
      <Map />
    </Layout>
  );
}
