// import React,{useState} from "react";

// const Register = () => {

//   const[user,setUser]=useState({
//     nameemail:"",phone:"",work:"",password:"",cpassword:""
// })

// let name, value;
// const handleInput=((e)=>{
//     name=e.target.name;
//     value=e.trget.value;
//     setUser({...user,[name]:value})
// })
// return (
// <div >
//   <input type="text" name="name" id="name" value = {user.name} onChange={handleInput} placeholder='your name'>name</input>
//   <input type="email" name="email" id="email" value = {user.email} onChange={handleInput}placeholder='your email' >email</input>
//   <input type="phone" name="phone" id="phone" value = {user.phone} onChange={handleInput}placeholder='your phone'>phone</input>
//   <input type="work" name="work" id="work" value = {user.work} onChange={handleInput}placeholder='your work'>work</input>
//   <input type="password" name="password" id="password" value = {user.password} onChange={handleInput}placeholder='your password'>password</input>
//   <input type="cpassword" name="cpassword" id="cpassword" value = {user.cpassword} onChange={handleInput}placeholder='your cpassword'>cpassword</input>
  
//    </div>
//     );
//   };
  
//   export default Register;

import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
const Register = () => {


    const history=useNavigate();
     const[user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
}); 

let name;
let value;

const handleInput=((e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
})


const postData=async(e)=>{
    e.preventDefault();
    const{ name, email,phone,work,password,cpassword}=user
    const res= await fetch("/regi",{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            name, email,phone,work,password,cpassword
        })
    });
    const data=await res.json();
    if(res.status===422 || !data){
        window.alert("reg faile");
        console.log("invalid regis")
    }else{
        window.alert("reg sucess");
        console.log("res sucess")
        history('/login')
    }

}
return (
<form>
  <input type="text" name="name" id="name" value = {user.name} onChange={handleInput} placeholder='your name'/>
  <input type="email" name="email" id="email" value = {user.email} onChange={handleInput}placeholder='your email' />
  <input type="phone" name="phone" id="phone" value = {user.phone} onChange={handleInput}placeholder='your phone'/>
  <input type="work" name="work" id="work" value = {user.work} onChange={handleInput}placeholder='your work'/>
  <input type="password" name="password" id="password" value = {user.password} onChange={handleInput}placeholder='your password'/>
  <input type="password" name="cpassword" id="cpassword" value = {user.cpassword} onChange={handleInput}placeholder='your cpassword'/>
  <button onClick={postData}>submit</button>
   </form>
    );
 
}

export default Register

  