import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout isHome>
      <SEO title="Message received" />
      <article className="relative flex items-center justify-center w-full px-4 my-24 sm:mt-40 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl px-4 py-12 mx-auto space-y-8 tracking-widest text-center bg-yellow-400 border-2 border-black sm:px-6 lg:px-8">
          <h2 className="font-serif text-6xl leading-none tracking-normal text-center text-black uppercase sm:text-6xl">
            SUCCESS
          </h2>
          <p className="text-black">
            Thank you for your message. Our team will get back to you shortly.
          </p>
          <p>
            <Link
              to="/"
              className="inline-block w-1/3 max-w-xs px-0 py-2 mx-auto font-bold transition duration-300 ease-in-out bg-white rounded-lg hover:bg-white hover:text-black"
            >
              Return Home
            </Link>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export default SuccessPage;
