const app = require("express")();
const http = require("http").Server(app);
const server = app.listen(3000);
const io = require("socket.io")(server);

// HTTP
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// WebSocket
io.on("connection", socket => {
  console.log("a user conected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});
