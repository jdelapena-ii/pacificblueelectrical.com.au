import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import { useGraphQL } from '../hooks';

function MapImage() {
  const { pmqMap } = useGraphQL();

  return (
    <div className="grid gap-4 pt-20 bg-black md:grid-cols-2 lg:grid-cols-4">
      <Image image={pmqMap.childImageSharp.fluid} />
    </div>
  );
}

function Image({ image }) {
  return (
    <div className="flex">
      <GatsbyImage
        fluid={image}
        className="object-cover w-full h-full"
        style={{ position: 'absolute' }}
      />
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export { MapImage };
