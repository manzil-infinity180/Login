const express = require("express");
const app= express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
module.exports=app;