import React, { useState } from "react";
import ImageBackground from "../../component/Imagebackground/ImageBackground";
import Collapse from "../../component/Collapse/Collapse";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import cardArray from "../../data/data.json";
import "./Location.css"

const Location = () => {
  const { id } = useParams();
  const iterator = cardArray?.find((card) => card?.id === id) || cardArray[0];
  const {
    title,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
    pictures,
  } = { ...iterator };
  const [picIndex, setPicIndex] = useState(0);
    const [collapseArray, setCollapseArray] = useState([
    {
      id: 1,
      title: "Description",
      content: description,
      visible: true,
    },
    {
      id: 2,
      title: "Equipements",
      equipments,
      visible: false,
    },
  ]);

  const handleClick = (id) => {
    const modifiedArray = collapseArray.map((item) => {
      if (item.id === id) {
        item.visible = !item.visible;
      }
      return item;
    });
    setCollapseArray(modifiedArray);
  };

  const handleLeftClick = () => {
    if (picIndex === 0) setPicIndex(pictures.length - 1);
    else setPicIndex((prevState) => prevState - 1);
  };

  const handleRightClick = () => {
    if (picIndex === pictures.length - 1) setPicIndex(0);
    else setPicIndex((prevState) => prevState + 1);
  };

  /*const pictureCounter = () => {
    const pictureNumber = picIndex + 1;
    const totalPictures = pictures.length;
    const counter = toString(pictureNumber) / toString(totalPictures);
    return counter;
  }*/

  const [pictureNumber, setPictureNumber] = useState(1);

  const pictureCounter = () => {
       setPictureNumber(pictureNumber + 1);
  };

  if (!iterator) return <>No data</>;
  
  return (
    <>
      <ImageBackground
        imgSrc={pictures[picIndex]}
        handleLeft={handleLeftClick}
        handleRight={handleRightClick}
        picCounter = {pictureCounter}
      />

      
       <div className="grid-container">
        <div className="mainItemLeft">
          <h4
            style={{
              color: "#FF6060",
              margin: "0px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {title}
          </h4>
          <p style={{ color: "#FF6060", fontSize: "20px", margin: "0px" }}>
            {location}
          </p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag} </li>
            ))}
          </ul>
        </div>
        <div className="mainItemRight">
          <div className="lable">
            <div className="border"> 
            </div>
            <div className="text3">
              {[
                host?.name
                  ?.split(" ")
                  ?.map((name, index) => <div key={index}>{name}</div>),
              ]}
            </div>
          </div>    
          <div>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((item, index) => {
                const tempRating = ~~rating;
                if (tempRating < item) {
                  return (
                    <AiFillStar className="outLineStar"  key={index} size={35} color="#E3E3E3" />
                  );
                }
                return <AiFillStar className="outLineStar" key={index} size={35} color="#FF6060" />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        {collapseArray.map((iterator, index) => (
          <div key={index} className="grid-item-start">
            <Collapse
              data={iterator}
              handleClick={() => handleClick(iterator?.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Location;




















