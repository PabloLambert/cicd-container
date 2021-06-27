const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World 2!!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
