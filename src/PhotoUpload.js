import React, { useState } from 'react';
function PhotoUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpload(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handleFileChange}
      />
      <label htmlFor="photo-upload">Upload Photo</label>
    </div>
  );
}

export default PhotoUpload;
 