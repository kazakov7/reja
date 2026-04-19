const express = require("express");
const app = express();
const http = require("http");

//1: kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//2: session
//3:views
app.set("views", "views");
app.set("view engine", "ejs");

//4: routing
app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "succes" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is succesfully running. Port: ${PORT}`);
});
