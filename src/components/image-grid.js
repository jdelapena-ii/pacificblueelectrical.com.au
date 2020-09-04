import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import { useGraphQL } from '../hooks';

function ImageGrid() {
  const { serviceLevel2GridImages } = useGraphQL();

  const renderImages = serviceLevel2GridImages.edges.map((item, index) => (
    <ServiceImage key={index} image={item.node.childImageSharp.fluid} />
  ));

  return (
    <div className="grid gap-4 pt-20 bg-black md:grid-cols-2 lg:grid-cols-4">
      {renderImages}
    </div>
  );
}

function ServiceImage({ image }) {
  return (
    <div className="relative h-0 aspect-ratio-square">
      <GatsbyImage
        fluid={image}
        className="object-cover w-full h-full"
        style={{ position: 'absolute' }}
      />
    </div>
  );
}

ServiceImage.propTypes = {
  image: PropTypes.object.isRequired,
};

export { ImageGrid };
