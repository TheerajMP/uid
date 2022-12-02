const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    username:String,
    password:String,
    confirmpassword:String
})
const users=mongoose.model("users",userschema)
module.exports=users