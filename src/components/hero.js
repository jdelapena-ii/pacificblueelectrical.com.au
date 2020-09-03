import PropTypes from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';

function Hero({ children, bgImage }) {
  return (
    <article className="relative overflow-hidden">
      <div className="absolute w-full h-full transform -translate-y-1/2 top-1/2 aspect-ratio-16/9">
        <GatsbyImage
          fluid={bgImage}
          className="object-contain w-full h-full"
          style={{ position: 'absolute' }}
        />
      </div>
      <div style={{ minHeight: '35rem' }} className="relative px-20 py-8">
        {children}
      </div>
    </article>
  );
}

Hero.propTypes = {
  bgImage: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export { Hero };
