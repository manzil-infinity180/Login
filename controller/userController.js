// const mongoose = require("mongoose");
const User = require("./../model/userModel");
const jwt = require("jsonwebtoken");

const signin = (id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE
  })
}
const createSendToken = (user,res)=>{
  const token = signin(user._id);
  console.log(token);
  // const cookieOpt = {
  //   expires : new Date(Date.now() + process.JWT_COOKIE_EXPIRE * 24*60*60*1000),
  //   httpOnly : true
  // }
  res.cookie('Login',token,{
    httpOnly: true
  });
}
exports.getAll = async(req,res,next)=>{
  try{
    const user = await User.find();
    res.status(200).json({
      'status':'Success',
      data:{
        user
      }
    });
  }catch(err){
    res.status(404).json({
      'status':'Failed',
      err:err.message
    });
  }
}
exports.signup = async(req,res,next)=>{
  try{
    console.log(req.body);
    // I do not know why the validator is not working 
    // const user = await User.findOne({email:req.body.email});
    // if(user) throw new Error('User already exist. Head over to /api/v1/user/login');
    const newuser = await User.create({
      email:req.body.email,
      password:req.body.password,
      confirmPassword:req.body.confirmPassword
    });
    console.log("👷‍♀️"+newuser);
    // const user = await User.create(req.body);

    createSendToken(newuser._id,res);
    const token = signin(newuser._id);
    res.status(200).json({
      'status':'Success',
      token,
      data:{
        newuser
      }
    });
  }catch(err){
    res.status(404).json({
      status:'Failed',
      err:err.message
    });
  }
};
exports.login = async(req,res,next)=>{
  try{
    const {email,password}=req.body;
    console.log("🛫"+email,password);
    if(!email || !password){
      throw new Error('Email & Password is Required Field');
    }
    const user = await User.findOne({email:email}).select('+password');
    // console.log(password , user.password);
    if(!user || (password!==user.password)){
      throw new Error('Invalid email or password! Please try again');
    }
    // const token =`${Math.random()*23344444333}`;
    // res.cookie('Login',token,{
    //   httpOnly:true
    // });
    // console.log("Rahul");
    // console.log(req.Cookies);
    user.password=undefined
    user.confirmPassword=undefined
    console.log(user);
    createSendToken(user._id,res);
    const token = signin(user._id);
    res.status(200).json({
      status:'Success',
      message:"You successfully LOGIN ",
      token,
      data:{
        user
      },
    });

  }catch(err){
    res.status(404).json({
      status:'Failed',
      err : err.message
    })

  }
}