// const mongoose = require("mongoose");
const User = require("./../model/userModel");

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
    const newuser = await User.create(req.body);
    // const user = await User.create(req.body);
    res.status(200).json({
      'status':'Success',
      data:{
        newuser
      }
    });
  }catch(err){
    res.status(404).json({
      'status':'Failed',
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
    user.password=undefined
    user.confirmPassword=undefined
    console.log(user);
    res.status(200).json({
      status:'Success',
      message:"You successfully LOGIN ",
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