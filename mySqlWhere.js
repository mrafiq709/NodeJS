// npm install mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// Normal where querry
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Select records where the address starts with the letter 'S'
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Escape query values by using the mysql.escape() method
  var adr = 'Mountain 21';
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Escape query values by using the placeholder ? method
  var adr1 = 'Mountain 21';
  var sql1 = 'SELECT * FROM customers WHERE address = ?';
  con.query(sql1, [adr1], function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Multiple placeholders
  var name = 'Amy';
  var adr2 = 'Mountain 21';
  var sql2 = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  con.query(sql2, [name, adr2], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});