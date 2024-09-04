import React, { useRef } from "react";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

const Footer = ({ content, setContent, onSend }) => {

  const textInputRef = useRef(null);

  const handleInputChange = (e) => {
    setContent(e);

    textInputRef.current.style.height = "auto";
    textInputRef.current.style.height = `${textInputRef.current.scrollHeight}px`;
  };

  const handleKeyStateChange = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      onSend();
      textInputRef.current.style.height = "auto";
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSend();
    textInputRef.current.style.height = "auto";
  };

  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-b border-sky-300 rounded-xl shadow-sm">
      <form
        className="flex items-center w-full bg-sky-100 p-2 gap-2 px-3 rounded-xl"
        noValidate
        onSubmit={handleFormSubmit}
      >
        <textarea
          ref={textInputRef}
          placeholder="Message"
          className="flex-1 bg-transparent outline-none resize-none overflow-auto h-auto max-h-32"
          rows="1"
          value={content}
          onKeyDown={handleKeyStateChange}
          onChange={handleInputChange}
          style={{ transition: "height 0.2s ease" }}
        ></textarea>

        {!content ? (
          <>
            <button type="button" className="text-xl text-gray-700">
              <ImAttachment />
            </button>

            <button
              type="button"
              className="text-white p-1 text-xl bg-blue-500 rounded-3xl"
            >
              <AiFillAudio />
            </button>
          </>
        ) : (
          <button type="submit" className="text-xl text-blue-500">
            <IoSend />
          </button>
        )}
      </form>
    </footer>
  );
};

export default Footer;
