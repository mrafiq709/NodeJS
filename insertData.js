var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Insert 1 Record
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc 2', 'Highway 37 2')";

  // Insert Multiple Record
/*  var sql = "INSERT INTO customers (name, address) VALUES ?";
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
*/
  // con.query(sql, [values], function (err, result) for multiple insert
  con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log("Number of records inserted: " + result.affectedRows);

    // Get Inserted ID
    // Note: To be able to get the inserted id, only one row can be inserted.
    console.log("1 record inserted, ID: " + result.insertId);
  });

});

/**
* Note: The Result Object
* {
*  fieldCount: 0,
*  affectedRows: 14,
*  insertId: 0,
*  serverStatus: 2,
*  warningCount: 0,
*  message: '\'Records:14  Duplicated: 0  Warnings: 0',
*  protocol41: true,
*  changedRows: 0
* }
*/