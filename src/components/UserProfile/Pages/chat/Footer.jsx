import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-b border-sky-300 rounded-xl shadow-sm">
      <form className="flex items-center w-full bg-sky-100 p-2 rounded-2xl">
        {/* <button type="button" className="text-xl text-gray-600">
          <FaSmile />
        </button> */}
          <input
          type="text"
          placeholder="Message"
          className="flex-1 bg-transparent outline-none ml-2"
        />
        <button type='button' className='text-gray-700 mr-5'>
          <ImAttachment className='text-xl'/>
        </button>
            <button type="button" className="text-white bg-blue-500 p-2 rounded-full ml-2">
          <AiFillAudio className='text-2xl'/>
        </button>
      
        {/* <button type="submit" className="text-xl text-gray-600 ml-2">
          <IoSend />
        </button> */}
      </form>
    </footer>
  );
};

export default Footer;
