const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const sendGridApiHidden = require('../sendGridApi.js');
const app = express();
sgMail.setApiKey(process.env.sendGridApi);
const sendGridApi = process.env.sendGridApi || sendGridApiHidden.sendGridApi;
const sender = process.env.sender || sendGridApiHidden.sender;
const recipient = process.env.recipient || sendGridApiHidden.recipient;

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
});

app.post('/messages', (req, res) => {
  const msg = {
    to: recipient,
    from: sender,
    subject: subject(req.body.name),
    text: text(req.body.name, req.body.email, req.body.message)
  };
  sgMail
    .send(msg)
    .then(() => {res.send('success')}, error => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
        res.send('error', error);
      }
    });
});

const subject = (name, email) => `Portfolio Website email from ${name}`;

const text = (name, email, message) => (
  `Hi John,\n
  You have received the following message from ${name}:\n
  "${message}"\n
  This person's email address is: ${email}\n\n
  via SendGrid`
)

module.exports = app;