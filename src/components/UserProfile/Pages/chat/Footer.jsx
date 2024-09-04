import React from "react";
import { IoSend } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

const Footer = ({ content, setContent, onSend }) => {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-46px)] xl:w-[728px] bg-white border-b border-sky-300 rounded-xl shadow-sm">
      <form
        className="flex items-center w-full bg-sky-100 p-2 rounded-2xl"
        noValidate
        onSubmit={onSend}
      >
        <textarea
          placeholder="Message"
          className="flex-1 bg-transparent outline-none ml-2 resize-none overflow-hidden max-h-32"
          rows="1"
          value={content}
          onChange={setContent}
          style={{ transition: "height 0.2s ease" }}
        ></textarea>

        {!content ? (
          <>
            <button type="button" className="text-gray-700 mr-5">
              <ImAttachment className="text-xl" />
            </button>

            <button
              type="button"
              className="text-white bg-blue-500 rounded-3xl ml-2"
            >
              <AiFillAudio className="text-2xl" />
            </button>
          </>
        ) : (
          <button type="submit" className="text-xl text-gray-600 ml-2">
            <IoSend />
          </button>
        )}
      </form>
    </footer>
  );
};

export default Footer;
