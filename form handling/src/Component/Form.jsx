import React, { useState } from 'react'

function Form() {

    let [fullName,setFullName]=useState("");
    let nameHandler=(e)=>{
        setFullName(e.target.value);
    }

  return (
    <>

    <input type="text" placeholder='Enter your name' value={fullName} onChange={nameHandler}/>
    <br />
    <br />

    <button>Submit</button>
    
    
    </>
  )
}

export default Form