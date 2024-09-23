import { Edit } from "lucide-react";
import React, { useState } from "react";
import { UserProfile } from "../../../constants";

function TableRow({ name, gender, age, location, profilepic, status, subs, selectAll }) {
  const [checked, setChecked] = useState(false);

  return (
    <tr className="w-full bg-white h-16 ">
      <td>
        <input
          className="w-5 h-5 accent-black "
          type="checkbox"
          name="select-user"
          id="select-user"
          checked={checked ? checked : selectAll}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </td>
      <td className="  ">
        <div className="flex gap-4 items-center justify-left">
          <img
            src={profilepic}
            alt="user image"
            className="w-9 h-9 rounded-full"
          />
          {name || "Unknown"}
        </div>
      </td>
      <td className=""> {gender || "Unknown"}</td>
      <td className="">{age || "Unknown"}</td>
      <td className=" text-center text-balance">{location || "Unknown"}</td>
      <td className="">
        <select
          name="status-select"
          id="status-select"
          className="outline-none"
        >
          <option value="block">Block</option>
          <option value="block">Un-block</option>
          <option value="block" selected>
            Pending
          </option>
        </select>
      </td>
      <td>
        <span className="flex gap-3 items-center justify-center">
          <span>Paid</span>
          <Edit />
        </span>
      </td>
    </tr>
  );
}

export default TableRow;