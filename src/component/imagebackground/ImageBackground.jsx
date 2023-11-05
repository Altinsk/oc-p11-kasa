import React from "react";
import "../imagebackground/ImageBackground.css"

const ImageBackground = ({
  imgSrc,
  content
  }) => {
  return (
    <>
      <div className="image-container">
        <img src={imgSrc} alt="Description" className="img-bg" />
      </div>
      {content && (
        <div className="text">
          <div>{content}</div>
        </div>
      )}
    </>
  );
};

export default ImageBackground;