import React from 'react'
import Navbar from '../Compnents/Navbar'
import Hero from '../Compnents/Hero'
import Lineup from '../Compnents/Lineup'
import Tickets from '../Compnents/Tickets'
import Schedule from '../Compnents/Schedule'


function App() {
  return (
    <div>
     <Navbar /> 
     <Hero/>
     <Lineup/>
     <Tickets/>
     <Schedule/>
    </div>
  )
}

export default App
