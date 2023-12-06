import React, { useEffect, useState } from 'react'
import {} from 'react';
import './form.css';

function Form() {
    const data={name:"",email:"",password:""};
    let [inputData,setInputData]=useState(data);

    let [flag,setFlag]=useState(false);

   
    

    let formHandler=(e)=>{

        setInputData((inputData)=>({...inputData,[e.target.name]:e.target.value}));
       
        console.log(inputData);

    }
    useEffect(()=>{
        console.log("User is Regidtered");
    },[flag])


    let formSubmit=(e)=>{

        e.preventDefault();
        if(!inputData.name||! inputData.email|| ! inputData.password){
            alert("all Field is mandatory");
        }else{
            setFlag(true)
        }

    }

  return (
   <div className='container'>
    {(flag)?<h3>Hello {inputData.name} ,Register Successfully</h3>:" "}
    <form onSubmit={formSubmit}>
        <div >
            <h2 className="heading" >This is Registration Form</h2>
        </div>

        <div className='formDiv'>
            <input type="text" name="name" placeholder='Enter your name' value={inputData.name} onChange={formHandler}/>
        
       
            <input type="email" name="email" placeholder='Enter your Email' value={inputData.email} onChange={formHandler}/>
      
            <input type="password" name="password" placeholder='Enter your password' value={inputData.password} onChange={formHandler}/>
        </div>
      <div>
        <button type='submit' className='btn'> Submit Here</button>
      </div>
       


    </form>

   </div>
  )
}

export default Form