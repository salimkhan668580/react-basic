
import React, { useState, useEffect } from "react";
import axios from "axios";
    import { useNavigate } from "react-router-dom";


function Home() {
  const [userData,setUserData]=useState([]);
  let navi=useNavigate();

  useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{

         
           setUserData(response.data);
        });
  },[])
  let submitHalndler=()=>{
         let id=200002
       
         navi("/help",{state : {id : id}});
  }
  return (
      <>
    
    {userData.map((data)=>{
      return(
      <div style={{border:"2px solid red"}}>

        <h1>{data.body}</h1>
        <button onClick={submitHalndler}>Go to the help</button>
      </div>
      )
    })
    
    }
      </>
   
  )
}

export default Home
