import React from 'react';
import { useForm } from 'react-hook-form';
const { useState } = React;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { init, sendForm } from 'emailjs-com';
// import emailjsAPI from '../../../../emailjsAPI.js';
// init(emailjsAPI.userID);
// const fakeApi = process.env.envVariable || 'this is the regular variable';


const Contact = ({isDisplayed}) => {
  console.log('fakeApi: ', process.env.envVariable);
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
  const [errorOccurred, setError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('submitting something...');
    console.log(data);
    data.message = data.message.replace(/\'/g,"");
    axios({
      method: 'post',
      url: './messages',
      data: data
    })
      .then((result)=> {
        console.log('Success [post to mySQL]: ', result.config.data);
        setSubmitSuccess(true);
      }, (error) => {
        console.log('Error: ', error)
      });
    // emailjs.sendForm(emailjsAPI.serviceID, emailjsAPI.templateID, '#contact-form-container')
    //   .then((result) => {
    //     console.log(result.text);
    //   }), (error) => {
    //     console.log(error.text);
    //   }
  }

  return (
    <div
      className="contact-containers"
    >
      {!submitSuccess ?
      <form
        id="contact-form-container"
        className="contact-form-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.name && 'name required'}
        <input
          className={!errors.name ? "contact-input" : "contact-input error-occurred"}
          type="text"
          placeholder="Your Name"
          name="name"
          {...register("name", {
            required: true
          })}
        />
        {errors.email && 'email required'}
        <input
          className = {!errors.email ? "contact-input" : "contact-input error-occurred"}
          type="text"
          placeholder="Email"
          name="email"
          {...register("email", {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        {errors.message && 'message required'}
        <input
          id="contact-input-large"
          className={!errors.message ? "contact-input" : "contact-input error-occurred"}
          type="text"
          name="message"
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
      :
      <div className="thank-you">Thanks for the message!</div>
      }
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
        id="contact-additional-note-container"
      >
        <p className="contact-page-font contact-page-note-font">I'd love to chat about any opportunities or just reach out to say hi!</p>
      </div>
      <div
        id="contact-additional-email-container"
      >
        <p
          id="contact-page-email"
          className="contact-page-font contact-page-email-font"
        >
          john.pk.anderton@gmail.com
        </p>
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