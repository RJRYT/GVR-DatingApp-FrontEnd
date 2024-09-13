import React from "react";

function FormLeftSection() {
  return (
    <div className="w-full">
      <div className="md:mx-3 grid gap-5">
        <input
          type="text"
          placeholder="Title"
          className="w-full md:w-[75%] p-3 border-2 border-slate-400 outline-none placeholder:text-black placeholder:text-lg rounded-lg "
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full md:w-[75%] p-3 border-2 border-slate-400 outline-none placeholder:text-black placeholder:text-lg rounded-lg"
        />
        <div>
          <h4 className="text-lg font-semibold">Schedule</h4>
          <div className="md:mx-5 grid gap-5">
            <h5 className="text-lg font-semibold">From</h5>
            <div className="md:mx-5 grid lg:flex gap-3">
              <input
                type="text"
                placeholder="Jun 10, 2024"
                className="w-full md:w-[80%] lg:w-[60%] p-2 text-center text-lg font-medium bg-violet-300 placeholder:text-[#007AFF] rounded-lg"
              />
              <input
                type="text"
                placeholder="9:41AM"
                className="w-full md:w-[60%] lg:w-[40%] p-2 text-center text-lg font-medium bg-violet-300 placeholder:text-[#007AFF] rounded-lg"
              />
            </div>
            <h5 className="text-lg font-semibold">To</h5>
            <div className="md:mx-5 grid lg:flex gap-3">
              <input
                type="text"
                placeholder="Jun 10, 2024"
                className="w-full md:w-[80%] lg:w-[60%] p-2 text-center text-lg font-medium bg-violet-300 placeholder:text-[#007AFF] rounded-lg"
              />
              <input
                type="text"
                placeholder="9:41AM"
                className="w-full md:w-[60%] lg:w-[40%] p-2 text-center text-lg font-medium bg-violet-300 placeholder:text-[#007AFF] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLeftSection;