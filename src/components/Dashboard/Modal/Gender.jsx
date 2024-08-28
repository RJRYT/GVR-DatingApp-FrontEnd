import React, { useState } from 'react';
import apiInstance from "../../../Instance/Axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const genderArray = [
  { label: "Male", value: "male" },
  { label: "Famale", value: "female" },
  { label: "Both", value: "both" },
];

const Gender = ({ preferences }) => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updatePreferences = async(gender) => {
    setLoading(true);
    try {
      const updatedPreferences = preferences;
      updatedPreferences.Gender = gender;
      const response = await apiInstance.post("/matches/preferences", updatedPreferences);
      if (response.data.success) {
        setOpen(!open);
        toast.success("Preferences updated");
      }
    } catch (error) { console.log(error) }
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-6`}
    >
      <div className="p-6 w-full max-h-screen max-w-md">
        <h6
          className="text-2xl font-bold text-center mb-4"
          style={{ fontFamily: "Georgia" }}
        >
          Interested in
        </h6>

        <div className="mb-4">
          <button
            className="w-full py-2 px-4 text-white font-medium bg-blue-700 rounded-full hover:bg-blue-800"
            onClick={() => updatePreferences(genderArray[0])}
            disabled={loading}
          >
            Men
          </button>
        </div>
        <div className="mb-4">
          <button
            className="w-full py-2 px-4 text-white font-medium bg-pink-500 rounded-full hover:bg-pink-600"
            onClick={() => updatePreferences(genderArray[1])}
            disabled={loading}
          >
            Women
          </button>
        </div>
        <div>
          <button
            className="w-full py-2 px-4 text-white font-medium bg-gradient-to-r from-blue-500 to-pink-200 rounded-full hover:from-blue-600 hover:to-pink-300"
            onClick={() => updatePreferences(genderArray[2])}
            disabled={loading}
          >
            Both
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;
