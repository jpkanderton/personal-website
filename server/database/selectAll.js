const router = require('./router.js');
const connection = require('./connection.js');

router.selectAll();
connection.end();