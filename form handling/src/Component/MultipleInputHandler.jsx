import React, { useState } from 'react'

function MultipleInputHandler() {
    let [formData,setformData]=useState({
        fullName:"",
        userName:"",
        password:""
    });

    let handelInputChange=(e)=>{
     setformData((currData)=>{
      
        return {...currData,[e.target.name]:e.target.value};
     });
    };

    let handelSubmit=(e)=>{
        console.log(formData);
       e.preventDefault();
       setformData({
        fullName:"",
        userName:"",
        password:""
       });
    };
  return (
<>
<form onSubmit={handelSubmit}>
<input type="text"  placeholder='Enter your Name' value={formData.fullName} onChange={handelInputChange} name='fullName'/>
<br />
<input type="text" placeholder='UserName' value={formData.userName}  onChange={handelInputChange} name='userName'/>
<br />
<input type="password"  placeholder='Password' value={formData.password} onChange={handelInputChange} name='password'/>
<br />
<br />
<button>Submit</button>
</form>

</>

  )
}

export default MultipleInputHandler