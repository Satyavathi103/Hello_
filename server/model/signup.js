const mongoose= require("mongoose")



const signupSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    });
    const Signupmodel=mongoose.model("Signup",signupSchema);

    module.exports=Signupmodel;
    



