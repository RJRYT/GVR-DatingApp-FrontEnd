import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import SubscriptionAddForm from "./SubscriptionAddForm";

function SubscriptionAdd({ setValue }) {
  return (
    <div className=" lg:w-[40%] xl:w-[30%] mx-auto z-10">
      <div className="bg-white my-5 p-5 outline oultine-2 outline-gray-200 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Subscription Plan</h3>
          <button
            className="text-2xl font-semibold"
            onClick={() => setValue(false)}
          >
            <RiCloseLargeFill />
          </button>
        </div>
        <SubscriptionAddForm />
      </div>
    </div>
  );
}

export default SubscriptionAdd;