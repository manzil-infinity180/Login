const mongoose = require("mongoose");
const validator = require('validator');

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
        return (el==this.password);
      },
      message:"Confirm Password must be same as Password"
    }
  }
});

const User = mongoose.model('User',userSchema);
module.exports=User;