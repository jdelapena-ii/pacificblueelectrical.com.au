import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function HeroHeading({ heading, tag = 'h1', textColour = 'text-white' }) {
  const Tag = tag;
  return (
    <Tag
      className={`font-serif text-5xl leading-none sm:text-6xl ${textColour}`}
    >
      {heading.map((line, index) => (
        <Fragment key={nanoid()}>
          <span>{line}</span>
          {index !== heading.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}

HeroHeading.propTypes = {
  heading: PropTypes.array.isRequired,
  tag: PropTypes.string,
  textColour: PropTypes.string,
};

export { HeroHeading };
