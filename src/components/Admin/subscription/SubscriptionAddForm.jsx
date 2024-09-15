import React from "react";
import { CiImageOn } from "react-icons/ci";
import SubscriptionAddInput from "./SubscriptionAddInput";

function SubscriptionAddForm() {
  return (
    <form action="" className="mt-12 mb-5 grid gap-6">
      <SubscriptionAddInput label={"name"} />
      <SubscriptionAddInput label={"price"} />
      <SubscriptionAddInput label={"duration"} />
      <SubscriptionAddInput label={"currency"} />

      <select className="px-4 py-3 text-gray-400 border-2 border-gray-300 outline-none rounded-lg">
        <option value="type">Subscription Type</option>
      </select>

      <div className="relative flex justify-between items-center">
        <SubscriptionAddInput label={"image"} />
        <span className="absolute right-2 text-2xl text-gray-500">
          <CiImageOn />
        </span>
      </div>

      <textarea
        rows={4}
        placeholder="Description"
        className="px-4 py-3 border-2 border-gray-300 outline-none rounded-lg"
      ></textarea>

      <div className=" flex justify-end gap-4">
        <button className="px-5 py-2 bg-black text-primary rounded-lg">Save</button>
        <button className="px-3 py-2 bg-red-600 text-primary rounded-lg">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SubscriptionAddForm;