const dotenv=require('dotenv')
const mongoose=require("mongoose")
const express=require("express");
const cookieParser = require('cookie-parser')

const app=express();
app.use(cookieParser())


app.use(express.json())
app.use("/",require('./router/auth'));



const DB1= "mongodb+srv://ramsita:ramsita@cluster0.xucco.mongodb.net/user?retryWrites=true&w=majority"
//const User= require('./model/modelSchema');
//link router

mongoose.connect(DB1,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then( ()=>{
    console.log(` server connected`)
}).catch((err) =>console.log(err, `no connecton`))   





// app.get('/',(req,res)=>{
//     res.send("hellow i am app")
// })
// app.get('/about',middleware,(req,res)=>{
//     res.send("hellow i am about")
// })
app.get('/contact',(req,res)=>{
  
    res.send("hellow i am contact")
})
app.get('/signin',(req,res)=>{
    res.send("hellow i am signin")
})
app.get('/signout',(req,res)=>{
    res.send("hellow i am  sign out")
})


app.listen(5000,()=>{
    console.log(`server runing 5000`)
})