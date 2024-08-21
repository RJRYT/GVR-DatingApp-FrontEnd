import React, { useState, useRef } from "react";

function ReelUpload({ setUpload, Error, Placeholder, ClassName, setFileSelected }) {
  const [videoPreview, setVideoPreview] = useState(null);
  const InputRef = useRef(null);
  const [placeholderText, setPlaceholderText] = useState(Placeholder);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPlaceholderText("Reel selected");
      const previewURL = URL.createObjectURL(file);
      setVideoPreview(previewURL);
      setFileSelected(true);
      setUpload(file);
    }
  };

  const clearSelection = () => {
    setVideoPreview(null);
    setPlaceholderText(Placeholder);
    setFileSelected(false);
    InputRef.current.value = '';
  };

  const fileUploadClick = (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("The reel is already uploaded. Do you want to update it ?")) {
      e.preventDefault();
    }
  };

  return (
    <>
      <input
        type="file"
        id="videoUpload"
        accept="video/mp4,video/webm"
        onChange={handleVideoUpload}
        hidden
        onClick={fileUploadClick}
        ref={InputRef}
      />
      <label htmlFor="videoUpload" className={ClassName}>
        {placeholderText}
      </label>
      {Error.shortReel && <span className="text-red-600 text-xs">{Error.shortReel}</span>}
      {videoPreview && (
        <>
          <div className="flex items-center gap-2 h-30 w-full">
            <video src={videoPreview} className="p-3 rounded-xl" controls />
          </div>
          <button onClick={clearSelection} className="ml-3 text-md text-gray-600 hover:underline">Clear</button>
        </>
      )}
    </>
  );
}

export default ReelUpload;
