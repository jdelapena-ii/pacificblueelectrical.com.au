import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function ImageGrid({ images }) {
  return (
    <article className="grid grid-cols-2 gap-4 px-4 mb-12 bg-black sm:px-8 lg:px-20 md:grid-cols-3 lg:grid-cols-4">
      {images.map((item, index) => (
        <div className="relative h-0 aspect-ratio-square" key={index}>
          <GatsbyImage
            fluid={item.node.childImageSharp.fluid}
            className="object-cover w-full h-full"
            style={{ position: 'absolute' }}
          />
        </div>
      ))}
    </article>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
};
export { ImageGrid };
