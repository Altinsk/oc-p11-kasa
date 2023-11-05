import React from "react";
import ImageBackground from "../../component/imagebackground/ImageBackground";
import mountImg from "../../assets/mountain1.png"
import Accordion from "../../component/accordion/Accordion";
import { useState } from "react";
import "../about/About.css"

const About = () => {
  const [accordionArray, setAccordionArray] = useState([
    {
      id: 1,
      title: "Fiabilité",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      visible: false,
    },
    {
      id: 2,
      title: "Respect",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      visible: false,
    },
    {
      id: 3,
      title: "Service",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      visible: false,
    },
    {
      id: 4,
      title: "Sécurité",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      visible: false,
    },
  ]);

  const handleClick = (id) => {
    const modifiedArray = accordionArray.map((item) => {
      if (item.id === id) {
        item.visible = !item.visible;
      }
      return item;
    });

    setAccordionArray(modifiedArray);
  };

  return(
    <div>
    <ImageBackground imgSrc={mountImg} />

    <div className="container">
      {accordionArray.map((iterator, index) => (
        <div key={index}>
          <br />

          <Accordion data={iterator} handleClick={handleClick} />
        </div>
      ))}
    </div>
  </div>
  )
};

export default About;