import React, { useState, useRef } from "react";

function ImageUpload({ setUpload, Error, Placeholder, ClassName, setFileSelected }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const InputRef = useRef(null);
  const [placeholderText, setPlaceholderText] = useState(Placeholder);

  const clearSelection = () => {
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
      setUpload(files);
      setPlaceholderText(`${previews.length} images Selected`);
      setFileSelected(true);
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
          <button onClick={clearSelection} className="text-md text-gray-600 hover:underline">Clear</button>
        </>
      ) : null}
    </>
  );
}

export default ImageUpload;
