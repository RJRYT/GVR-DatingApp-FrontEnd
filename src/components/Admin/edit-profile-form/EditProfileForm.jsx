import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";
import Select from "../../../components/UserProfile/Components/Select";
import { occupations, countryCodes } from "../../../assets/static/Data";
import axiosInstance from "../../../Instance/AxiosAdmin";
import { toast } from "react-toastify";
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


function EditProfile() {
  const { authState, loading } = useContext(AdminContext);
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    designation: null,
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [currentCountryCode, setCurrentCountryCode] = useState("");

  useEffect(() => {
    if (!loading && authState.isAuthenticated) {
      const adminDetails = {
        firstName: authState?.admin?.firstName,
        lastName: authState?.admin?.lastName,
        nationality: authState?.admin?.nationality,
        phoneNumber: authState?.admin?.phoneNumber,
        email: authState?.admin?.email,
        designation: authState?.admin?.designation,
      };
      setAdmin(adminDetails);
      setPhoneNumber(adminDetails.phoneNumber); // Set phoneNumber
      setCurrentCountryCode(getCountryCode(adminDetails.phoneNumber));    }
  }, [loading, authState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));

     // Update country code whenever phone number changes
     if (name === "phoneNumber") {
      setPhoneNumber(value); // Also update the phone number in state
      setCurrentCountryCode(getCountryCode(value));
    }
  };

  const handleSelectChange = (selectedOption, type) => {
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [type]: selectedOption || null,
    }));
  };

  const editAdminProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const updatedAdmin = {
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        nationality: admin.nationality,
        phoneNumber: phoneNumber,
        designation: admin.designation,
        password: admin.password,
      };

      const res = await axiosInstance.put("/me/edit/profile", updatedAdmin, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setAdmin((prevAdmin) => ({
          ...prevAdmin,
          ...updatedAdmin,
        }));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error while updating admin profile:", error);
      toast.error("Failed to update admin profile!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCountryCode = (phoneNumber) => {
    for (const code of countryCodes) {
      if (phoneNumber.startsWith(code.phoneNumberPattern)) {
        return code.label; // or code.value, depending on your data structure
      }
    }
    return ""; // return empty string if no match found
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full max-h-screen bg-white rounded-2xl p-6 pt-8">
        <h2 className="text-2xl font-medium text-textHl mb-6">Edit Profile</h2>
        <form onSubmit={editAdminProfile}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-textLg">First Name</label>
              <input
                type="text"
                name="firstName"
                value={admin.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textLg">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={admin.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-textLg">Email</label>
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-textLg">Phone Number</label>
              <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <PhoneInput
                 international
                 countryCallingCodeEditable={true}
                 value={phoneNumber}
                 onChange={setPhoneNumber}
                 className="outline-none"
                />
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-textLg">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={admin.nationality}
                onChange={handleChange}
                className="mt-1 mb-2 block w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-textLg">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={admin.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
              placeholder="Change Password"
            />
            <div
              className="absolute bottom-[1px] transform -translate-y-1/2 right-5 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-textLg">Designation</label>
            <Select
              name="designation"
              value={admin.designation || null}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "designation")
              }
              className="block w-full p-2 border border-gray-300 rounded-md outline-none"
              options={occupations}
            />
          </div>

          <div className="w-full grid place-items-center mt-9">
            <button
              type="submit"
              className="w-1/3 bg-blue-600 text-white font-medium p-2 rounded-md outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
