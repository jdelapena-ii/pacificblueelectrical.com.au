import React from 'react';

import { Layout, SEO, Contact, Hero } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  const { jade } = useGraphQL();
  return (
    <Layout>
      <SEO title="About" />
      <Hero image={jade.childImageSharp.fluid}>
        <h1>
          Do it Once,
          <br />
          Do It Right
        </h1>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
        </ul>
      </Hero>
      <Contact />
    </Layout>
  );
}
