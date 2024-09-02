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
      const messageDate = moment(message.createdAt).startOf("day");
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
    <div className="bg-white rounded-t-3xl flex-grow flex flex-col">
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-4 pb-10">
          <li className="flex justify-center">
            <span className="bg-gray-300 text-xs py-1 px-4 rounded-lg border">
              This is the very beginning of your legendary conversation with{" "}
              {user?.username}
            </span>
          </li>
          {messages.length ? (
            Object.keys(groupedMessages).map((dateKey, index) => (
              <React.Fragment key={index}>
                <li className="flex justify-center">
                  <span className="bg-gray-300 text-xs py-1 px-4 rounded-lg border">
                    {dateKey}
                  </span>
                </li>
                {groupedMessages[dateKey].map((message, idx) => (
                  <li
                    key={idx}
                    className={`flex ${
                      message.sender === authState.user.id
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      style={{ wordBreak: "break-word" }}
                      className={`p-3 rounded-none relative break-words min-w-[20%] max-w-[60%] ${
                        message.sender === authState.user.id
                          ? "bg-sky-100 text-black rounded-l-lg"
                          : "bg-[#7f699b] text-white rounded-r-lg"
                      } ${
                        idx > 0 &&
                        groupedMessages[dateKey][
                          groupedMessages[dateKey].indexOf(message) - 1
                        ].sender === message.sender
                          ? "mt-2"
                          : "mt-4"
                      } `}
                    >
                      <p className="text-sm mb-2">{message.content}</p>
                      <span className="absolute bottom-1 text-nowrap right-2 text-xs">
                        {message.sender === authState.user.id && message.read
                          ? "seen | "
                          : ""}{" "}
                        {moment(message.createdAt).format("h:mm A")}
                      </span>
                    </div>
                  </li>
                ))}
              </React.Fragment>
            ))
          ) : (
            <li className="flex justify-center">
              <span className="bg-gray-300 text-xs py-1 px-4 rounded-lg border">
                Welcome to the chat! Say hi and start the conversation.
              </span>
            </li>
          )}
          <div ref={chatEndRef} />
        </ul>
      </div>
    </div>
  );
};

export default ChatArea;
