import React from "react";
import "../invalidroute/InvalidRoute.css"

const InvalidRoute = () => {
  return (
      <div className="container-center">
        <div className="container-center-item">
          <h1 className="errorText">404</h1>
        </div>
        <div className="container-center-item">
          <p className='errorDescription'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="container-center-item">
          <a href='/' className="returnButton">Retourner sur la page d’accueil</a>
        </div>
      </div>
  );
};

export default InvalidRoute;
