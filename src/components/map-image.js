import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

function MapImage() {
  const { pmqMap } = useGraphQL();

  return (
    <article
      className="relative mb-12 overflow-hidden"
      style={{ minHeight: '20rem' }}
    >
      <div className="absolute inset-0 sm:relative sm:h-0 sm:aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage
            fluid={pmqMap.childImageSharp.fluid}
            className="flex-1"
          />
        </div>
      </div>
      <div className="absolute inset-y-0 flex items-center h-full max-w-xs text-right right-16">
        <h2 className="font-serif text-6xl leading-none">
          Servicing the mid north coast
        </h2>
      </div>
    </article>
  );
}

export { MapImage };
