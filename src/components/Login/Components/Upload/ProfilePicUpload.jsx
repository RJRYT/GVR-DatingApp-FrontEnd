import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

function ProfilePicUpload({ setUpload, Error, UploadStatus, SetUploadStatus, Placeholder, ClassName, setFileSelected }) {
  const [files, setFiles] = useState(null);
  const InputRef = useRef(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [placeholderText, setPlaceholderText] = useState(Placeholder);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (
      authState.isAuthenticated &&
      authState.user &&
      authState.user.profilePic
    ) {
      setProfilePicPreview(authState.user.profilePic.url);
      setFileSelected(true);
      SetUploadStatus(true);
      setPlaceholderText("Profile pic is already uploaded");
    }
  }, [authState]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFiles(file);
      setPlaceholderText("Profile pic selected");
      const previewURL = URL.createObjectURL(file);
      setProfilePicPreview(previewURL);
      setFileSelected(true);
    }
  };

  const clearSelection = () => {
    setFiles(null);
    setProfilePicPreview(null);
    setFileSelected(false);
    setPlaceholderText(Placeholder);
    InputRef.current.value = '';
  };

  const fileUploadClick = (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (UploadStatus && !confirm("The images are already uploaded. Do you want to update it ?")) {
      e.preventDefault();
    }
  };

  return (
    <>
      <input
        type="file"
        id="profilePicUpload"
        accept="image/*,.png,.jpg,.jpeg"
        onChange={handleImageUpload}
        hidden
        onClick={fileUploadClick}
        ref={InputRef}
      />
      <label htmlFor="profilePicUpload" className={ClassName}>
        {placeholderText}
      </label>
      {Error.profilePic && <span className="text-red-600 text-xs">{Error.profilePic}</span>}
      {profilePicPreview && (
        <>
          <div className="flex items-center mt-5 h-10 w-10">
            <img
              src={profilePicPreview}
              alt="profile pic"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div> 
          <button onClick={() => { setUpload(files) }} className="text-md text-gray-600 hover:underline">Upload</button>
          <button onClick={clearSelection} className="ml-3 text-md text-gray-600 hover:underline">Clear</button>
        </>
      )}

    </>
  );
}

export default ProfilePicUpload;
