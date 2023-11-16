import React from "react";
import ThumbList from "../../component/Thumblist/ThumbList";
import ImageBackground from "../../component/Imagebackground/ImageBackground"
import backImg from "../../assets/backImg.png"


const Home = () => {
  return (
      <div>
        <ImageBackground  imgSrc = {backImg} content={"Chez vous, partout et ailleurs"} />
        <ThumbList />
      </div>
  );
};

export default Home;
