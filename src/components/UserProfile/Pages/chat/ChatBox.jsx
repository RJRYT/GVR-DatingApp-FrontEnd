import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useSocket } from "../../../../contexts/SocketContext";
import Loading from "../../../Loading";
import LoadingOverlay from "../../../Loading/LoadingOverlay";
import AccessDenied from "../../../AccessDenied";
import axios from "../../../../Instance/Axios";
import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ChatBox = () => {
  const { chatId } = useParams();
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const { authState, loading } = useContext(AuthContext);
  const socket = useSocket();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/chats/messages/private/${chatId}`);
        if (response.data.success) {
          const messagingUser =
            response.data.users[0].id === authState.user.id
              ? response.data.users[1]
              : response.data.users[0];
          setUser(messagingUser);
          setMessages(response.data.chats);
          socket.emit("joinRoom", {chatId});
        }
      } catch (error) {
        console.error("Error fetching user chats", error);
      } finally {
        setLoadingOverlay(false);
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

    // Listen for offline status updates
    socket.on("userOffline", (userId) => {
      if (userId === user?.id) {
        setUser((prevUser) => ({
          ...prevUser,
          isOnline: false,
          lastActive: new Date(), // Set the last active time to the current time
        }));
      }
    });

    return () => {
      socket.off("message");
      socket.off("userOnline");
      socket.off("userOffline");
    };
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!content) return;
    socket.emit("sendMessage", { chatId, content });
    setContent("");
    return;
  };

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="flex flex-col h-dvh">
        <Header user={user} />
        <ChatArea messages={messages} user={user} />
        <Footer
          content={content}
          setContent={setContent}
          onSend={handleSendMessage}
        />
      </div>
    </>
  );
};

export default ChatBox;
