const express = require("express");
const res = require("express/lib/response");
const app = express();
const mongodb = require("mongodb");

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
  console.log("user entered /create-tem");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-me", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "success" });
    },
  );
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.send("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
