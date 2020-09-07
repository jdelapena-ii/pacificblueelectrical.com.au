import React from 'react';
import PropTypes from 'prop-types';

function HeadingWithCopy({ children, heading }) {
  return (
    <article className="grid items-start px-4 lg:grid-cols-4 sm:px-8 lg:px-20">
      {heading}
      <div className="lg:col-span-3">
        <div className="max-w-3xl pt-4 mx-auto prose text-white md:pt-8 md:pb-16 md:px-8">
          {children}
        </div>
      </div>
    </article>
  );
}

HeadingWithCopy.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.node.isRequired,
};

export { HeadingWithCopy };
