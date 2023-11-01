import React from "react";
import backImg from "../../assets/backImg.png"
import "../imagebackground/ImageBackground.css"

const ImageBackground = ({
  imgSrc = backImg,
  content,
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