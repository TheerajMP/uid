const mongoose=require('mongoose')
const postschema=new mongoose.Schema({
    company:String,
    position:String,
    salary:String,
    workinghours:String,
    location:String,
    phoneno:String,
})
const post=mongoose.model("post",postschema)
module.exports=post