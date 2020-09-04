import React from 'react';

import { Layout, SEO, Contact, Map } from '../components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Contact />
      <Map />
    </Layout>
  );
}

export default AboutPage;
