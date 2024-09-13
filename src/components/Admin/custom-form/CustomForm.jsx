import { Image } from "lucide-react";
import * as Icons from "lucide-react";
import React from "react";

function CustomForm({ inputs }) {
  return (
    <form className="w-full h-max flex gap-2 flex-col">
      {inputs?.map((data, index) =>
        data.type !== "file" && data.type !== "checkbox" ? (
          <input
            key={index}
            type={data.type}
            placeholder={data.placeHolder}
            className="w-full h-12  text-zinc-300 bg-white px-4 border rounded-md"
          />
        ) : data.type === "checkbox" ? (
          <div className="flex gap-3 items-center justify-start">
            <input type="checkbox" className="w-4 h-4 accent-black" />
            <label>{data.placeHolder}</label>
          </div>
        ) : (
          <div className="w-full h-12  text-zinc-300 bg-white px-4 border rounded-md grid items-center relative">
            <input
              key={index}
              type="file"
              placeholder="Qualification"
              className="w-full h-12 absolute left-0 opacity-0 z-20 "
            />
            <label className="w-full flex items-center justify-between">
              {data.placeHolder}
              <Image className="text-zinc-600" />{" "}
            </label>
          </div>
        )
      )}
    </form>
  );
}

export default CustomForm;