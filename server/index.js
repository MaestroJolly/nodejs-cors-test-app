"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
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

app.get("/status", (req, res) => {
  res.json({ message: "Cors is allowed on this application..." });
});

app.listen(port, () => {
  console.log(`application is listening to ${port}`);
});
