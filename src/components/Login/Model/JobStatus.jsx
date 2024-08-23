import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const JobStatus = ({ isVisible, modelToggle, setLoading, setProfessionType }) => {
  const [jobRole, setJobRole] = useState("");
  const [error, setError] = useState("");
  const { authState, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const handleFormSubmit = (e) => {
    setError("");
    e.preventDefault();
    setProfessionType(jobRole);
    if (jobRole === "employee" || jobRole === "employer") {
      modelToggle("JobDetails1");
    } else if (jobRole === "jobseeker") modelToggle("JobDetails2");
    else setError("Choose a option to continue");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Status</h2>
        <form className="space-y-4" noValidate onSubmit={handleFormSubmit}>
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
                value="jobseeker"
                onChange={(e) => setJobRole(e.target.value)}
                className="mr-2"
              />
              Job Seeker
            </label>
            {error && (
              <span className="text-red-600 text-xs">
                {error}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobStatus;
