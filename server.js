const express = require("express");
const path = require("path");
const groceriesDb = require("./data/groceries-db.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(request, response) {
  response.send("<h1> What Up Boiiiii</h1>");
});
app.get("/home", function(request, response) {
  response.render("home");
});

app.get("/groceries", function(request, response) {
  response.render("groceries/index", {
    data: [
      { tobuy: "Bread", done: true },
      { tobuy: "Eggs", done: false },
      { tobuy: "Milk", done: false }
    ]
  });
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
