const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});
