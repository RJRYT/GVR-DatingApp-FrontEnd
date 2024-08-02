import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("near by");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="w-full  mx-auto">
        <div
          role="tablist"
          aria-label="tabs"
          className="relative flex justify-between items-center h-10 rounded-full overflow-hidden shadow-2xl shadow-gray-900/20 transition bg-pink-100"
        >
          <button
            role="tab"
            aria-selected={activeTab === "near by"}
            aria-controls="panel-1"
            id="tab-1"
            tabIndex={activeTab === "near by" ? "0" : "-1"}
            onClick={() => setActiveTab("near by")}
            className={`flex-grow relative block h-10 px-2 sm:px-6 tab rounded-full transition-colors duration-300 ${
              activeTab === "near by" ? "bg-white shadow-md" : "bg-pink-100"
            }`}
          >
            <span className="text-black-800">Near By</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "education"}
            aria-controls="panel-2"
            id="tab-2"
            tabIndex={activeTab === "education" ? "0" : "-1"}
            onClick={() => setActiveTab("education")}
            className={`flex-grow relative block h-10 px-2 sm:px-6 tab rounded-full transition-colors duration-300 ${
              activeTab === "education" ? "bg-white shadow-md" : "bg-pink-100"
            }`}
          >
            <span className="text-black-800">Education</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "qualification"}
            aria-controls="panel-3"
            id="tab-3"
            tabIndex={activeTab === "qualification" ? "0" : "-1"}
            onClick={() => setActiveTab("qualification")}
            className={`flex-grow relative block h-10 px-2 sm:px-6 tab rounded-full transition-colors duration-300 ${
              activeTab === "qualification"
                ? "bg-white shadow-md"
                : "bg-pink-100"
            }`}
          >
            <span className="text-black-800">Qualification</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
