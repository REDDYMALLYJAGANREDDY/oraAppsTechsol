import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './app/home/home'

function App() {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-time", experience: "2+ years" },
    { id: 2, title: "Backend Developer", location: "NYC", type: "Contract", experience: "3+ years" }
  ];

  return (
    <>
      <Home jobs={jobs}/>
    </>
  )
}

export default App
