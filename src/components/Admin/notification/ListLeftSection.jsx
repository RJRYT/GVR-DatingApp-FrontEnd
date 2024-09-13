import React from "react";
import NotificationIconType from "./NotificationIconType";

function ListLeftSection({object, index}) {
  return (
    <div className="flex items-center gap-5">
      <div className="relative flex-shrink-0 flex justify-end">
        <img src={object.img} className="w-12 h-12 object-cover rounded-full" />
        <NotificationIconType value={index} />
      </div>
      <div className="grid gap-1">
        <h3 className=" text-sm lg:text-base ">{object.title}</h3>
        <p className="grid md:flex gap-3 text-xs lg:text-sm items-center">
          <span className="relative flex items-center">
            {object.from} <span className="mx-2 transform -translate-y-1">.</span>
          </span>
          <span className="relative flex items-center">
            {object.to} <span className="mx-2 transform -translate-y-1">.</span>
          </span>
          <span>{object.date}</span>
        </p>
      </div>
    </div>
  );
}

export default ListLeftSection;