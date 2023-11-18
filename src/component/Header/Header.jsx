import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

const linkArray = [
  { title: "Accueil", route: "/" },
  { title: "A Propos", route: "About" },
];

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const handleStyle = (index) => {
      setActiveLink(index);
    }
  const handleLinkClick = (event, iterator) => navigate(iterator.route);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            className="image1"
            onClick={(event) => {handleLinkClick(event, { route: "/" }); handleStyle(null)}}
          />
        </div>
        <div className="links">
          {linkArray.map((iterator, index) => (
            <Link
              key={index}
              to={iterator.route}
              className="link"
              onClick={(event) =>  {handleLinkClick(event, iterator); handleStyle(index)}}
              style = {{textDecoration: activeLink === index ? "underline" : null}}
            >
              {iterator.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;