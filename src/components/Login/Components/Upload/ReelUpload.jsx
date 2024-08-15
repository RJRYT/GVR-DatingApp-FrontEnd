import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

function ReelUpload({ setUpload, Error, UploadStatus, SetUploadStatus, Placeholder, ClassName, setFileSelected }) {
  const [videoPreview, setVideoPreview] = useState(null);
  const InputRef = useRef(null);
  const [files, setFiles] = useState(null);
  const [placeholderText, setPlaceholderText] = useState(Placeholder);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (
      authState.isAuthenticated &&
      authState.user &&
      authState.user.shortReel
    ) {
      setVideoPreview(authState.user.shortReel.url);
      setFileSelected(true);
      SetUploadStatus(true);
      setPlaceholderText("Reel already uploaded");
    }
  }, [authState]);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPlaceholderText("Reel selected");
      const previewURL = URL.createObjectURL(file);
      setVideoPreview(previewURL);
      setFileSelected(true);
      setFiles(file);
    }
  };

  const clearSelection = () => {
    setFiles(null);
    setVideoPreview(null);
    setPlaceholderText(Placeholder);
    setFileSelected(false);
    InputRef.current.value = '';
  };

  const fileUploadClick = (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (UploadStatus && !confirm("The reel is already uploaded. Do you want to update it ?")) {
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
          <button onClick={() => { setUpload(files) }} className="text-md text-gray-600 hover:underline">Upload</button>
          <button onClick={clearSelection} className="ml-3 text-md text-gray-600 hover:underline">Clear</button>
        </>
      )}
    </>
  );
}

export default ReelUpload;
