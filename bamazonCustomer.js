var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "j31blue",
  database: "bamazon"
}); 

var stockCheck = function() {
  connection.query("SELECT * FROM Products", function(err, res) {
  var table = new Table({
  head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity']
  
});
console.log("Pet Supplies For Your Furry Pals:");
for(var i=0; i < res.length; i++) {
  table.push([res[i].ItemID, res[i].ProductName, res[i].DepartmentName, res[i].Price.toFixed(2), res[i].StockQuantity]);
}
console.log(table.toString());
inquirer.prompt([{
  name: "ID",
  type: "input",
  message: "What is the ID number of the product you would like to purchase?",
  validate: function(value) {
    if (isNaN(value) == false) {
      return true;
    }
    else {
      return false;
    }
  }
},{
  name: "Quantity",
  type: "input",
  message: "How many units of this item would you like to purchase?",
  validate: function(value) {
    if (isNaN(value) == false) {
      return true;
    }
    else {
      return false;
    }
  }
}])
.then(function(response){
  var selectedID = response.Item_ID - 1
  var selectedProduct = res[selectedID]
  var selectedQuantity = response.Quantity
  if (selectedQuantity < res[selectedID].StockQuantity) {
    console.log("Your total is " + "(" + response.Quantity + ")" + "-" + res[selectedID].ProductName + " is: " + res[selectedID].Price.toFixed(2) * selectedQuantity);
    connection.query("UPDATE products SET ? WHERE ?", [{
      StockQuantity: res[selectedID].StockQuantity - selectedQuantity
    },{
      id: res[selectedID].id
    }], function(err, res) {
        stockCheck();
    });
  } else {
    console.log("Sorry, we only have " + res[selectedID].StockQuantity);
    stockCheck();
  }
})})}

stockCheck();
