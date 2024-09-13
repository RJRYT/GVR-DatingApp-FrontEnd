import React from "react";

function SettingsSelect({ label, span, option }) {
  return (
    <div className=" grid gap-3">
      <label className="text-slate-400">
        {label} <span className="text-blue-500">{span}</span>
      </label>
      <select className="bg-[#F4F7FA] ps-2 sm:px-4 py-3">
        <option>{option}</option>
      </select>
    </div>
  );
}

export default SettingsSelect;