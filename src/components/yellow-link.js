import React from 'react';
import PropTypes from 'prop-types';

function YellowLink({ text, to }) {
  return (
    <a
      href={to}
      className="inline-block px-6 font-serif text-xl tracking-normal text-white rounded bg-brand-yellow text-shadow"
    >
      {text}
    </a>
  );
}

YellowLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { YellowLink };
