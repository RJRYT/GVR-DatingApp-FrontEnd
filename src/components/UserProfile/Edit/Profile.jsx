import React, { useState,useContext,useEffect } from "react";
import {Link ,useParams } from 'react-router-dom'
import { AuthContext } from "../../../contexts/AuthContext";
import axios from '../../../Instance/Axios'
import { FaArrowLeft } from "react-icons/fa";
import Profile from "../../../assets/profile/profilePic.png";

const EditProfile = () => {
  const { authState, loading } = useContext(AuthContext);
  const { userId } = useParams();
 
  const [formData,setFormData] =useState({
  username:'',
  email:'',
  phoneNumber:'',
  
  })
  useEffect(()=>{
    const fetchUserProfile= async ()=>{
      try{
        const response= await axios.get(`/users/profile/${userId}`)
        console.log(response.data,"response")
        if(response.data.success){
          setFormData({
            username:response.data.user.username,
            email:response.data.user.email,
            phoneNumber:response.data.user.phoneNumber
          })
        }
      }catch(error){
        console.error("Error fetching user profile", error);
      }
    }
    fetchUserProfile();
  },[userId])
 
  return (
    <div className="items-center justify-center min-h-screen bg-fuchsia-950">
      <div className="flex p-6">
        <button className="rounded-full border-white border-2 p-2 bg-[#DD88CF] ml-4">
          <FaArrowLeft className="text-white" />
        </button>
        <h3 className="flex-1 text-center text-white text-2xl font-bold">
          Edit My Profile
        </h3>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen p-6 mt-4 font-aldrich">
        <div className="w-full flex justify-center mb-1">
          <div className="w-5 rounded-full md:w-10 lg:w-16 h-1 bg-gray-200 border-2"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={Profile}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute transform translate-x-6 -translate-y-4 bg-gray-500 p-1 h-4 w-4 rounded-full border">
                <svg
                  class="text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 ml-6">
              <h3 className="text-black flex-1 font-bold text-lg">
                Nazrul Islam
              </h3>
              <p className="text-sm">Never give up 💪</p>
            </div>
          </div>

          <p className="text-gray-900 text-sm mt-2 mb-6">
            All your account information can be accessed and edited here but
            your mail will still remain un-edited.
          </p>
          <form>
            <div className="mb-4">
              <label className="block  text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3  border-b-2  border-fuchsia-800 focus:outline-none focus:border-fuchsia-800"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-3  border-b-2 border-fuchsia-800 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3  border-b-2 border-fuchsia-800 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py- border-b-2 border-fuchsia-800 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Bio</label>
              <input className="w-full  border-b-2 border-fuchsia-800 focus:outline-none focus:border-purple-700"></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Images</label>
              <div className="flex items-center justify-start gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative border-2 border-white shadow-md rounded-full block w-16 h-16"
                  >
                    <img
                      src="https://i.postimg.cc/zGZDhqdB/HD-wallpaper-pretty-girl-beauty-close-up-face-girl-model-people-pretty-woman-thumbnail.jpg" // Replace with actual image URLs
                      alt=""
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
                <button className="text-purple-500 text-xl font-semibold">
                  <svg
                    class="h-12 w-12 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Reels</label>
              <div className="flex items-center justify-start gap-3">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="relative border-2 border-white shadow-md rounded-full block w-16 h-16"
                  >
                    <img
                      src="https://i.postimg.cc/zGZDhqdB/HD-wallpaper-pretty-girl-beauty-close-up-face-girl-model-people-pretty-woman-thumbnail.jpg" // Replace with actual image URLs
                      alt=""
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
                <button className="text-fuchsia-800  w-10 text-3xl font-semibold">
                  <svg
                    class="h-12 w-12 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-bold text-fuchsia-950"><Link to={"/dashboard/@me/changepass"}>Change Password</Link></label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-fuchsia-950 font-semibold text-white rounded-full py-4 px-24"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
