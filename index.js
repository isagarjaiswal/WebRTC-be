const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("ha bhai from server");
});

app.listen(PORT, () => {
  console.log("server start port" + PORT);
});
