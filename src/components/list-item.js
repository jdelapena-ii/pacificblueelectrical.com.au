import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ children, bold = true }) {
  return (
    <li className="flex items-start">
      <span className="inline-flex items-center">
        &#8203;
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="w-7 h-7 text-brand-yellow"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="inline-block ml-3 font-semibold text-white">
        {children}
      </span>
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
};

export { ListItem };
