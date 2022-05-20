import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const history=useNavigate();
 // promise
useEffect(()=>{
 fetch('/Logout',{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"

    },
    credentials:"include",
  }).then((res)=>{
    history("/login",{replace:true});
    if(res.status !== 200){
      const err= new Error(res.err);
      throw err;
    }
  }).catch((err)=>{
    console.log(err)
  });

},[])


  return (
    <div>
        bye bbye
      
    </div>
  )
}

export default Logout
