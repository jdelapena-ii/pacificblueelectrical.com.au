import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';

function Hero() {
  const {
    site: { siteMetadata },
  } = useGraphQL();

  return (
    <div className="relative px-4 pt-12">
      <div className="relative w-full max-w-3xl mx-auto">
        <Link to="/">
          <span className="sr-only">{siteMetadata.title}</span>
        </Link>
        <p
          aria-hidden
          className="relative mt-4 text-2xl font-bold tracking-widest text-center uppercase"
        >
          Pacific Blue Electrical
        </p>
      </div>
    </div>
  );
}

export { Hero };
