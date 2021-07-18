"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.CLIENTPORT || 3333;

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/", (req, res) => {
  res.json({ app: "This app is up an running..." });
});

app.listen(port, () => {
  console.log(`application is listening to ${port}`);
});
