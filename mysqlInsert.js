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
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var sql2 = "INSERT INTO users (name, favorite_product) VALUES ?";
  var sql3 = "INSERT INTO products (name) VALUES ?";

  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];

  var values2 = [
    ['John', 1],
    ['Peter', 1],
    ['Amy', 2],
    ['Hannah', ''],
    ['Michael', '']
    ];

  var values3 = [
    ['Chocolate Heaven'],
    ['Tasty Lemons'],
    ['Vanilla Dreams']
    ];
  con.query(sql3, [values3], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});