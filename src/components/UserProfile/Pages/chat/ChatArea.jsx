import React from 'react';
import { IoCallOutline } from 'react-icons/io5';

const ChatArea = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  // Define chat messages and dates
  const messages = [
    { text: "Hello, how are you?", time: "10:00", date: "Yesterday", type: "received" },
    { text: "I am good, thank you! How about you?", time: "13:05", date: "Yesterday", type: "sent" },
    { text: "I’m doing well, thanks for asking.", time: "20:30", date: "Yesterday", type: "received" },
    { text: "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", time: "20:30", date: "Yesterday", type: "received" },
    { text: "How's your day going?", time: "21:25", date: "Yesterday", type: "sent" },
    { text: "Pretty good, just a bit tired.", time: "21:30", date: "Yesterday", type: "received" },
    { text: "I understand, hope you get some rest soon!", time: "21:35", date: "Yesterday", type: "sent" },
    { text: "Thanks!", time: "21:40", date: "Today", type: "received" },
    { text: "How's your day going?", time: "21:25", date: "Today", type: "sent" },
    { text: "Pretty good, just a bit tired.", time: "21:30", date: "Today", type: "received" },
    { text: "I understand, hope you get some rest soon!", time: "21:35", date: "Today", type: "sent" },
    { text: "Thanks!", time: "21:40", date: "Today", type: "received" },
  ];

  // Extract unique dates from messages
  const uniqueDates = [...new Set(messages.map(msg => msg.date))];

  return (
    <div className="bg-fuchsia-950 min-h-screen flex flex-col">
      <div className="flex items-center justify-between p-6">
        <button
          className="border w-9 h-9 rounded-full flex items-center justify-center"
          onClick={handleBackClick}
        >
          <svg
            className="h-7 w-7 text-stone-100"
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

        <h3 className="text-white text-xl font-medium aldrich-regular text-center flex-grow">
          Catherine Teressa
        </h3>

        <IoCallOutline className="h-6 w-6 text-yellow-400" />
      </div>

      {/* Chat Area */}
      <div className="bg-white rounded-t-3xl flex-grow flex flex-col">
        <div className="flex-grow overflow-y-auto">
          <div className="space-y-4">
            {uniqueDates.map((date, index) => (
              <div key={index}>
                <div className="flex justify-center">
                  <span className="bg-sky-100 text-xs py-1 px-2 rounded-xl mt-1">{date}</span>
                </div>

                {messages
                  .filter(msg => msg.date === date)
                  .map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.type === "received" ? "justify-start" : "justify-end"} mb-2`}
                    >
                      <div
                        className={`p-3 rounded-r-lg relative max-w-[60%] pb-6 ${msg.type === "received" ? "bg-[#7f699b] text-white" : "bg-sky-100 text-black rounded-l-lg pb-6"} ${i > 0 && messages[messages.indexOf(msg) - 1].type === msg.type ? "mt-2" : "mt-4"} `}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <span className="absolute bottom-1 right-2 text-xs">{msg.time}</span>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
