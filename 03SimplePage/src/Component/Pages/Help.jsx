import React from 'react'
import { useLocation } from 'react-router-dom'

function Help() {
  let location=useLocation();
  return (
    <div>

      <h1>THis is Helping page and your id is = {location.state.id}</h1>
    </div>
  )
}

export default Help