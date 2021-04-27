//
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./database/router.js');

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
});

app.post('/messages', (req, res) => {
  router.insertIntoTable((err, result)=>{
    if (err) {
      console.log('error occurred: ', err);
      return res.send(err);
    }
    console.log('success: ', result);
    res.send(result);
  })
});

module.exports = app;