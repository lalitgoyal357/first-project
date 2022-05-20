import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const history=useNavigate();

  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  const loginUser=async(e)=>{
    e.preventDefault();
  
    const res= await fetch("/signin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });
    const data= await res.json();
    console.log("data",data)
    if(res.status===400|| !data){
        window.alert("reg fail");
        console.log("invalid regis")
    }else{
        window.alert("reg sucess");
        console.log("res sucess")
        history('/')
    }

}



  
    return (
      <div className="container">
        <div className="login">
          <h1>Login</h1>
        </div>
        <form method="POST">
          <span className="name">Name</span>
          <input
            className="inputname"
             value={email} onChange={(e)=>setEmail(e.target.value)}type="text"
            placeholder="enter your Name"
          />
        
        <div>
          <span className="name">Password</span>
          <input className="name"  value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="enter your Password" />
        </div>
                  <button  className="signin"  onClick={loginUser } > 
           Sign In 
          </button>
          </form>
        </div>
     
    );
  };
  
  export default Login;
