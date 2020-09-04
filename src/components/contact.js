import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { ContactForm, Input, TextArea, Select } from './form-elements';
import { useGraphQL } from '../hooks';

function Contact({
  bgColorClass = 'bg-brand-blue',
  subHeading = 'Contact Us',
  textColorClass = 'text-white',
}) {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    site: { siteMetadata },
  } = useGraphQL();

  return (
    <article
      className={`grid items-center py-6 md:py-0 lg:px-20 md:grid-cols-2 ${bgColorClass}`}
    >
      <div className={`px-4 pb-12 sm:px-8 ${textColorClass}`}>
        <h1 className="mb-2 font-serif text-5xl text-center md:text-6xl md:text-left">
          Contact us
        </h1>

        <h2 className="font-semibold">{subHeading}</h2>
        <p>
          Simply send us an email us for a free quote today or phone us on{' '}
          <a href={`tel:${siteMetadata.phone.split(' ').join('')}`}>
            {siteMetadata.phone}
          </a>
        </p>

        <dl className="mt-12">
          <div>
            <dt className="inline font-semibold">Phone </dt>
            <dd className="inline">
              <a href={`tel:${siteMetadata.phone.split(' ').join('')}`}>
                {siteMetadata.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">Location </dt>
            <dd className="inline">{siteMetadata.location}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">24/7 Emergency Service </dt>
            <dd className="inline">
              <a href={`tel:${siteMetadata.phone.split(' ').join('')}`}>
                {siteMetadata.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 sm:px-0">
        <ContactForm
          handleSubmit={handleSubmit}
          register={register}
          setIsSubmitting={setIsSubmitting}
          action="/success/"
          name="contact_form"
          className="w-full max-w-lg p-6 mx-auto space-y-6 transform bg-white shadow-sm lg:max-w-none md:-translate-y-14"
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
              className="justify-center px-12 py-2 text-sm font-bold leading-none transition duration-300 ease-in-out border border-black rounded shadow-sm hover:bg-black hover:text-white focus:bg-white focus:text-black"
            >
              Submit
            </button>
          </div>
        </ContactForm>
      </div>
    </article>
  );
}

Contact.propTypes = {
  bgColorClass: PropTypes.string,
  textColorClass: PropTypes.string,
  subHeading: PropTypes.string.isRequired,
};

export { Contact };
