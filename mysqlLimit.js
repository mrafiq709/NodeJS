// npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // If you want to return five records, starting from the third record, 
  // you can use the "OFFSET" keyword
  var sql2 = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  // OR var sql2 = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});