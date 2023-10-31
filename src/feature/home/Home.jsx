import React from "react";
import ThumbList from "./ThumbList";
import ImageBackground from "../../component/ImageBackground"

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
