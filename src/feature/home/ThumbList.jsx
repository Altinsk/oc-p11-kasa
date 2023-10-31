import React from "react";
import cardArray from "../../constant/data.json";
import { useNavigate } from "react-router";

const ThumbList = () => {
  const navigate = useNavigate();

  const handleClick = (iterator) => {
    navigate("apropos/" + iterator?.id);
  };

  return (
    <>
      <div>
        <div className="flex-container">
          {cardArray?.map((iterator, index) => (
            <div
              key={index}
              className="flex-item"
              onClick={() => handleClick(iterator)}
            >
              <img
                src={`${iterator.cover}`}
                alt="card-img"
                style={{ backgroundSize: "cover", width: "100%", height: "100%" }}
                className="grid-img"
              />

              <div style={{ marginTop: -60, padding: 5 }}>
                {iterator?.location?.split("-").map((name, i) => {
                  return <div key={i} style={{ color: "white"}}>{name}</div>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThumbList;
