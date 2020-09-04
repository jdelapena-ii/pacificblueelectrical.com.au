import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactForm, Input, TextArea, Select } from './form-elements';

export function Contact() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="grid gap-4 p-8 bg-brand-blue sm:grid-cols-2">
      <div className="text-left text-white">
        <h1 className="mt-10 mb-6 font-serif text-6xl font-bold uppercase">
          Contact us
        </h1>

        <p className="font-semibold">We are here to help</p>
        <p className="mt-2 font-light">
          Simply send us an email us for a free quote today or phone us on
          XXXXXX
        </p>

        <p className="mt-10">
          <span className="font-semibold">Phone</span>{' '}
          <span className="font-light">0404 xxxx</span>
        </p>
        <p className="mt-2">
          <span className="font-semibold">Location</span>{' '}
          <span className="font-light">0440 xxxx</span>
        </p>
        <p className="mt-2">
          <span className="font-semibold">24/7 Emergency Service</span>{' '}
          <span className="font-light">040 xxxx</span>
        </p>
      </div>
      <div className="">
        <div className="p-4 bg-white border-black rounded shadow-sm">
          <ContactForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            action="/success/"
            name="contact_form"
            className=""
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
            <div className="flex justify-end mt-4 space-y-6 sm:space-x-4 sm:space-y-0">
              <span className="inline-flex shadow-sm">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full px-6 py-3 font-bold tracking-widest transition duration-300 ease-in-out border border-black rounded hover:bg-black hover:text-white focus:bg-white focus:text-black"
                >
                  Submit
                </button>
              </span>
            </div>
          </ContactForm>
        </div>
      </div>
    </div>
  );
}
