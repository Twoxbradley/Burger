// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zyy7otyaqjdykkl6",
  password: "yitcgplteg3r6c7g",
  database: "mfy3u0erh34lr0si"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
