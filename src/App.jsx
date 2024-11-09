import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { Route, Routes } from "react-router-dom";
import Chatbot from './pages/AI/Chatbot';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
    </>
  )
}

export default App
