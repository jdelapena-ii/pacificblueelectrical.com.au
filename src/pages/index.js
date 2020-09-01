import React from 'react';

import { Layout, SEO, Contact } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="font-serif">Hello world!</h1>
      <Contact />
    </Layout>
  );
}
