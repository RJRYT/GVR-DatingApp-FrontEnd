import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import axiosInstance from "../../../Instance/Axios";
import { toast } from "react-toastify";

const JobDetails = ({ isVisible, modelToggle, setLoading, professionType }) => {
  const [expertLvlShown, setExpertLvlShown] = useState(false);
  const [errors, setErrors] = useState({});
  const { authState, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    professionType: professionType,
    expertiseLevel: "",
    jobTitle: "",
  });

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const setExpertiseValue = (value) =>{
    setFormData({ ...formData, expertiseLevel: value });
    setExpertLvlShown(!expertLvlShown)
  };

  const validateForm = () => {
    const newErrors = {};

    // jobTitle validation
    if (!formData.jobTitle) {
      newErrors.jobTitle = "Title is required";
    }

    // expertiseLevel validation
    if (!formData.expertiseLevel) {
      newErrors.expertiseLevel = "expertise level is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await axiosInstance.post("/users/update/professionalinfo", formData);
        if(res.data.success){
          modelToggle("RelationShip");
          toast.success("Section Completed");
        }else{
          toast.error(res.data.message);
        }
      } catch (err) {
        console.error(err);
        toast.error(
          err.response?.data.message || "Something Broken..! Try again later"
        );
      } finally {
        setLoading(false);
      }
    }
  }

  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Details</h2>
        <form className="space-y-4" noValidate onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              placeholder="Title"
              className={`w-full p-2 border text-gray-500 ${errors.jobTitle ? "border-red-600 focus:ring-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
            {errors.jobTitle && (
              <span className="text-red-600 text-xs">
                {errors.jobTitle}
              </span>
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.expertiseLevel ? "text-red-700" : "text-gray-700"}`}>
              Expertise Level
            </label>
            <input
              type="text"
              placeholder="Expertise Level"
              readOnly
              value={formData.expertiseLevel}
              className={`w-full p-2 border text-gray-500 ${errors.expertiseLevel ? "border-red-600 focus:ring-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
              onClick={() => setExpertLvlShown(!expertLvlShown)}
            />
            {errors.expertiseLevel && (
              <span className="text-red-600 text-xs">
                {errors.expertiseLevel}
              </span>
            )}
          </div>
          {expertLvlShown && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Beginner"
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={(e) => setExpertiseValue("beginner")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Intermediate"
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={(e) => setExpertiseValue("intermediate")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Expert"
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={(e) => setExpertiseValue("expert")}
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
