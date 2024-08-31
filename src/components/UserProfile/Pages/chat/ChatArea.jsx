import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import Loading from "../../../Loading";
import AccessDenied from "../../../AccessDenied";
import moment from "moment"; // Use moment.js to handle date formatting

const ChatArea = ({ messages, user }) => {
  const { authState, loading } = useContext(AuthContext);
  const chatEndRef = useRef(null);

  const groupMessagesByDate = () => {
    const groupedMessages = {};
    messages.forEach((message) => {
      const messageDate = moment(message.timestamp).startOf("day");
      const today = moment().startOf("day");
      const yesterday = moment().subtract(1, "days").startOf("day");

      let dateKey;

      if (messageDate.isSame(today)) {
        dateKey = "Today";
      } else if (messageDate.isSame(yesterday)) {
        dateKey = "Yesterday";
      } else {
        dateKey = messageDate.format("DD/MM/YYYY");
      }

      if (!groupedMessages[dateKey]) {
        groupedMessages[dateKey] = [];
      }

      groupedMessages[dateKey].push(message);
    });

    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate();

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to bottom when component mounts (on join)
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to bottom when new message comes in
    scrollToBottom();
  }, [messages]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <div className="bg-gray-200 overflow-y-auto">
      <ul className="p-4 space-y-4 pb-10">
        <li className="flex justify-center">
          <span className="bg-gray-300 text-xs py-1 px-2 rounded-xl">
            This is the very beginning of your legendary conversation with{" "}
            {user?.username}
          </span>
        </li>
        {messages.length ? (
          Object.keys(groupedMessages).map((dateKey, index) => (
            <React.Fragment key={index}>
              <li className="flex justify-center">
                <span className="bg-gray-300 text-xs py-1 px-2 rounded-xl">
                  {dateKey}
                </span>
              </li>
              {groupedMessages[dateKey].map((message, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 ${
                    message.sender === authState.user.id ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender !== authState.user.id && (
                    <img
                      src={user.profilePic.url} 
                      alt={user.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
                    <div className="flex justify-between items-center gap-2">
                      <div>
                        <p className="font-bold">
                          {message.sender === authState.user.id
                            ? "You"
                            : user.username}
                        </p>
                        <p className="text-xs text-gray-600">
                          {message.content}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 text-nowrap mt-auto">
                        {moment(message.createdAt).format("h:mm A")}
                      </span>
                    </div>
                  </div>
                  {message.sender === authState.user.id && (
                    <img
                      src={authState.user?.profilePic.url}
                      alt={authState.user?.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                </li>
              ))}
            </React.Fragment>
          ))
        ) : (
          <li className="flex justify-center">
            <span className="bg-gray-300 text-xs py-1 px-2 rounded-xl">
              Welcome to the chat! Say hi and start the conversation.
            </span>
          </li>
        )}
        <div ref={chatEndRef} />
      </ul>
    </div>
  );
};

export default ChatArea;
