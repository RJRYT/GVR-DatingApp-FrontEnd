import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import axiosInstance from "../../../Instance/Axios";
import { toast } from "react-toastify";
import SingleSelect from "../Components/Select/SingleSelect";
import { locations } from "../../../assets/static/Data";

const JobDetails = ({ isVisible, modelToggle, setLoading, professionType }) => {
  const [errors, setErrors] = useState({});
  const { authState, updateUser, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    professionType: professionType,
    companyName: "",
    designation: "",
    jobLocation: "",
  });

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName) {
      // companyName validation
      newErrors.companyName = "Company name is required";
    }

    // designation validation
    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }

    // jobLocation validation
    if (!formData.jobLocation) {
      newErrors.jobLocation = "Location is required";
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
          updateUser({...formData, professionalInfoSubmitted: true});
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Job Details</h2>
        <form className="space-y-4" noValidate onSubmit={handleFormSubmit}>
          <div>
            <label className={`block text-sm font-medium ${errors.companyName ? "text-red-700" : "text-gray-700"}`}>
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              className={`w-full p-2 border text-gray-500 ${errors.companyName ? "border-red-600 focus:ring-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
              value={formData.companyName}
              onChange={handleInputChange}
            />
            {errors.companyName && (
              <span className="text-red-600 text-xs">
                {errors.companyName}
              </span>
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.designation ? "text-red-700" : "text-gray-700"}`}>
              Designation
            </label>
            <input
              type="text"
              placeholder="Designation"
              name="designation"
              className={`w-full p-2 border text-gray-500 ${errors.designation ? "border-red-600 focus:ring-red-700" : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
              value={formData.designation}
              onChange={handleInputChange}
            />
            {errors.designation && (
              <span className="text-red-600 text-xs">
                {errors.designation}
              </span>
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium ${errors.jobLocation ? "text-red-700" : "text-gray-700"}`}>
              Location
            </label>
            <SingleSelect
              name="jobLocation"
              OnChange={handleInputChange}
              Options={locations}
              Placeholder="Location"
              AllowNew={true}
              ClassName={`w-full border text-gray-500 ${errors.jobLocation ? "border-red-600 hover:ring-red-700" : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.jobLocation && (
              <span className="text-red-600 text-xs">
                {errors.jobLocation}
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

export default JobDetails;
