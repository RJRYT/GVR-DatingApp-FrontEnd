import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiAddLargeLine } from "react-icons/ri";

function FormTopSection() {
  return (
    <div className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex justify-between md:justify-end items-center gap-3">
          <h4 className="text-xl font-semibold tracking-wide">Image</h4>
          <button className="text-2xl font-bold">
            <RiAddLargeLine />
          </button>
          <button className="md:hidden text-xl font-bold">
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-[#3CBA39] text-white ms-5 py-1 px-16">
            Status
          </button>
          <button className="hidden md:block text-2xl font-bold">
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormTopSection;