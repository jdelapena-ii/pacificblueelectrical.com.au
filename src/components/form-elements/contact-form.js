import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

import { BotField } from './bot-field';

export function ContactForm({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
  setIsSubmitting,
}) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  function onSubmit(data, e) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  }

  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      action={action}
      className={className}
      method="POST"
      name={name}
    >
      <BotField />
      {children}
    </form>
  );
}

ContactForm.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  setIsSubmitting: PropTypes.func.isRequired,
};
