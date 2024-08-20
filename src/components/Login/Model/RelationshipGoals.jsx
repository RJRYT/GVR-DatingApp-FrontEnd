import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

const RelationshipGoals = ({ isVisible, modelToggle, setLoading }) => {
  const [errors, setErrors] = useState({});
  const { authState, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    purpose: "",
  });

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const validateForm = () => {
    const newErrors = {};

    // purpose validation
    if (!formData.purpose) {
      newErrors.purpose = "This field is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await axiosInstance.post("/users/update/purpose", formData);
        if (res.data.success) {
          modelToggle("Intersted");
          toast.success("Done. Registration complete");
        } else {
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
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Relationship Goals
        </h2>
        <form className="space-y-4" noValidate onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="purpose"
                value="shortTerm"
                onChange={handleInputChange}
                className="mr-2"
              />
              Short Term Relationship
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="purpose"
                value="longTerm"
                onChange={handleInputChange}
                className="mr-2"
              />
              Long Term Relationship
            </label>
            {errors.purpose && (
              <span className="text-red-600 text-xs">
                {errors.purpose}
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

export default RelationshipGoals;
