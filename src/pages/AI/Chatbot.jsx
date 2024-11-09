import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'

const Chatbot = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Main />
      </div>
    </div>
  )
}

export default Chatbot
