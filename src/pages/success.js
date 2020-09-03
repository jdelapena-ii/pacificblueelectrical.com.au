import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout isHome>
      <SEO title="Message received" />
      <article className="relative flex items-center justify-center w-full px-4 my-24 sm:mt-40 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl px-4 py-12 mx-auto text-center bg-brand-yellow sm:px-6 lg:px-8">
          <h2 className="mb-3 font-serif text-6xl leading-none tracking-normal text-center uppercase sm:text-6xl">
            SUCCESS
          </h2>
          <p className="mb-8 text-xl">
            Thank you for your message. Our team will get back to you shortly.
          </p>

          <Link
            to="/"
            className="inline-block px-12 py-2 mx-auto font-bold tracking-normal transition duration-300 ease-in-out bg-white rounded-lg"
          >
            Return Home
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export default SuccessPage;
