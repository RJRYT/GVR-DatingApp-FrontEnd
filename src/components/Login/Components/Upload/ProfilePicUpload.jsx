import React, { useState, useRef } from "react";

function ProfilePicUpload({ setUpload, Error, Placeholder, ClassName, setFileSelected }) {
  const InputRef = useRef(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [placeholderText, setPlaceholderText] = useState(Placeholder);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUpload(file);
      setPlaceholderText("Profile pic selected");
      const previewURL = URL.createObjectURL(file);
      setProfilePicPreview(previewURL);
      setFileSelected(true);
    }
  };

  const clearSelection = () => {
    setProfilePicPreview(null);
    setFileSelected(false);
    setPlaceholderText(Placeholder);
    InputRef.current.value = '';
  };

  return (
    <>
      <input
        type="file"
        id="profilePicUpload"
        accept="image/*,.png,.jpg,.jpeg"
        onChange={handleImageUpload}
        hidden
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
          <button onClick={clearSelection} className="text-md text-gray-600 hover:underline">Clear</button>
        </>
      )}

    </>
  );
}

export default ProfilePicUpload;
