const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
  email:{
    type:String,
    trim:true,
    lowercase:true,
    required:[true,'User cannot without emailId'],
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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