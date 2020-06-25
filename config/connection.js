const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.connection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jock204dash189",
    database: "todo_db",
  });
}

module.exports = connection;
