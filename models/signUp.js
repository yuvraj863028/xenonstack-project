const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    }
});

const SignUp = mongoose.model('SignUp',signupSchema);
module.exports = SignUp; 