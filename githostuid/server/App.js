const express=require('express')
const app=express()
const db=require("./config/db")()
const cors=require("cors")
const bodyparser=require("body-parser")
const usermodel=require("./models/user")
const post=require("./models/post")
const apply=require("./models/apply")

app.use(cors())
app.use(express.json())
app.use(bodyparser.json({extended:true}))
app.post("/signup",(req,res)=>{
    const user=new usermodel(
            {username,password,confirmpassword}=req.body
    )
    user.save()
    res.json("successfully signed")
})
app.post("/login",async(req,res)=>{
    const {username,password}=req.body
    const user =await  usermodel.findOne({username:username})
    if(!user){
        res.json("usernotfound")
    }else{
        res.json("successfully logined")
    }
   
})

app.post("/postjob",(req,res)=>{
    const user=new post(
            {company,position,salary,workinghours,location,phoneno}=req.body
    )
    user.save()
    res.json("successfully posted a job")
})
app.post("/applyjob",(req,res)=>{
    const user=new apply(
            {name,email,comapny,positionyouwish,extraskills}=req.body
    )
    user.save()
    res.json("successfully applied for a job")
})

app.get("/display",async(req,res)=>{
    const user=await post.find()
    res.json(user)
})

app.use('/',(req,res)=>{
    res.send("hello")
}).listen(8080)
