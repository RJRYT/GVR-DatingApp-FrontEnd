import React from "react";

function SettingsInput({ label, span, type, holder }) {
  return (
    <div className="grid gap-3 ">
      <label className=" text-slate-400">
        {label} <span className="text-blue-500">{span}</span>
      </label>
      {type === "text" ? (
        <input
          type={type}
          placeholder={holder}
          className="bg-[#F4F7FA] ps-2 sm:px-4 py-3 placeholder:text-sm placeholder:text-slate-600"
        />
      ) : (
        <input
          type={type}
          value={holder}
          className="bg-[#F4F7FA] px-4 py-3 text-sm text-slate-600"
        />
      )}
    </div>
  );
}

export default SettingsInput;