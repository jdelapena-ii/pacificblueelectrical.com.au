import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { ContactForm, Input, TextArea, Select } from './form-elements';

function Contact({ bgColorClass, subHeading, textColorClass }) {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <article
      className={`grid gap-4 py-6 md:py-0 px-4 mb-12 sm:px-8 lg:px-20 md:grid-cols-2 ${
        bgColorClass || 'bg-brand-blue'
      }`}
    >
      <div
        className={`md:pt-12 md:pr-8 md:mb-0 mb-8 ${
          textColorClass || 'text-white'
        }`}
      >
        <h1 className="mb-2 font-serif text-5xl text-center md:text-6xl md:text-left">
          Contact us
        </h1>

        <p className="font-semibold">{subHeading}</p>
        <p className="mb-12">
          Simply send us an email us for a free quote today or phone us on{' '}
          <a href="tel:404040404">404 040 404</a>
        </p>

        <p>
          <span className="font-semibold">Phone</span>{' '}
          <a href="tel:404040404">404 040 404</a>
        </p>
        <p>
          <span className="font-semibold">Location</span>{' '}
          <span>Port Macquire, XXXX</span>
        </p>
        <p>
          <span className="font-semibold">24/7 Emergency Service</span>{' '}
          <a href="tel:404040404">404 040 404</a>
        </p>
      </div>

      <ContactForm
        handleSubmit={handleSubmit}
        register={register}
        setIsSubmitting={setIsSubmitting}
        action="/success/"
        name="contact_form"
        className="w-full max-w-lg p-6 mx-auto space-y-6 transform bg-white shadow-sm md:-translate-y-14"
      >
        <Input
          label="Full Name"
          name="full_name"
          register={register}
          errors={errors}
        />
        <Input
          label="Contact Number"
          name="contact_number"
          type="tel"
          register={register}
          errors={errors}
        />
        <Input
          label="Email"
          name="email_address"
          register={register}
          errors={errors}
        />
        <Select
          name="inquiries"
          label="What are you inquiring about?"
          options={['Done deal', 'No deal', 'Other']}
          register={register}
          errors={errors}
        />
        <TextArea
          label="Message"
          name="message"
          register={register}
          errors={errors}
        />
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-12 py-2 text-sm font-bold leading-none transition duration-300 ease-in-out border border-black rounded shadow-sm justify-cente hover:bg-black hover:text-white focus:bg-white focus:text-black"
          >
            Submit
          </button>
        </div>
      </ContactForm>
    </article>
  );
}

Contact.propTypes = {
  bgColorClass: PropTypes.string,
  textColorClass: PropTypes.string,
  subHeading: PropTypes.string.isRequired,
};
export { Contact };
