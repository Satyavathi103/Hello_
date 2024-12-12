const express = require("express")
const cors = require("cors")
const signup=require('./model/signup')
const userRouter=require("./Routes/userRoutes")
const mongoose = require('mongoose')

const app=express();
mongoose.connect("mongodb://localhost:27017/").then(()=>console.log("mongoose connected successfully")).catch((error)=>console.log(error));

const coreOptions={
    origin: ["http://localhost:5173" ,"http://localhost:5173"], 
    methods: ["POST", "GET"], 
    allowedHeaders:[" content-Type" , " Authorization "], 
    credentials: true, 
    };
    
    app.use(cors(coreOptions)) ;
    app.use(express.json()) ;
    app.use(cors(coreOptions)) ;
    app.use(express.json()) ;

app.get('/',(req,res)=>{
    res.send("Hello world");
});
    

 app.use("/user",userRouter)

app.listen(1000,()=>{
    console.log("server is running")
})

  