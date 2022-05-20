import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './home';
import Navbar from './navbar'
import About from './aboutme'
import Login from './login'
import Register from './register'
import Contact from './contact';
 import Logout from './Logout';
const App = () => {
  return (
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
          
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Logout" element={<Logout/>}/>

      </Routes>


</BrowserRouter>
  )
}

export default App
