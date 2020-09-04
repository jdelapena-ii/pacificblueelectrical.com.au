import PropTypes from 'prop-types';
import React from 'react';

export function Error({ message }) {
  return (
    <p role="alert" className="text-xs text-red-500 uppercase">
      {message}
    </p>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
