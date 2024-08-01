import React, { useState } from "react";

const JobStatus = ({ isVisible, onClose, onSwitchToJobDetails, onSwitchToJobDetails2  }) => {
  const [jobRole, setJobRole] = useState("");


  if (!isVisible) return null;

  const handleClick = (e) => {
    e.preventDefault();
    if (jobRole === "employee" || jobRole === "employer") {
      onSwitchToJobDetails();
    } else if(jobRole ==='jobSeeker')
    onSwitchToJobDetails2();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Status</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="jobRole"
                value="employee"
                onChange={(e) => setJobRole(e.target.value)}
                className="mr-2"
              />
              Employee
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="jobRole"
                value="employer"
                onChange={(e) => setJobRole(e.target.value)}
                className="mr-2"
              />
              Employer
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="jobRole"
                value="jobSeeker"
                onChange={(e) => setJobRole(e.target.value)}
                className="mr-2"
              />
              Job Seeker
            </label>
          </div>
          <button
            type="button"
            className="w-full p-2 bg-gray-800 text-white rounded-lg font-medium"
            onClick={handleClick}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobStatus;