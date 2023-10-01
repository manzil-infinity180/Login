const express = require("express");
const path = require("path");
const app= express();
const userRoute = require('./router/userRoute');
const bodyParser = require("body-parser");
const viewRoute = require("./router/viewRoute");
app.use(express.json());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use('/',viewRoute);
app.use('/api/v1/user',userRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
module.exports=app;