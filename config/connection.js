const mysql = require("mysql");

let connection;

connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Jock204dash189",
      database: "todo_db",
    });

module.exports = connection;
