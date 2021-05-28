import React from 'react';
import { useForm } from 'react-hook-form';
const { useState } = React;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Contact = ({isDisplayed}) => {
  if (isDisplayed){
  return (
    <div
      id="contact-page-container"
      className="bckgrnd-main-prmry"
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
    data.message = data.message.replace(/\'/g,"");
    axios({
      method: 'post',
      url: './messages',
      data: data
    })
      .then((result)=> {
        setSubmitSuccess(true);
      }, (error) => {
        console.log('Error: ', error)
      });
  }

  return (
    <div>
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
        <textarea
          id="contact-input-large"
          className={!errors.message ? "contact-input" : "contact-input error-occurred"}
          type="text"
          name="message"
          placeholder="Type your message here..."
          {...register("message", {
            required: true
          })}
        />
        <input
          id="send"
          className="font-color-prmry clickable"
          type="submit"
          value="Send"
        />
      </form>
      :
      <div className="thank-you font-color-prmry">Thanks for the message!</div>
      }
    </div>
  )
}

const ContactAdditional = () => {
  return (
    <div
      id="contact-additional-container"
    >
      <div
        id="contact-additional-note-container"
      >
        <p className="font-color-prmry contact-page-note-font">I'd love to chat about any opportunities or just reach out to say hi!</p>
      </div>
      <div
        id="contact-additional-email-container"
      >
        <p
          id="contact-page-email"
          className="font-color-prmry-w-hover contact-page-email-font cursor-pointer"
          onClick={copyToClipboard}
        >
          john.pk.anderton@gmail.com
        </p>
      </div>
      <div
        id="contact-additional-socials-container"
      >
        <div
          id="contact-icon-bar"
        >
          <a
            className="contact-icon-container cntr-w-flex"
            href="https://github.com/jpkanderton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="font-color-prmry-w-hover cursor-pointer"
              icon={faGithub}
              size='3x'
            />
          </a>
          <a
            className="contact-icon-container cntr-w-flex"
            href="mailto:john.pk.anderton@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              size='3x'
              className="font-color-prmry-w-hover cursor-pointer"

            />
          </a>
          <a
            className="contact-icon-container cntr-w-flex"
            href="https://www.linkedin.com/in/johnpkanderton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size='3x'
              className="font-color-prmry-w-hover cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

const copyToClipboard = () => {
  let numOfCh = document.querySelector('#contact-additional-email-container').childNodes.length;
  if (numOfCh > 1) return;
  const textToCopy = document.getElementById("contact-page-email").innerText;
  const myTemporaryInputElement = document.createElement("input");
  myTemporaryInputElement.type = "text";
  myTemporaryInputElement.value = textToCopy;
  document.body.appendChild(myTemporaryInputElement);
  myTemporaryInputElement.select();
  document.execCommand("Copy");
  document.body.removeChild(myTemporaryInputElement);
  const newElement = document.createElement('p');
  newElement.type = "text";
  newElement.innerText = "Copied!";
  newElement.setAttribute("id", "copied-alert");
  newElement.setAttribute("class", "bckgrnd-scndry2-prmry");
  newElement.setAttribute("class", "contact-page-email-font");
  const myElement = document.querySelector('#contact-additional-email-container');
  myElement.appendChild(newElement);
  setTimeout(function(){ myElement.removeChild(newElement); }, 5000);
}