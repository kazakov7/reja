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

      const PORT = 3000;
      server.listen(PORT, () => {
        console.log(`Server running: http://localhost:${PORT}`);
      });
    }
  },
);
