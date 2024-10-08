import React, { useState, useContext, useEffect, useCallback, useRef } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useSocket } from "../../../../contexts/SocketContext";
import Loading from "../../../Loading";
import AccessDenied from "../../../AccessDenied";
import axios from "../../../../Instance/Axios";
import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import LoadingChatArea from "./LoadingChatArea";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const { chatId } = useParams();
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isUserTyping, setUserIsTyping] = useState(false);
  const [content, setContent] = useState("");
  const [loadingChats, setLoadingChats] = useState(true);
  const { authState, loading } = useContext(AuthContext);
  const socket = useSocket();
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoadingChats(true);
        const response = await axios.get(`/chats/messages/private/${chatId}`);
        if (response.data.success) {
          const messagingUser =
            response.data.users[0].id === authState.user.id
              ? response.data.users[1]
              : response.data.users[0];
          setUser(messagingUser);
          setMessages(response.data.chats);
          socket.emit("joinRoom", { chatId });
        }
      } catch (error) {
        console.error("Error fetching user chats", error);
      } finally {
        setLoadingChats(false);
      }
    };
    if (!loading && authState.isAuthenticated && socket) fetchUserProfile();
  }, [chatId, authState, loading, socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    socket.on("userOnline", (userId) => {
      if (userId === user?.id) {
        setUser((prevUser) => ({
          ...prevUser,
          isOnline: true,
        }));
      }
    });

    socket.on("userOffline", (userId) => {
      if (userId === user?.id) {
        setUserIsTyping(false);
        setUser((prevUser) => ({
          ...prevUser,
          isOnline: false,
          lastActive: new Date(),
        }));
      }
    });

    socket.on("messagesSeen", (userId) => {
      if (userId === user?.id) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) => ({ ...msg, read: true }))
        );
      }
    });

    socket.on("typing", ({ userId }) => {
      if (userId === user?.id) {
        setUserIsTyping(true);
      }
    });

    socket.on("stopTyping", ({ userId }) => {
      if (userId === user?.id) {
        setUserIsTyping(false);
      }
    });

    return () => {
      socket.off("message");
      socket.off("userOnline");
      socket.off("userOffline");
      socket.off("messagesSeen");
      socket.off("typing");
      socket.off("stopTyping");
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [socket, user]);

  useEffect(() => {
    const markMessagesARead = async () => {
      if (socket && messages && user && authState.user && messages.some((msg) => !msg.read && msg.sender !== authState.user.id)) {
        try {
          await socket.emit("markMessagesAsRead", { chatId });
        } catch (error) {
          console.error("Error marking messages as read", error);
        }
      }
    };

    markMessagesARead();
  }, [messages, chatId, authState, user, socket]);

  const handleSendMessage = (e) => {
    if (!content) return;
    socket.emit("sendMessage", { chatId, content: content.trim() });
    setContent("");
    socket.emit("stopTyping", { chatId });
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    return;
  };

  const emitTypingEvent = useCallback((chatId) => {
    if (!isTyping) {
      setIsTyping(true);
      socket.emit("typing", { chatId });
    }
  })

  const updateContent = (e) => {
    setContent(e.target.value);
    if (content.length > 0) {
      emitTypingEvent(chatId);

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
        socket.emit("stopTyping", { chatId });
      }, 3000)
    } else {
      socket.emit("stopTyping", { chatId });
      setIsTyping(false);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    }
  };

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <div className="flex flex-col h-dvh">
      <div className="bg-fuchsia-950 min-h-screen flex flex-col">
        <Header user={user} typing={isUserTyping} />
        {loadingChats ? <LoadingChatArea /> : <ChatArea messages={messages} user={user} />}
      </div>
      <Footer
        content={content}
        setContent={updateContent}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default ChatBox;
