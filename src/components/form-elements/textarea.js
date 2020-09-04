import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

export function TextArea({
  label,
  name,
  required = true,
  type = 'text',
  rows = 6,
  register,
  errors,
}) {
  const minLength = type === 'tel' ? 8 : 2;
  return (
    <div className="sm:col-span-2">
      {errors[name]?.message}
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        <span className="sr-only">{label}</span>
      </label>
      <div className="relative shadow-sm">
        <textarea
          id={name}
          name={name}
          rows={rows}
          type={type}
          required={required}
          placeholder={`${label}${required ? ':' : ''}`}
          aria-invalid={errors[name] ? 'true' : 'false'}
          ref={register({
            required: <Error message={`${label} is a required field`} />,
            minLength: {
              value: minLength,
              message: (
                <Error
                  message={`${label} must be at least ${minLength} characters`}
                />
              ),
            },
          })}
          className={`block w-full px-4 py-3 text-sm md:text-base transition duration-150 ease-in-out rounded border-black text-black form-textarea focus:outline-none focus:shadow-outline-primary focus:border-primary-light placeholder-black ${
            errors[name]
              ? 'border-red-500 focus:border-red-500 focus:shadow-outline-red'
              : ''
          }`}
        />
      </div>
    </div>
  );
}

TextArea.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
  register: PropTypes.func.isRequired,
  type: PropTypes.string,
};
