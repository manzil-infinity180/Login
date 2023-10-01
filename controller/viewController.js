const User = require("../model/userModel");

exports.getLoginForm = (req,res)=>{
  res.status(200).render('login',{
    title:'LogIn'
  })
}