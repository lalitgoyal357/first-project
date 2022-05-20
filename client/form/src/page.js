import React from 'react'


const page = () => {
    const[user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

    let name, value;
    const handleInput=((e)=>{
        name=e.target.name;
        value=e.trget.value;
        setUser({...user,[name]:value})
    })
  return (
    <Form >
      <input type="text" name="name" id="name" value={user.name} onChange={handleInput}placeholder='your name'>name</input>
      <input type="email" name="email" id="email" value={user.email} onChange={handleInput}placeholder='your email' >email</input>
      <input type="phone" name="phone" id="phone" value={user.phone} onChange={handleInput}placeholder='your phone'>phone</input>
      <input type="work" name="work" id="work" value={user.work} onChange={handleInput}placeholder='your work'>work</input>
      <input type="password" name="password" id="password" value={user.password} onChange={handleInput}placeholder='your password'>password</input>
      <input type="cpassword" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInput}placeholder='your cpassword'>cpassword</input>
      
    </Form>
  )
}

export default page
