import React from "react";
import ImageGallery from "./ImageGallery";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="gallery-heading">GALLERY</div>
      <div className="image-gallery">
        <ImageGallery />
      </div>
    </div>
  );
};

export default Gallery;
