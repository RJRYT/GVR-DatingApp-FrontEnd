import React from "react";

function OptionButtons() {
  return (
    <div className="w-full h-max mt-5 py-5 flex gap-5 items-center justify-center ">
      <button className="w-28 h-9 text-white bg-[#DC3546] rounded-lg hover:bg-red-700">
        Update
      </button>
      <button className="w-28 h-9 text-white bg-[#2C2C2C] rounded-lg hover:bg-zinc-700">
        Cancel
      </button>
      <select className="w-28 h-9 text-white bg-[#33B257] rounded-lg hover:bg-green-600">
        <option value="status">Status</option>
        <option value="pending">pending</option>
        <option value="active">Active</option>
        <option value="in-active">Inactive</option>
      </select>
    </div>
  );
}

export default OptionButtons;