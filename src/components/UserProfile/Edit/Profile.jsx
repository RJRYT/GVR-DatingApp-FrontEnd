import React, { useState, useContext,useRef} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import axios from "../../../Instance/Axios";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../../Loading";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import AccessDenied from "../../AccessDenied";

const EditProfile = () => {
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const [formData, setFormData] = useState({
    username: authState?.user?.username || "",
    email: authState?.user?.email || "",
    phoneNumber: authState?.user?.phoneNumber || "",
    bio:authState.user?.about,
  });
  const [profilePic, setProfilePic] = useState({
    file: null,
    url: authState?.user?.profilePic?.url || "",
  });
  const [imagePreviews, setImagePreviews] = useState(
    authState?.user?.images || [null, null, null]
  );
  const [shortReelPreview, setShortReelPreview] = useState(
    authState?.user?.shortReel || ""
  );
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic({
        file,
        url: URL.createObjectURL(file),
      });
    }
  };
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...imagePreviews];
      newImages[index] = {
        file,
        url: URL.createObjectURL(file),
      };
      setImagePreviews(newImages);
    }
  };
  const handleReelChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setShortReelPreview({
        file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleAddImage = () => {
    document.getElementById("imageInput").click();
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...imagePreviews];
    files.forEach((file) => {
      newImages.push({
        file,
        url: URL.createObjectURL(file),
      });
    });
    setImagePreviews(newImages);
  };

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingOverlay(true);
    try {
      const updatedData = new FormData();
      updatedData.append("username", formData.username);
      updatedData.append("email", formData.email);
      updatedData.append("phoneNumber", formData.phoneNumber);
      updatedData.append("about", formData.bio);

      if (profilePic.file) {
        updatedData.append("profilepic", profilePic.file);
      }

      imagePreviews.forEach((image) => {
        if (image.file) {
          updatedData.append(`images`, image.file);
        }
      });

      if (shortReelPreview.file) {
        updatedData.append("shortreels", shortReelPreview.file);
      }

      const response = await axios.put("/users/update/profile", updatedData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", response.data);
      if (response.data) {
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally{
      setLoadingOverlay(false);
    }
  };

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
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
                  src={profilePic.url}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div
                  onClick={() =>
                    document.getElementById("profilePicInput").click()
                  }
                  className="absolute transform translate-x-6 -translate-y-4 bg-gray-500 p-1 h-4 w-4 rounded-full border cursor-pointer"
                >
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
                <input
                  type="file"
                  id="profilePicInput"
                  accept="image/*,.png,.jpg,.jpeg,.jfif"
                  style={{ display: "none" }}
                  onChange={handleProfilePicChange}
                />
              </div>
              <div className="flex-1 ml-6">
                <h3 className="text-black flex-1 font-bold text-lg">
                  {authState?.user?.username}
                </h3>
                <p className="text-sm">authState?.user?.about</p>
              </div>
            </div>

          <p className="text-gray-900 text-sm mt-2 mb-6">
            All your account information can be accessed and edited here but
            your mail will still remain un-edited.
          </p>
          <form onSubmit={handleSubmit}>
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
               name='username'
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3  border-b-2 border-fuchsia-800 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                className="w-full px-3  border-b-2 border-fuchsia-800 focus:outline-none focus:border-purple-700 readOnly aria-readonly  disabled=true" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py- border-b-2 border-fuchsia-800 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Bio</label>
              <input className="w-full  border-b-2 border-fuchsia-800 focus:outline-none focus:border-purple-700"value={formData.bio}
                onChange={handleChange}></input>
            </div>
             <div className="mb-4">
              <label className="block text-gray-700">Images</label>
              <div className="flex items-center justify-start gap-3">
                {imagePreviews.map((image, index) => (
                  <div
                    key={index}
                    className="relative border-2 border-white shadow-md rounded-full block w-16 h-16"
                  >
                    {image && (
                      <img
                        src={image.url}
                        alt={`Preview ${index + 1}`}
                        className="h-full w-full rounded-full object-cover cursor-pointer"
                        onClick={() => document.getElementById(`imageInput-${index}`).click()}
                      />
                    )}
                    <input
                      type="file"
                      id={`imageInput-${index}`}
                      accept="image/*,.png,.jpg,.jpeg,.jfif"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e, index)}
                    />
                  </div>
                ))}
                <button
                  type="button" // Ensure this button does not submit the form
                  className="text-purple-500 text-xl font-semibold"
                  onClick={handleAddImage}
                >
                  <svg
                    className="h-12 w-12 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*,.png,.jpg,.jpeg"
                  multiple
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="file"
                id="videoUpload"
                accept="video/mp4,video/webm"
                hidden
                onChange={handleReelChange}
              />
              <label className="block text-gray-700">Reels</label>
              <div className="flex items-center justify-start gap-3">
                <div className="relative border-2 border-white shadow-md rounded-full block w-16 h-16 ">
                  <video
                    src={shortReelPreview.url}
                    className="h-full w-full rounded-full object-cover cursor-pointer"
                    onClick={handleVideoClick}
                  />
                </div>
              </div>              
            </div>
            {isVideoOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full">
                <video
                  src={shortReelPreview?.url}
                  className="w-full h-auto rounded-md"
                  controls
                  autoPlay
                  ref={videoRef}
                />
                <button
                  className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
                  onClick={handleCloseVideo}
                >
                  Close
                </button>
              </div>
            </div>
          )}
            <div className="mb-4">
              <label className="block font-bold text-fuchsia-950">
                <Link to={"/dashboard/@me/changepass"}>Change Password</Link>
              </label>
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
