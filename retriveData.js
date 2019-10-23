var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeDB"
});

//var sql = "SELECT * FROM customers";
var sql = "SELECT name, address FROM customers";

con.connect(function(err) {
  if (err) throw err;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);

	console.log("\n");
    // Return the address of the third record:
    console.log(result[2].address);
  });
});