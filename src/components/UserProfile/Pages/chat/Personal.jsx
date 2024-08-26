import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import Footer from "../chat/Footer"

const Personal = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <>
      <div className="bg-fuchsia-950">
        <div className="flex items-center justify-between mb-10">
          <button
            className="border w-11 h-11 mt-6 ml-6 rounded-full flex items-center justify-center"
            onClick={handleBackClick}
          >
            <svg
              className="h-8 w-8 text-stone-100"
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

          <h3 className="text-white text-xl font-medium aldrich-regular flex-grow text-center mt-5">
            Catherine Teressa
          </h3>

          <IoCallOutline className="h-8 w-8 text-yellow-400 mt-5" />

          {/* Empty space for alignment */}
          <div className="w-11 h-11 mt-8 ml-6"></div>
        </div>

        <div className="bg-white rounded-t-3xl min-h-screen  mt-4 relative flex flex-col">
          {/* Date Label */}
          <div className="flex justify-center mb-4">
            <span className="bg-sky-100 text-xs py-1 px-2 rounded-xl">Today</span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-[#7f699b] p-3 rounded-r-lg relative w-4/5">
                <p className="text-white">Hello, how are you? 😊</p>
                <span className="absolute right-1 bottom-2 text-white text-xs">10:00</span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-sky-100 p-3 rounded-l-lg relative w-4/5">
                <p className="text-black">I am good, thank you! How about you? 🙌</p>
                <span className="absolute right-2 bottom-2 text-black text-xs">13:05</span>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-[#7f699b] p-3 rounded-r-lg relative w-4/5">
                <p className="text-white">I’m doing well, thanks for asking. 😊</p>
                <span className="absolute right-1 bottom-2 text-white text-xs">20:30</span>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <div className="flex flex-col items-end space-y-2">
                <div className="flex space-x-2">
                  <div className="bg-black p-2 rounded-lg flex items-center w-20 h-20"></div>
                  <div className="bg-black p-2 rounded-lg flex items-center w-20 h-20"></div>
                </div>
                <span className="text-black text-xs">21:05</span>
              </div>
            </div>
            
            <div className="flex justify-start space-x-2">
  <div className="bg-[#7f699b] p-2 rounded-r-lg flex flex-col w-4/5 relative">
    <p className="text-white text-sm">👍 Got it!</p>
    <span className="text-white text-xs self-end mt-1">21:20</span>
  </div>
</div>


        </div>
      </div>
      </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Personal;
