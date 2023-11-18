import React from "react";
import "./ImageBackground.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ImageBackground = ({
  imgSrc,
  content,
  handleLeft,
  handleRight, 
  picCounter
  }) => {
  return (
    <>
    <div className="image-container">

      <img src={imgSrc} alt="Description" className="img-bg" />
      
      {picCounter && (
        <div className="pic-counter">
            <p>{picCounter}</p>
        </div>
        )}

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