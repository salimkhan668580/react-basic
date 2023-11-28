import React, { useState } from 'react'

function Comment() {
    let [formData,setFormData]=useState({
      userName:"",
      remark:"",
      rating:5
    });

    let formHandler=(e)=>{
        setFormData((currData)=>{
      
            return {...currData,[e.target.name]:e.target.value};
         });
    };

    let formSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        setFormData({
            userName:"",
            remark:"",
            rating:5
        });
    }


  return (
   <>
   <h1>Add Some Comment</h1>

   <form onSubmit={formSubmit}>
    <input type="text" placeholder='UserName' name='userName' onChange={formHandler} value={formData.userName}/>
    <br />
    <input type="text" placeholder='Remark' name='remark' onChange={formHandler} value={formData.remark}/>
    <br />
    <input type="number"  min={1} max={5} onChange={formHandler} name='rating' value={formData.rating}/>
    <br /><br />
    <button>Submit</button>
   </form>
   
   
   </>
  )
}

export default Comment