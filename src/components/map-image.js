import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';
import { HeroHeading } from './hero-heading';

function MapImage() {
  const { pmqMap } = useGraphQL();

  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0 sm:relative sm:h-0 sm:aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage
            fluid={pmqMap.childImageSharp.fluid}
            className="flex-1"
          />
        </div>
      </div>

      <div className="relative inset-0 flex items-center justify-end px-4 py-8 text-right sm:absolute sm:px-8 lg:px-20">
        <HeroHeading
          heading={['Servicing', 'the Mid', 'North', 'Coast']}
          textColour="text-brand-black"
          tag="h2"
        />
      </div>
    </article>
  );
}

export { MapImage };
