import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

export function Input({
  isFullWidth,
  label,
  name,
  required = true,
  type = 'text',
  register,
  errors,
  hidden,
}) {
  const minLength = type === 'tel' ? 8 : 2;
  return (
    <div className={isFullWidth ? 'sm:col-span-2' : ''}>
      {errors[name]?.message}
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        <span className="sr-only">{label}</span>
      </label>
      <div className="relative shadow-sm">
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={`${label}${required ? ':' : ''}`}
          aria-invalid={errors[name] ? 'true' : 'false'}
          ref={register({
            required: required ? (
              <Error message={`${label} is a required field`} />
            ) : null,
            minLength: {
              value: minLength,
              message: (
                <Error
                  message={`${label} must be at least ${minLength} characters`}
                />
              ),
            },
          })}
          className={`${
            hidden ? 'hidden' : 'block'
          } w-full px-4 py-3 text-black placeholder-black bg-transparent border-black text-sm md:text-base rounded form-input sm:text-sm ${
            errors[name]
              ? 'border-red-500 focus:border-red-500 focus:shadow-outline-red'
              : ''
          } `}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  errors: PropTypes.object,
  isFullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func.isRequired,
  type: PropTypes.string,
  hidden: PropTypes.bool,
};
