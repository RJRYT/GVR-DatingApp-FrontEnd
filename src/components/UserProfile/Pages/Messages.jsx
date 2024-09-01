import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import NavBar from "../../Dashboard/Navbar";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import axios from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";
import { useSocket } from "../../../contexts/SocketContext";

const recentMatches = [
  {
    name: "Alfredo Calzoni",
    avatar:
      "https://healthfactorial.s3.amazonaws.com/media/public/posts_images/food.jpg",
  },
  {
    name: "Clara Hazel",
    avatar:
      "https://i.postimg.cc/SxS03Zmt/1000-F-415160354-l-Yhr-Kts4hrgda-JXKVCthy-J8f-K3-Zn17nc.jpg",
  },
  {
    name: "Brandon",
    avatar:
      "https://th.bing.com/th/id/OIP.SwRgsiaRUcQte2MrDaP4dQHaEo?rs=1&pid=ImgDetMain0",
  },
  {
    name: "Amina Mina",
    avatar:
      "https://i.postimg.cc/wx7Cdy8g/360-F-630981329-WRk-GMr-Gv456oj-PXeoxgf-YHh66qr-F8r-JU.jpg",
  },
];

function formatChatTime(timestamp) {
  const now = moment();
  const time = moment(timestamp);

  // If the timestamp is from today
  if (time.isSame(now, "day")) {
    return time.format("h:mm A"); // Example: "9:34 AM"
  }

  // If the timestamp is from yesterday
  if (time.isSame(now.subtract(1, "day"), "day")) {
    return "Yesterday";
  }

  // If the timestamp is older than yesterday
  return time.format("DD/MM/YYYY"); // Example: "21/12/2024"
}

const MessageTimeStamp = ({ timestamp }) => {
  return <span>{formatChatTime(timestamp)}</span>;
};

const Messages = () => {
  // State to hold the users
  const [chats, setChats] = useState(null);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);
  const socket = useSocket();

  const fetchChats = useCallback(async () => {
    try {
      const response = await axios.get("/chats/list");
      if (response.data.success) {
        setChats(response.data.chats);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingOverlay(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && authState.isAuthenticated) fetchChats();
  }, [fetchChats, loading, authState]);

  useEffect(() => {
    if (!socket) return;

    socket.on("UpdateLastMessage", (newMessage, chatId) => {
      setChats((prevChats) => {
        const updatedChats = prevChats.map((chat) =>
          chat.chatId === chatId
            ? {
              ...chat,
              lastMessage: {
                text: newMessage.content,
                read: newMessage.sender === authState.user.id ? true : newMessage.read,
                timestamp: newMessage.createdAt,
              },
              isNew: false,
            }
            : chat
        );
        return updatedChats;
      });
    });

    return () => {
      socket.off("UpdateLastMessage");
    };
  }, [socket]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="bg-[#4b104d]">
        <Header />
        <RecentMatches matches={recentMatches} />
        <MessageList messages={chats} />
        <NavBar />
      </div>
    </>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-10">
    <button className="border w-11 h-11 mt-6 ml-6 rounded-full">
      <svg
        className="h-8 w-8 ml-1 text-stone-100"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="15 6 9 12 15 18" />
      </svg>
    </button>
    <h1 className="text-white text-3xl mt-5 mr-7 font-medium">Messages</h1>
    <div className="w-6"></div>
  </div>
);

const RecentMatches = ({ matches }) => (
  <div className="mb-10">
    <h2 className="text-white text-xl  ml-10">Recent Matches</h2>
    <div className="overflow-x-auto mt-4 hide-scrollbar">
      <div className="flex gap-4 items-center ml-12">
        {matches.map((match, index) => (
          <div
            key={index}
            className="flex-none w-28 h-32 rounded-xl overflow-hidden relative"
          >
            <img
              src={match.avatar}
              alt={match.name}
              className="w-full h-full object-cover"
            />

            {match.name === "Alfredo Calzoni" && (
              <>
                <div className="absolute inset-0 bg-fuchsia-300 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MessageList = ({ messages }) =>
  messages ? (
    <div className="bg-white rounded-t-3xl p-5 mt-10 overflow-auto pb-20">
      {messages.map((message, index) => (
        <Link
          to={`/dashboard/chat/${message.chatId}`}
          key={index}
          className="flex items-center border-b border-gray-100 py-6"
        >
          <div className="flex-none w-16 h-16 rounded-full overflow-hidden">
            <img
              src={message.user.profilePic.url}
              alt={message.user.username}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-black text-2xl font-normal">
                {message.user.username}
              </h3>
              <span className="text-gray-500 text-lg ml-4">
                {message.lastMessage.timestamp ? (
                  <MessageTimeStamp timestamp={message.lastMessage.timestamp} />
                ) : null}
              </span>
            </div>
            <p className={`text-gray-800 text-lg ${(message.isNew || !message.lastMessage.read) ? "font-semibold" : ""}  truncate`}>
              {trimMessage(message.lastMessage.text,30)}
            </p>
          </div>

          {(message.isNew || !message.lastMessage.read) && (
            <span className="w-3 h-3 bg-[#da6fde] rounded-full"></span>
          )}
        </Link>
      ))}
    </div>
  ) : (
    <p className="p-6 text-center flex items-center justify-center text-xl text-gray-700">
      Nothing to show
    </p>
  );

const trimMessage = (message, maxLength = 30) => {
  if (message.length > maxLength) {
    return `${message.slice(0, maxLength)}...`;
  }
  return message;
};

export default Messages;
