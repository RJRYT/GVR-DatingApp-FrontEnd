import React from 'react'
import ChatArea from './ChatArea'
import Footer from './Footer'

const ChatBox = () => {
  return (
    <div className="flex flex-col h-dvh">
      <ChatArea />
      <Footer />
    </div>
  )
}

export default ChatBox