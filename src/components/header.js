import React, { useState } from 'react';
import { Link } from 'gatsby';

import { mainNavigation } from '../data/site-navigation';
import { Logo } from './vectors';

export function Header() {
  return (
    <nav className="sticky top-0 z-20 bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo className="w-auto h-10 text-teal-500 transition duration-150 ease-in-out fill-current hover:text-teal-700" />
            </Link>
          </div>
          <div className="hidden space-x-8 sm:ml-6 sm:flex">
            {mainNavigation.map((node) => (
              <Link
                key={node.id}
                to={node.slug}
                partiallyActive={node.slug !== '/'}
                activeClassName="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-teal-500 focus:outline-none focus:border-teal-700"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                {node.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
