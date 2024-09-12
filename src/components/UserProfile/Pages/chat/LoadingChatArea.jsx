import React from "react";

const LoadingChatArea = () => {
  return (
    <div className="bg-white rounded-t-3xl flex-grow flex flex-col">
      <div className="flex-grow h-[calc(100vh-84px)] rounded-t-3xl flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="animate-spin border-b-4 border-gray-500 border-t-4 h-5 rounded-full w-5"></div>
          <p className="font-semibold text-gray-500 text-xl">Loading chat...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingChatArea;
