import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import Navbar from './Component/Layout/Header/Header'
import Home from './Component/Pages/Home'
import Contact from './Component/Pages/Contact'
import About from './Component/Pages/About'
import Help from './Component/Pages/Help';


function App() {
 

  return (
    <>
     <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
        
          <Route path="/About" element={<About/>} />
          <Route path="/Help" element={<Help/>} />
        </Routes>
      
      </Router>
    
    </>
  )
}

export default App
