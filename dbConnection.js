// npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Command: node dbConnect.js
  // Output: Connected!

  con.query("CREATE DATABASE nodeDB", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

});

