const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");

const HTML_DIR = path.join(__dirname, "/public");
app.use(express.static(HTML_DIR));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
  console.log(HTML_DIR);
});
