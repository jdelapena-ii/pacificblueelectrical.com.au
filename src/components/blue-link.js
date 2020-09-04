import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function BlueLink({ text, to }) {
  return (
    <Link
      to={to}
      className="inline-block px-6 font-serif text-xl tracking-normal text-white rounded bg-brand-blue"
    >
      {text}
    </Link>
  );
}

BlueLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { BlueLink };
