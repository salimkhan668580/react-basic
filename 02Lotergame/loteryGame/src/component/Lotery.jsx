
import React from 'react'
import { useState } from 'react'
import'./Lotery.css'
import { getTicket,sum } from './Helper';


function Lotery() {
  let [ticket,setTicket]=useState(getTicket(3));
  let isWinnig=sum(ticket)===15;


  let buy=()=>{
    setTicket(getTicket(3));
  }
  return (
    <>
<h1>This is loter game !</h1>

<div className='ticket'>
    
    <span>{ticket[0]}</span>
    <span>{ticket[1]}</span>
    <span>{ticket[2]}</span>

</div>
    <h4>{isWinnig && "Congratulation you win !"}</h4>
    <br />
    <button onClick={buy}>Buy Ticket</button>

    </>

    
  )
}

export default Lotery