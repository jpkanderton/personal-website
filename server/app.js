//
const express = require('express');
const bodyParser = require('body-parser');
const emailAPI = require('emailjs-com');
const sgMail = require('@sendgrid/mail');
const {sendGridApi, sender, recipient} = require('../sendGridApi.js');
const app = express();
sgMail.setApiKey(sendGridApi);

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
  console.log(process.env.envVariable)
});

app.post('/messages', (req, res) => {
  console.log('req.body: ', req.body);
  console.log(process.env.envVariable)
  // router.insertIntoTable(req.body, (err, result)=>{
  //   if (err) {
  //     console.log('Error [post to mySQL]: ', err);
  //     res.status(500).send({message: 'Error [post to mySQL]', type: 'error'});
  //     return
  //   }
  //   console.log('Success [post to mySQL] : ', result);
  //   res.send(result);
  // })
  /////// send GRID start
  //text(req.body.name, req.body.email, req.body.message),
  const msg = {
    to: recipient,
    from: sender,
    subject: subject(req.body.name),
    text: text(req.body.name, req.body.email, req.body.message)
  };
  console.log(msg);
  sgMail
    .send(msg)
    .then(() => {res.send('success')}, error => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
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