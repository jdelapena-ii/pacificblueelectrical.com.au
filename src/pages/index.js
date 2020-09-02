import React from 'react';

import { Layout, SEO, Contact, InstagramFeed } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="font-serif">Hello world!</h1>
      <InstagramFeed />
      <Contact />
    </Layout>
  );
}
