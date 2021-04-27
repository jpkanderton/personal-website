import React from 'react';
import { useForm } from 'react-hook-form';
const { useState } = React;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Contact = ({isDisplayed}) => {
// const Contact = ({isDisplayed}) => {
  console.log('isdisplayed: ', isDisplayed)
  if (isDisplayed){
  return (
    <div
      id="contact-page-container"
      style = {isDisplayed ? shown : hidden}
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
else {return null}
}

export default Contact;

const hidden = {
  zIndex: -1,
  opacity: '0%',
  // transform: 'translate(0px, 100vh)'
}

const shown = {
  zIndex: 2,
  opacity: '100%'
}


const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('submitting something...');
    console.log(data);
    data.message = data.message.replace(/\'/g,"");
    axios({
      method: 'post',
      url: './messages',
      data: data
    })
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
      <div
        // className=""
        id="contact-additional-note-container"
      >
        <p className="contact-page-font contact-page-note-font">I'd love to chat about any opportunities or just reach out to say hi!</p>
      </div>
      <div
        // className=""
        id="contact-additional-email-container"
      >
        <p className="contact-page-font contact-page-email-font">john.pk.anderton@gmail.com</p>
      </div>
      <div
        id="contact-additional-socials-container"
      >
        <div id="contact-icon-bar">
          <div className="contact-icon-container cntr-w-flex">
            <FontAwesomeIcon
              className="faIcon"
              icon={faGithub}
              size='3x'
              // color="white"
              color="black"
              className="cursor-pointer"
            />
          </div>
          <div className="contact-icon-container cntr-w-flex">
            <FontAwesomeIcon
              icon={faPaperPlane}
              size='3x'
              // color="#123C69"
              color="black"
              className="cursor-pointer"

            />
          </div>
          <div className="contact-icon-container cntr-w-flex">
            <FontAwesomeIcon
              icon={faLinkedin}
              size='3x'
              color="black"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// const removeApos = (text) => {
//   text.forEach()
// }