const router = require('../router');
const connection = require('../connection.js');

router.createTable();
connection.end();