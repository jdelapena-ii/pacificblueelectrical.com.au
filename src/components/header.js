import React from 'react';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';

import { mainNavigation } from '../data/site-navigation';
import { Logo } from './vectors';

export function Header() {
  return (
    <nav className="sticky top-0 z-20 shadow bg-brand-black">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-8 lg:px-20">
        <div className="flex justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo className="w-auto h-20" />
            </Link>
          </div>
          <div className="flex space-x-8">
            <div className="hidden space-x-8 sm:ml-6 sm:flex">
              {mainNavigation.map((node) => (
                <Link
                  key={nanoid()}
                  to={node.slug}
                  partiallyActive={node.slug !== '/'}
                  className="inline-flex items-center px-1 pt-1 tracking-wide text-white transition duration-150 ease-in-out hover:text-blue"
                >
                  {node.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:404044040"
              className="self-center block px-2 py-1 font-serif text-xl font-medium leading-none tracking-wide bg-white rounded"
            >
              Call us 404 404 404
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
