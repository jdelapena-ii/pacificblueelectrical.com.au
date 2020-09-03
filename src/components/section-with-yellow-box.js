import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

function SectionWithYellowBox({ heading, image, children }) {
  return (
    <article className="px-4 mb-12 sm:px-8 lg:px-20">
      <div className={`${image ? 'grid md:grid-cols-2' : ''}`}>
        <div className={`${!image ? 'flex md:flex-row flex-col' : ''}`}>
          <div className={`relative py-8${!image ? ' flex' : ''}`}>
            <div
              className={`absolute top-0 left-0 w-48 transform -translate-y-6 md:-translate-y-12 bg-brand-yellow${
                !image ? ' h-full' : ' yellow-box'
              }`}
            />
            {heading}
          </div>

          {children}
        </div>
        {image ? (
          <div>
            <GatsbyImage
              fluid={image}
              className="object-cover object-center h-full"
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </article>
  );
}

SectionWithYellowBox.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
};

export { SectionWithYellowBox };
