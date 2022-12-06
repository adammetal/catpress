const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("./public"));

app.get("/api/cats", (req, res) => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((response) => res.json(response));
});

app.listen(8080);
