import React from "react";
import TopBar from "../top-bar/Topbar";
import SearchBar from "../search-bar/SearchBar";

function SubscriptionHead({ setValue }) {
  return (
    <>
    
      {/* <TopBar/> */}
      {/* <SearchBar/> */}
    
    <div className="grid gap-4 lg:flex justify-between items-center">
      <h1 className="text-xl font-semibold">Subscription Management</h1>
      <button
        className="w-fit px-2 py-1 bg-black text-white text-sm rounded-md"
        onClick={() => setValue(true)}
      >
        Add Plan
      </button>
    </div>
    </>
  );
}

export default SubscriptionHead;