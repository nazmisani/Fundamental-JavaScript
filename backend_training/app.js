const express = require("express");
const router = require("./routers/index");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

module.exports = app;
