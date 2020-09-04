import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

export function Select({
  errors,
  label,
  name,
  options,
  register,
  required = true,
  // setOtherRequired,
}) {
  if (options.length <= 0) return null;
  return (
    <div>
      {errors[name]?.message}
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <div className="rounded-md shadow-sm">
        <select
          // onChange={(e) => {
          //   if (e.target.value === 'Other') setOtherRequired(true);
          //   else setOtherRequired(false);
          // }}
          defaultValue=""
          name={name}
          id={name}
          required={required}
          ref={register({
            required: required ? (
              <Error message={`${label} is a required field`} />
            ) : (
              false
            ),
          })}
          className={`block w-full rounded form-select px-4 py-3 text-sm md:text-base sm:leading-5 focus:outline-none border-black focus:shadow-outline-primary focus:border-primary-light ${
            errors[name]
              ? 'border-red-500 focus:border-red-500 focus:shadow-outline-red'
              : ''
          }`}
        >
          <option value="" disabled>
            What are you inquiring about?
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Select.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.any,
  // setOtherRequired: PropTypes.func,
};
