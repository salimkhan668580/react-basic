import { useState } from 'react'

import './App.css'

function App() {
  let [color,setColor]=useState("gray");

  return (
    <>
    <div className="container mb-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-2"><button className='btn btn-lg btn-danger' onClick={()=>setColor("red")}>Red</button></div>
        <div className="col-md-2"><button  className='btn btn-lg btn-primary' onClick={()=>setColor("blue")}>blue</button></div>
        <div className="col-md-2"><button  className='btn btn-lg btn-success' onClick={()=>setColor("green")}>green</button></div>
        <div className="col-md-2"><button  className='btn btn-lg ' style={{background:"pink"}} onClick={()=>setColor("pink")}>pink</button></div>
      </div>
    </div>
    <div className="salim mt-5 " style={{backgroundColor:color}}>
      
    </div>
   
    </>
  )
}

export default App
