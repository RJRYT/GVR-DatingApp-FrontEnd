import React, { useState } from 'react';
import { AiFillAudio } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

const Footer = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-b border-sky-300 rounded-xl shadow-sm">
      <form className="flex items-center w-full bg-sky-100 p-2 rounded-2xl">
        {/* Message input area */}
        <textarea
          placeholder="Message"
          className="flex-1 bg-transparent outline-none ml-2 resize-none overflow-hidden max-h-32"
          rows="1"
          value={text}
          onChange={handleChange}
          style={{ transition: 'height 0.2s ease' }}
        ></textarea>

        {/* Attachment Button */}
        <button type='button' className='text-gray-700 mr-5'>
          <ImAttachment className='text-xl'/>
        </button>

        {/* Audio Button */}
        <button type="button" className="text-white bg-blue-500 rounded-3xl ml-2">
          <AiFillAudio className='text-2xl'/>
        </button>
      </form>
    </footer>
  );
};

export default Footer;
