import React, { useState } from "react";

const JobDetails = ({ isVisible, onSwitchToRelationship }) => {
  const [title, setTitle] = useState("");
  const [expertLvl, setExpertLvl] = useState("");
  const [expertLvlShown, setExpertLvlShown] = useState(false);

  if (!isVisible) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSwitchToRelationship();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expertise Level
            </label>
            <input
              type="text"
              placeholder="Expertise Level"
              readOnly
              value={expertLvl}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => setExpertLvlShown(!expertLvlShown)}
            />
          </div>
          {expertLvlShown && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Beginner"
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={(e) => setExpertLvl("beginner")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Intermediate"
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={(e) => setExpertLvl("intermediate")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Expert"
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={(e) => setExpertLvl("expert")}
                />
              </div>
            </>
          )}
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

export default JobDetails;
