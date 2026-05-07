const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://Kevin:Kevin7787@cluster0.ndsxkh1.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB", err);
      return;
    } else {
      console.log("MongoDB connection succed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);

      const PORT = 3003;
      server.listen(PORT, () => {
        console.log(`Server running: http://localhost:${PORT}`);
      });
    }
  },
);
// 60189f5 HEAD@{4}: commit: feat: learn boolan python
// 9acbcdb HEAD@{5}: commit: feat: learn string in python
// 8d16fa6 HEAD@{6}: commit: feat learn numbers in python
// a761b68 (recovery) HEAD@{7}: commit: python system variables & pecial methods via dunder
