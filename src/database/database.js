const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'p@ssw0rd',
  database: 'ssril',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
