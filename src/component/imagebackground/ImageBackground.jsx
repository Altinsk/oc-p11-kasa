import React from "react";
import "./ImageBackground.css"

const ImageBackground = ({
  imgSrc,
  content,
  }) => {
  return (
    <>
    <div className="image-container">
      <img src={imgSrc} alt="Description" className="img-bg" />
    </div>

    {content && (
      <div className="text">
        <div className="text-content">{content}</div>
      </div>
    )}


  </>
  );
};

export default ImageBackground;