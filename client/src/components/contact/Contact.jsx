import React from 'react';
import { useForm } from 'react-hook-form';
const { useState } = React;

const Contact = () => {
// const Contact = ({isDisplayed}) => {

  return (
    <div
      id="contact-page-container"
      // style = {isDisplayed ? shown : hidden}
    >
      <div id="contact-main-container">
        <ContactForm />
        <ContactAdditional />
      </div>
    </div>
  )
}

export default Contact;

// const hidden = {
//   zIndex: -1,
//   opacity: '0%',
//   // transform: 'translate(0px, 100vh)'
// }

// const shown = {
//   zIndex: 2,
//   opacity: '100%'
// }


const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('submitting something...');
    console.log(data);
  }

  return (
    <div
      id="contact-form-container"
      className="contact-containers"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          {...register("name", {
            required: true
          })}
        />
        <input
          type="text"
          placeholder="Email"
          className="contact-input"
          {...register("email", {
            required: true,
            // pattern:  /^\S+@\S+$/i
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <input
          type="text"
          placeholder="Type your message here"
          className="contact-input"
          {...register("message", {
            required: true
          })}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

const ContactAdditional = () => {
  return (
    <div
      id="contact-additional-container"
      className="contact-containers"
    >
    </div>
  )
}