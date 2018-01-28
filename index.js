const app = require("express")();
const http = require("http").Server(app);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});
