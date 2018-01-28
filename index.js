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

  socket.on("chat message", msg => {
    console.log(`message: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
