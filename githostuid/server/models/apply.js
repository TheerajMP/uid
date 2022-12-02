const mongoose=require('mongoose')
const applyschema=new mongoose.Schema({
    name:String,
    email:String,
    company:String,
   
    positionyouwish:String,
    extraskills:String
})
const apply=mongoose.model("apply",applyschema)
module.exports=apply