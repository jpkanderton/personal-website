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
  console.log('req.body: ', req.body);
  // router.insertIntoTable(req.body, (err, result)=>{
  //   if (err) {
  //     console.log('Error [post to mySQL]: ', err);
  //     res.status(500).send({message: 'Error [post to mySQL]', type: 'error'});
  //     return
  //   }
  //   console.log('Success [post to mySQL] : ', result);
  //   res.send(result);
  // })
});

module.exports = app;