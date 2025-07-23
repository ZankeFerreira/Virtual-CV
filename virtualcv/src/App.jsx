import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
 

  return (
    <>
    <title>Zanke Ferreira Portfolio</title>

    <div>
      <Header font = "arial"/>
      <About className = "border About"/>
      <Contact className = "border Contact"/> 
    </div>
    
  
    </>
  )
}

export default App
