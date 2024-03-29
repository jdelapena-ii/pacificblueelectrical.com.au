import React, { useState } from 'react';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';

import { mainNavigation } from '../data/site-navigation';
import { LogoMobile, Logo } from './vectors';
import { MobileMenu } from './mobile-menu';
import { useGraphQL } from '../hooks';

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <header className="sticky top-0 z-20 shadow bg-brand-black">
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <nav>
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-8 lg:px-20">
          <div className="flex items-center justify-between">
            <div className="flex">
              <Link to="/" className="flex items-center flex-shrink-0">
                <LogoMobile className="w-auto h-14 sm:hidden" />
                <Logo className="hidden w-auto sm:block sm:h-14 lg:h-20" />
              </Link>
            </div>
            <div className="flex space-x-4 md:space-x-8">
              <div className="hidden space-x-8 md:ml-6 md:flex">
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
                href={`tel:${siteMetadata.phone.split(' ').join('')}`}
                className="self-center block px-2 py-1 font-serif text-xl font-medium leading-none tracking-wide whitespace-no-wrap bg-white rounded"
              >
                Call us {siteMetadata.phone}
              </a>

              <button
                type="button"
                className="flex items-center ml-4 space-x-1 md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  aria-hidden
                  focusable={false}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
