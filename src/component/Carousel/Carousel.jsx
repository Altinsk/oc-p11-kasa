import React from "react";
import "../Carousel/Carousel.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({
  imgSrc,
  handleLeft,
  handleRight, 
  displayImageNumber,
  singleImage
  }) => {
  return (
    <>
    <div className="image-container-carousel">
      {handleLeft && !singleImage && (
        <div className="centerLeft-carousel">
          <AiOutlineLeft color="white" onClick={handleLeft} />
        </div>
      )}

      <img src={imgSrc} alt="Description" className="img-bg-carousel" />
      
      {displayImageNumber && !singleImage &&(
        <div className="middleCenter-carousel">
            <p className="displayImageNumber">{displayImageNumber}</p>
        </div>
        )}
      {handleRight && !singleImage &&(
        <div className="centerRight-carousel">
          <AiOutlineRight color="white" onClick={handleRight} />
        </div>
      )}
    </div>
  </>
  );
};

export default Carousel;