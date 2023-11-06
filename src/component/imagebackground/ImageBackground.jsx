import React from "react";
import "../imagebackground/ImageBackground.css"
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
      {handleLeft && (
        <div className="centerLeft">
          <AiOutlineLeft color="white" onClick={handleLeft} />
        </div>
      )}

      <img src={imgSrc} alt="Description" className="img-bg" />
      
      {picCounter && (
        <div className="pic-counter">
            <p>{picCounter}</p>
        </div>
        )}

      {handleRight && (
        <div className="centerRight">
          <AiOutlineRight color="white" onClick={handleRight} />
        </div>
      )}

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