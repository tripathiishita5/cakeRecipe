// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './Components/Body'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
    
  )
}

export default App
