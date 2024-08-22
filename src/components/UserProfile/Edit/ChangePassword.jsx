import React, { useState, useEffect, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from '../../../Instance/Axios';
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [hasPassword, setHasPassword] = useState(true)
  const [loadingPassword, setLoadingPassword] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { authState, loading } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserPassword = async () => {
      try {
        const response = await axios.get(`/users/password/check`);
        if (response.data.success) {
          setHasPassword(response.data.hasPassword)
        }
      } catch (error) {
        console.error("Error fetching user profile", error);
      } finally {
        setLoadingPassword(false); // Set loading to false after API call
      }
    }
    if (authState.isAuthenticated) {
      fetchUserPassword()
    }
  }, [authState.isAuthenticated])

  const handleChangePassword = async () => {
    try {
      const response = await axios.put(`/users/password/change`, {
        currentPassword: hasPassword ? currentPassword : null,
        newPassword,
        confirmPassword
      }) 
      if (response.data.success) {
        toast.success(response.data.message);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to update password");
      console.error("Error changing password", error);
    }
  }

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  if (loading || loadingPassword) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <div className="items-center justify-center min-h-screen bg-fuchsia-950">
      <div className="flex p-6">
        <button className="rounded-full border-white border-2 p-2 bg-[#DD88CF] ml-4">
          <FaArrowLeft className="text-white" />
        </button>
        <h3 className="flex-1 text-center text-white text-2xl font-bold">
          Change Password
        </h3>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen p-6 mt-4 font-sans">
        <div className="p-6">
          <p className="font-sm text-medium border-b pb-4">
            Feeling worried about your account being easily preyed on? Then
            change that password now!
          </p>
        </div>

        {/* Current Password */}
        {hasPassword && (
          <div className="flex px-6 pb-4 py-4 border-b">
            <input
              type={currentPasswordVisible ? 'text' : 'password'}
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="font-sm text-medium focus:outline-none"
            />
            <div className="ml-auto cursor-pointer" onClick={toggleCurrentPasswordVisibility}>
              {currentPasswordVisible ? (
                <AiFillEye size={24} />
              ) : (
                <AiFillEyeInvisible size={24} />
              )}
            </div>
          </div>
        )}


        {/* New Password */}
        <div className="flex px-6 py-4 border-b">
          <input
            type={newPasswordVisible ? 'text' : 'password'}
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="font-sm text-medium focus:outline-none"
          />
          <div className="ml-auto cursor-pointer" onClick={toggleNewPasswordVisibility}>
            {newPasswordVisible ? (
              <AiFillEye size={24} />
            ) : (
              <AiFillEyeInvisible size={24} />
            )}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex px-6 py-4 border-b">
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="font-sm text-medium focus:outline-none"
          />
          <div className="ml-auto cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
            {confirmPasswordVisible ? (
              <AiFillEye size={24} />
            ) : (
              <AiFillEyeInvisible size={24} />
            )}
          </div>
        </div>

        <div className="text-center">
          <button 
          className="bg-fuchsia-950 font-semibold text-white rounded-full py-4 px-24 mt-64 md:mt-36"
            onClick={handleChangePassword}
            >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
