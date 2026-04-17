const express = require("express");
const app = express();
const http = require("http");

//1:kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//2:session
//3: views code
app.set("views", "views");
app.set("view engine", "ejs");
//4: routing
app.get("/hello", function (req, res) {
  res.end("<h1>Hello world</h1>");
});
app.get("/gift", function (req, res) {
  res.end("Siz sovg'alar bo'limidasiz.");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The running successfully this server port: ${PORT}`);
});
