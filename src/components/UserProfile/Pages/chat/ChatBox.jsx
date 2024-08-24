import React from 'react'
import Header from './Header'
import ChatArea from './ChatArea'
import Footer from './Footer'

const ChatBox = () => {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <ChatArea />
      <Footer />
    </div>
  )
}

export default ChatBox