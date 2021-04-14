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
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactAdditional />
        </div>
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
      className="contact-containers"
    >
      <form
        id="contact-form-container"
        className="contact-form-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="contact-input"
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: true
          })}
        />
        <input
          className="contact-input"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            // pattern:  /^\S+@\S+$/i
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <input
          id="contact-input-large"
          className="contact-input"
          type="text"
          placeholder="Type your message here"
          {...register("message", {
            required: true
          })}
        />
        <input
          id="send"
          type="submit"
          value="Send"
        />
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