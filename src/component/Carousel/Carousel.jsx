import React from "react";
import "../Carousel/Carousel.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({
  imgSrc,
  content,
  handleLeft,
  handleRight, 
  displayImageNumber
  }) => {
  return (
    <>
    <div className="image-container-carousel">
      {handleLeft && (
        <div className="centerLeft-carousel">
          <AiOutlineLeft color="white" onClick={handleLeft} />
        </div>
      )}

      <img src={imgSrc} alt="Description" className="img-bg-carousel" />
      
      {displayImageNumber && (
        <div className="middleCenter-carousel">
            <p>{displayImageNumber}</p>
        </div>
        )}

      {handleRight && (
        <div className="centerRight-carousel">
          <AiOutlineRight color="white" onClick={handleRight} />
        </div>
      )}

    </div>

    {content && (
      <div className="text">
        <div className="text-content-carousel">{content}</div>
      </div>
    )}
  </>
  );
};

export default Carousel;