const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema =new mongoose.Schema({
  email:{
    type:String,
    required:[true,'User cannot without emailId'],
    unique:[true,'User Already exist with this email'],
    lowercase:true,
    validate : [validator.isEmail,'Please Provide Valid Email'],
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  password:{
    type:String,
    required:[true,'Without password you can not signup/login']
  },
  confirmPassword:{
    type:String,
    required:[true,'Without password you can not signup/login'],
    validate:{
      validator:function(el){
        return (el===this.password);
      },
      message:"Confirm Password must be same as Password"
    }
  },
  photo : String,
  resetPasswordToken : String
});

userSchema.pre('save',async function(next){
  if(!this.isModified('password')) {return next();}
  this.password = await bcrypt.hash(this.password,10);
  this.confirmPassword = undefined;
  next();
});
// Instance function 
userSchema.methods.correctPassword = async function(plainPassword , hashedPasswod){
  return (await bcrypt.compare(plainPassword,hashedPasswod));
}

userSchema.methods.createPasswordResetToken = function(){
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  console.log(`resetToken - resetPasswordToken ${resetToken}`,this.resetPasswordToken);
  return resetToken;  
}


const User = mongoose.model('User',userSchema);
module.exports=User;