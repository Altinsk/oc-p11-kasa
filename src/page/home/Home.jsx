import React from "react";
import ThumbList from "../../component/thumblist/ThumbList";
import ImageBackground from "../../component/imagebackground/ImageBackground"

const Home = () => {
  return (
    <>
      <div>
        <ImageBackground content={"Chez vous, partous et ailleurs"} />
        <ThumbList />
      </div>
    </>
  );
};

export default Home;
