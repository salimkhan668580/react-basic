
import React, { useState, useEffect } from "react";
import axios from "axios";


function Home() {
  const [userData,setUserData]=useState([]);

  useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{

         
           setUserData(response.data);
        });
  },[])
  return (
      <>
    
    {userData.map((data)=>{
      return(
      <div style={{border:"2px solid red"}}>

        <h1>{data.body}</h1>
      </div>
      )
    })
    
    }
      </>
   
  )
}

export default Home
