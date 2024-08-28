import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mx-auto">
      <div className="w-full mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative flex justify-between items-center h-10 rounded-full overflow-hidden shadow-2xl shadow-gray-900/20 transition bg-pink-100"
        >
          <button
            role="tab"
            aria-selected={activeTab === "nearby"}
            aria-controls="panel-1"
            id="tab-1"
            tabIndex={activeTab === "nearby" ? "0" : "-1"}
            onClick={() =>setActiveTab("nearby")}
            className={`flex-grow relative block h-10 px-2 sm:px-6 tab rounded-full transition-colors duration-300 ${
              activeTab === "nearby" ? "bg-white shadow-md" : "bg-pink-100"
            }`}
          >
            <span className="text-black-800">Near By</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "qualification"}
            aria-controls="panel-2"
            id="tab-2"
            tabIndex={activeTab === "qualification" ? "0" : "-1"}
            onClick={() => setActiveTab("qualification")}
            className={`flex-grow relative block h-10 px-2 sm:px-6 tab rounded-full transition-colors duration-300 ${
              activeTab === "qualification" ? "bg-white shadow-md" : "bg-pink-100"
            }`}
          >
            <span className="text-black-800">Qualification</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "interests"}
            aria-controls="panel-3"
            id="tab-3"
            tabIndex={activeTab === "interests" ? "0" : "-1"}
            onClick={() => setActiveTab("interests")}
            className={`flex-grow relative block h-10 px-2 sm:px-6 tab rounded-full transition-colors duration-300 ${
              activeTab === "interests" ? "bg-white shadow-md" : "bg-pink-100"
            }`}
          >
            <span className="text-black-800">Interests</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
