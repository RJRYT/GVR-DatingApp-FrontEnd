import React from "react";

function OptionButtons() {
  return (
    <div className="w-full h-max mt-5 py-5 flex gap-5 items-center justify-center ">
      <button className="w-28 h-9 text-standard bg-red-600 rounded-lg hover:bg-red-700">
        Update
      </button>
      <button className="w-28 h-9 text-standard bg-zinc-800 rounded-lg hover:bg-zinc-700">
        Cancel
      </button>
      <select className="w-28 h-9 text-standard bg-green-500 rounded-lg hover:bg-green-600">
        <option value="status">Status</option>
        <option value="pending">pending</option>
        <option value="active">Active</option>
        <option value="in-active">Inactive</option>
      </select>
    </div>
  );
}

export default OptionButtons;