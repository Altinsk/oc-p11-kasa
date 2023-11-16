import React from "react";
import logoWhite from "../../assets/logoWhite.png";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black", paddingTop: 50, marginTop: 50 }}>
      <div style={{ textAlign: "center" }}>
        <img src={logoWhite} alt="logoWhite" className="image1" width={100} />
      </div>
      <div style={{ color: "white", textAlign: "center", padding: 30 }}>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
