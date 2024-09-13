import React from "react";

function FormRightSection() {
  const specific = [
    "dating",
    "matrimony",
    "e-commerce",
    "job portal",
    "study abroad",
  ];
  const via = ["in app", "email", "sms"];
  return (
    <div className="w-full">
      <div className="mx-3 grid gap-4 ">
        <h4 className="mx-3 text-base font-semibold">Target Audience</h4>
        <select className="w-full md:w-fit p-3 border-2 border-slate-400 text-slate-400 rounded-lg">
          <option value="">User Name/ID/Group/Location</option>
        </select>
        <h5 className="mx-3 text-base font-semibold">Target Specific</h5>
        <div className="grid md:grid-cols-2 gap-3">
          {specific.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <input type="checkbox" name={item} className="accent-slate-800" />
              <label htmlFor={item} className="capitalize">
                {item}
              </label>
            </div>
          ))}
        </div>
        <h5 className="mx-3 text-base font-semibold">Send Via</h5>
        <div className="grid md:grid-cols-2 gap-3">
          {via.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <input type="checkbox" name={item} className="accent-slate-800" />
              <label htmlFor={item} className="capitalize">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="w-full md:w-[70%] py-4 bg-[#04228E] text-white text-lg">
          Update
        </button>
      </div>
    </div>
  );
}

export default FormRightSection;