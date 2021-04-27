const connection = require('./connection.js');

const insertIntoTable = (callback) => {
  const items = {
    name: 'bobby smith',
    email: 'kail@gmail.com',
    message: 'hey it is me kaili, john'
  };

  let query = `insert into contact_messages (name, email, message_content) VALUES ('${items.name}', '${items.email}', '${items.message}')`;

  connection.query(query, callback);
}

const dropTable = () => {
  let query = 'DROP TABLE contact_messages';
  connection.query(query, callback)
}

const createTable = () => {
  let query = "CREATE TABLE contact_messages (id INT AUTO_INCREMENT KEY, time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, name VARCHAR(250), email VARCHAR(250), message_content VARCHAR(2000))";
  connection.query(query, callback)
}

const selectAll = () => {
  let query = 'SELECT * FROM contact_messages'
  connection.query(query, callback);
}

const callback = (err, result) => {
  if(err) return console.log('error occurred: ', err);
  console.log('success: ', result);
}

module.exports = {
  insertIntoTable,
  dropTable,
  createTable,
  selectAll
}