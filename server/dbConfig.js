var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password1',
  database: 'portfolio_website'
})

connection.connect((err)=>{
  if(err) {
    console.log('there was an error in the connection: ', err);
  } else {
    console.log('connection successful');
    connection.query(createTable, (err, res)=> {
      if(err) return (console.log('error in table creation: ', err));
      console.log('table creation success: ', res);
    })
  }
});

var createTable = "CREATE TABLE contact_messages (id INT AUTO_INCREMENT KEY, time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, name VARCHAR(250), email VARCHAR(250), message_content VARCHAR(2000))";

var createTb = "CREATE TABLE customers (id INT AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255))";

module.exports = connection;