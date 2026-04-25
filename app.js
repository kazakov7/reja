const express = require("express");
const res = require("express/lib/response");
const app = express();

//mongodb conneect
const db = require("./server").db();
//1: kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//2: session
//3:views
app.set("views", "views");
app.set("view engine", "ejs");

//4: routing
app.post("/create-item", function (req, res) {
  res.send("Bajarildi");
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
