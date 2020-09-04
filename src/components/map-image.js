import React from 'react';
import { GatsbyImage } from 'gatsby-image';
import PropTypes from 'prop-types';
import { useGraphQL } from '../hooks';

function MapImage() {
  const { pmqMap } = useGraphQL();
  return (
    <div className="relative px-4 pt-12">
      <PmqMap image={pmqMap.childImageSharp.fluid} />
    </div>
  );
}

function PmqMap({ image }) {
  return (
    <div className="absolute inset-0 flex">
      <GatsbyImage fluid={image} className="flex-1" />
    </div>
  );
}

MapImage.propTypes = {
  image: PropTypes.object.isRequired,
};

export { MapImage };
