import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Heading({ heading, tag = 'h2' }) {
  console.log(heading);
  const Tag = tag;
  return (
    <Tag className="relative pt-24 pb-12 pl-12 -mt-12 font-serif text-5xl leading-8 text-white">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-48 bg-brand-yellow"
      />
      {heading.map((line, index) => (
        <Fragment key={nanoid()}>
          <span className="relative">{line}</span>
          {index !== heading.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}

Heading.propTypes = {
  heading: PropTypes.array.isRequired,
  tag: PropTypes.string,
};

export { Heading };
