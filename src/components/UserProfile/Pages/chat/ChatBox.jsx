import React from 'react'
import Header from './Header'
import ChatArea from './ChatArea'
import Footer from './Footer'

const ChatBox = () => {
  return (
    <div className="chatbox-container">
    <Header/>
    <ChatArea/>
    <Footer/>
        
    </div>
  )
}

export default ChatBox