const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'stormlight',
  database: 'election'
});

module.exports = db;
