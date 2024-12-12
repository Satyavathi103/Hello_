import React ,{useState} from 'react'
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const [name,setname]=useState();
const [email,setemail]=useState();
const [password,setpassword]=useState();
const navigate=useNavigate();


const onsubmit = async(e)=>{
 e.preventDefault() 
  try{
    const sendSign=await fetch(`http://localhost:1000/user/signup`, {
      method:"POST",
      headers:{
        'content-Type':"application/json"
      },
      body:JSON.stringify({name,email,password})
    })
    const response=await sendSign.json();
    if(sendSign.ok){
      alert("Registeration successfull")
      navigate("/home")
    }else{
      alert("Registeration failed")
    }

  }catch (error){
    console.log(error);

  }
}
return(
    <div className={style.full}>
      <div>
      <h1 className={style.hello}>Signup</h1>
      <div>
      <input type="name" name="name" placehplder="Username" onChange={(e)=>setname(e.target.value)} />
      <input type="email" name="email" placehplder="Email"  onChange={(e)=>setemail(e.target.value)}/>
      <input type="password" name="password" placehplder="Pasword" onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div>
      <button onClick={onsubmit} type='submit'>submit</button>
     </div>
     <div>
        <p>
          Already a member? <Link to="/">Login</Link>
        </p>
     </div>
      </div>
    </div>
  )
}

export default Signup;
