import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function Hero({ children, bgImage }) {
  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0 sm:relative sm:h-0 sm:aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <GatsbyImage fluid={bgImage} className="flex-1" />
        </div>
      </div>
      <div className="relative inset-0 flex items-center px-4 py-8 sm:absolute sm:px-8 lg:px-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 from-black via-transparent bg-gradient-to-r"
        />
        <div className="relative">{children}</div>
      </div>
    </article>
  );
}

Hero.propTypes = {
  bgImage: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export { Hero };
