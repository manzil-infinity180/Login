const User = require("../model/userModel");

exports.getOverView = (req,res)=>{
  res.status(200).render('base',{
    title: 'Overview'
  })
}
exports.getLoginForm = (req,res)=>{
  res.status(200).render('login',{
    title:'LogIn'
  })
}
exports.createAccount = (req,res)=>{
  res.status(200).render('signup',{
    title: 'Sign Up'
  })
}
exports.forgotPassword = (req,res)=>{
  res.status(200).render('forgotPassword',{
    title : 'Forgot Password' 
  })
}
exports.updateMyPassword = (req,res)=>{
  res.status(200).render('updateMyPassword',{
    title : 'Update Password' 
  })
}
exports.registration = (req,res)=>{
  res.status(200).render('registration',{
    title : 'Fresh Account' 
  })
}
