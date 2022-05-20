import React, { useEffect,useState } from "react";
import{useNavigate} from "react-router-dom"

const About = () => {
  const history=useNavigate();
  const[userdata,setUserData]=useState([]);
  // const callAboutPage = async () => {
  //   try {
  //     const res = await fetch("/about", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json"
  //       },
  //       credentials: "include"
  //     });
  //     const data = await res.json();
  //     setUserData(data)
  //     console.log("mydata", data);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (error) {
  //     console.log("error");
  //     history("/login")
  //   }
  // };

  useEffect(() => {
    
    const callAboutPage = async () => {
      try {
        const res = await fetch("/about", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          credentials: "include"
        });
        const data = await res.json();
        setUserData(data)
        console.log("mydata", data);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log("error");
        history("/login")
      }
    };
  
    callAboutPage();
  }, []);
  return (
    <form method="GET">
      <h1>{userdata.name}</h1>
      <h2>{userdata.work}</h2>
      <h3>{userdata.email}</h3>
      <h4>{userdata.phone}</h4>
    </form>
  );
};

export default About;