import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { socialLinks } from '../data/site-navigation';

export function Footer() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  return (
    <footer className="bg-brand-black">
      <div className="max-w-screen-xl px-4 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-4">
          {/* <div className="flex justify-center mt-8 space-x-6">
            {socialLinks.map((node) => (
              <a
                key={node.id}
                href={node.url}
                className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
              >
                <span className="sr-only">{node.label}</span>
                <node.icon className="w-6 h-6" />
              </a>
            ))}
          </div> */}
        </div>
        <div className="py-2 mt-8 border-t border-white border-solid">
          <a
            href="https://www.phirannodesigns.com.au/"
            target="_blank"
            rel="noreferrer"
            className="block text-sm leading-6 text-center text-white"
          >
            Wesbite by Phiranna Designs
          </a>
        </div>
      </div>
    </footer>
  );
}
