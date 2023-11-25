import { useState } from "react";

function Count(){

    let [count,setCount]=useState(0);

    let inc=()=>{
        setCount(count+1);
    }
    let dec=()=>{
        setCount(count-1);
    }
    return(
        <>
 <h1>Count = {count}</h1>

 <span><button onClick={inc}>Increment</button></span>
 <span><button onClick={dec}>Decremnet</button></span>


        
        
        </>
    )
}

export default Count;