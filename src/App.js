import React, { useState, useEffect } from 'react';
import PhotoUpload from './PhotoUpload';
import './Gallery.css';

function App() {
  const [photos, setPhotos] = useState([]);

  // Load photos from localStorage on mount
  useEffect(() => {
    const savedPhotos = JSON.parse(localStorage.getItem('photos')) || [];
    setPhotos(savedPhotos);
  }, []);

  // Save photos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('photos', JSON.stringify(photos));
  }, [photos]);

  const handleUpload = (newPhoto) => {
    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  return (
    <div className="app">
      <h1>React Photo Gallery</h1>
      <PhotoUpload onUpload={handleUpload} />
      <div className="gallery">
        {photos.length === 0 ? (
          <p>No photos uploaded yet. Upload some to get started!</p>
        ) : (
          photos.map((photo, index) => (
            <div key={index} className="photo-container">
            <img src={photo} alt={`Uploaded ${index}`} className="photo" />

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;