const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
  host: 'ssril-test-do-user-12363684-0.b.db.ondigitalocean.com',
  user: 'ssril',
  password: 'AVNS_B8qB9VInTKWsJ5Y3J9W',
  database: 'ssril',
  port: 25060,
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
