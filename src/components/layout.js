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

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      <Header />
      <main className="flex-1 w-full mx-auto lg:max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
