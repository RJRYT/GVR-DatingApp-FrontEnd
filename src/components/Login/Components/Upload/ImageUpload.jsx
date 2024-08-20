import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

function ImageUpload({ setUpload, Error, UploadStatus, SetUploadStatus, Placeholder, ClassName, setFileSelected }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [files, setFiles] = useState(null);
  const InputRef = useRef(null);
  const [placeholderText, setPlaceholderText] = useState(Placeholder);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (
      authState.isAuthenticated &&
      authState.user &&
      authState.user.images.length
    ) {
      const previews = authState.user.images.map((file) => file.url);
      setImagePreviews(previews);
      setFileSelected(true);
      SetUploadStatus(true);
      setPlaceholderText(`${previews.length} images already uploaded`);
    }
  }, [authState]);

  const clearSelection = () => {
    setFiles(null);
    setImagePreviews([]);
    setPlaceholderText(Placeholder);
    setFileSelected(false);
    InputRef.current.value = '';
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length) {
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
      setFiles(files);
      setPlaceholderText(`${previews.length} images Selected`);
      setFileSelected(true);
    }

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
        id="imageUpload"
        accept="image/*,.png,.jpg,.jpeg"
        onChange={handleImageUpload}
        hidden
        multiple
        onClick={fileUploadClick}
        ref={InputRef}
      />
      <label htmlFor="imageUpload" className={ClassName}>
        {placeholderText}
      </label>
      {Error.images && <span className="text-red-600 text-xs">{Error.images}</span>}
      {imagePreviews.length ? (
        <>
          <div className="flex items-center mt-5 flex-wrap gap-2 w-full">
            {imagePreviews.length && imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Profile pic Preview ${index + 1}`}
                className="w-10 h-10 object-contain aspect-[3/2] rounded-3xl"
              />
            ))}
          </div>
          <button onClick={() => { setUpload(files) }} className="text-md text-gray-600 hover:underline">Upload</button>
          <button onClick={clearSelection} className="ml-3 text-md text-gray-600 hover:underline">Clear</button>
        </>
      ) : null}
    </>
  );
}

export default ImageUpload;
