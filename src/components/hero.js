import PropTypes from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';

function Hero({ children, image }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 h-full aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={image} className="flex-1" />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent"
          />
        </div>
      </div>
      <div
        style={{ minHeight: '20rem' }}
        className="relative inset-0 flex items-center justify-center px-4 py-4 overflow-hidden sm:px-6 lg:px-8"
      >
        <div className="max-w-xl font-serif text-xl leading-tight text-left text-white tracking-insane text-shadow md:text-4xl">
          {children}
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export { Hero };
