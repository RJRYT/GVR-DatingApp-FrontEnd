import React from "react";
import { tableBody, tableHead } from "../../../constants/subscription-table";

function SubscriptionTable() {
  return (
    <table className="w-max lg:w-full border-separate border-spacing-y-3">
      <thead>
        <tr className="">
          {tableHead.map((head, index) => (
            <td
              key={index}
              className="px-3 md:px-10 py-3 border-b-2 border-gray-200 text-center text-sm md:text-base lg:text-lg font-semibold capitalize"
            >
              {head}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {tableBody.map((body, index) => (
          <tr
            key={index}
            className="bg-white text-center text-xs md:text-sm lg:text-base font-medium  shadow"
          >
            <td className="px-3 md:px-10 py-3 capitalize rounded-s-lg">
              {body.name}
            </td>
            <td className="p-3 capitalize">
              <img src={body.image} className="w-8 mx-auto" />
            </td>
            <td className="p-3 capitalize">{body.price}</td>
            <td className="p-3 capitalize">{body.description}</td>
            <td className="p-3 capitalize">{body.status}</td>
            <td className="p-3 ">{body.duration}</td>
            <td className="p-3 capitalize">{body.type}</td>
            <td className="p-3 capitalize">{body.icon1}</td>
            <td className="p-3 capitalize rounded-e-lg">{body.icon2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubscriptionTable;