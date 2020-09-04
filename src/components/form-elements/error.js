import PropTypes from 'prop-types';
import React from 'react';

export function Error({ message }) {
  return (
    <p role="alert" className="text-xs font-semibold text-red-700 uppercase">
      {message}
    </p>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
