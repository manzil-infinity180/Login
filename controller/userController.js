// const mongoose = require("mongoose");
const { reset } = require("nodemon");
const User = require("./../model/userModel");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/email");
const Register = require("./../model/registerModel");
const crypto = require ("crypto");
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

    if(!user || !user.correctPassword(password,user.password)){
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
// Register New User - Full detail 
exports.registration = async (req,res,next)=>{
  try{
    const newuser = await Register.create({
      email:req.body.email,
      password:req.body.password,
      confirmPassword:req.body.confirmPassword,
      name:req.body.name,
      job:req.body.job,
      language:req.body.language
    });
    console.log(req.body.email);
    console.log(newuser);
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
      err: err.message
    })

  }


}

exports.forgotPassword = async (req,res,next)=>{
  const user = await User.findOne({email :req.body.email});
  console.log(req.body.email);
  console.log(user);
     if(!user){
      throw new Error('User does not exist!!!');
     }
     const resetToken = user.createPasswordResetToken();
     await user.save({validateBeforeSave : false});
     console.log("Reset Token : "+resetToken);

     const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/user/resetPassword/${resetToken}`;
     const message =`Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetUrl}.\nIf you didn't forget your password, please ignore this email!`

  try{
     
     await sendEmail({
      email: user.email,
      subject : 'Your password reset token is Valid for next 10 minutes ONLY!',
      message
     });
     res.status(200).json({
      status:'Success',
      message:'Token sent Successfully'
     })
  }catch(err){
    user.resetPasswordToken = undefined;
    await user.save({validateBeforeSave: false});
    res.status(404).json({
      status:'Failed',
      err : err.message
    })
  }
}
exports.resetPassword = async (req,res,next)=>{
  try{
    console.log(req.params.token);
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    // console.log("hashed Token : "+ hashedToken);
    // const user = await User.findOne({resetPasswordToken: hashedToken});
    const user = await User.findOne({email : req.body.email});
    console.log(user);
    if(!user) throw new Error("Token is invalid or expired !!!");
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.resetPasswordToken = undefined;
    await user.save();
    createSendToken(user,res);
    res.status(200).json({
      status:'Success',
      token,
      data:{
        user
      }
    })
  }catch(err){
    res.status(404).json({
      status:'Failed',
      err:err.message
    })
  }
 

}