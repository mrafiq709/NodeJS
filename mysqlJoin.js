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

  // Select records with a match in both tables
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  // Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.

  // Left Join
  // Select all users and their favorite product
  var sql2 = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";

  // Right Join
  // If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement
  var sql3 = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  con.query(sql3, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});