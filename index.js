const app = require("express")();
const http = require("http").Server(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});
