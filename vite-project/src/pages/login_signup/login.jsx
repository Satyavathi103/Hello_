import React,{useState} from 'react';
import {Link} from "react-router-dom";
import style from "./login.module.css";
import { useNavigate } from 'react-router-dom';
const login = () => {
  
  const [email,setemail]=useState();
  const [password,setpassword]=useState();
  const navigate=useNavigate();
  
  const onsubmit = async(e)=>{
   e.preventDefault() 
    try{
      const sendSign=await fetch(`http://localhost:1000/user/login`, {
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({email,password})
      })
         const response=await sendSign.json();
         
      if(sendSign.ok){
        alert("Login successfull")
        localStorage.setItem("token",response.token)
        navigate("/home")
      }else{
        alert("Registeration failed")
      }
  
    }catch (error){
      console.log(error);
    }
  }
  
  return (
    <div className={style.full}>
      
        <h1 className={style.hello}>Login</h1>
        <div>
            <input type ="email" name="email" id="" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div>
            <input type="password" name="password" id="" placeholder="password"onChange={(e)=>setpassword(e.target.value)}/>
            
            </div>
             <div>
        <button onClick={onsubmit} type='submit'>submit</button>
        </div>
        <div>
            <p>dont have account?<Link to="/signup">Signup</Link> </p>
        </div>
      
    </div>
  );
};


export default login;
