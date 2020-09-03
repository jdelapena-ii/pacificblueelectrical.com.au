/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen pt-4 bg-brand-black">
      <Header />
      <main className="flex-1 w-full mx-auto max-w-7xl">
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
