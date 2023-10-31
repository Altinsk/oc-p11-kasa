import React from "react";
import ImageBackground from "../../component/ImageBackground";
import ThumbList from "../home/ThumbList";

const Accueil = () => {
  return (
    <div>
      <ImageBackground content={"Chez vous, partous et ailleurs"} />
      <ThumbList />
    </div>
  );
};

export default Accueil;