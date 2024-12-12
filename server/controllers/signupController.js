const signup=require("../model/signup")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const Secret="abc@12";

const Signups=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const sign =await signup.findOne({email:email});
        const hashpassword=await bcrypt.hash(password,10);
        if (sign){
            res.status(400).json({message:"already exists"});
        }
        else{
            const user=await  signup.create({
                name,
                email,
                password:hashpassword
            });
            if(user){
                res.status(200).json({message:"user registered sucessfully"})
                console.log("Registering");
                
            }
            else{
                res.status(400).json({message:"Error while user registing"})
            }
        }
    }catch(error){
        console.log(error)
    }
}

const Login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const log = await signup.findOne({email:email});
        if (!log || !await(bcrypt.compare(password,log.password))){
            const token = await jwt.sign({userId:log._id},Secret,{expiresIn:"30h"})
            res.status(400).json({message:"Login successfil",token});
        }
        else
        {
            res.status(200).json({message:"user login successfull"});
        }}
    catch(error)
    {
        console.log(error)
    }
}

 module.exports= {Signups,Login};
