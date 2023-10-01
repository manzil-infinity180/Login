const express = require("express");
const app= express();
const userRoute = require('./router/userRoute');
const bodyParser = require("body-parser");
app.use(express.json());

app.use('/api/v1/user',userRoute);


app.use(express.urlencoded({ extended: false }));
module.exports=app;