const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = 8080 || process.env.PORT;
dotenv.config({path: './.env'});
const app = require('./app'); // from app.js
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD);

mongoose.connect(DB,{
  useNewUrlParser:true
}).then(()=>{
  console.log("successfully connected to database");
});


app.listen(PORT , ()=>{
  console.log(`Running on port ${PORT}`);
})