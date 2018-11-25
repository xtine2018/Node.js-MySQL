# Node.js-MySQL

In this activity, I'll be creating an Amazon-like storefront with the MySQL skills I've learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

Instructions:

Create a MySQL Database called bamazon.
Then create a Table inside of that database called products.
<p align="center">
  <img src="assets/Screen Shot 2018-11-24 at 8.42.10 PM.png" width="350" title="hover text">
</p>
The products table should have each of the following columns:

item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)

Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages:

The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.


However, if your store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.
