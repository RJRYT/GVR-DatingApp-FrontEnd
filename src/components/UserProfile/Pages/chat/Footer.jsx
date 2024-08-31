import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";

const Footer = ({ content, setContent, onSend }) => {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-b border-gray-400 rounded-xl shadow-sm">
      <form
        className="flex items-center w-full bg-gray-100 p-2 rounded-xl"
        noValidate
        onSubmit={onSend}
      >
        <button type="button" className="text-xl text-gray-600">
          <FaSmile />
        </button>
        <button type="button" className="text-xl text-gray-600 ml-2">
          <AiFillAudio />
        </button>
        <input
          type="text"
          value={content}
          onChange={(e)=>{setContent(e.target.value)}}
          placeholder="Type your message"
          className="flex-1 bg-transparent outline-none ml-4"
        />
        <button type="submit" className="text-xl text-gray-600 ml-2">
          <IoSend />
        </button>
      </form>
    </footer>
  );
};

export default Footer;
