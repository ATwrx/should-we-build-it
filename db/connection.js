import mysql from 'mysql';

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    root: 3000,
    host: 'localhost',
    user: ' ',
    password: '',
    database: '',
  });

