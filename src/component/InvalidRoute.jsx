import React from "react";

const InvalidRoute = () => {
  return (
    <>
      <div className="container-center">
        <div className="container-center-item">
          <h1 className="errorText">404</h1>
        </div>
        <div className="container-center-item">
          <p className='errorDescription'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div>
          <a href='/accueil' className="returnButton">Retourner sur la page d’accueil</a>
        </div>
      </div>
    </>
  );
};

export default InvalidRoute;
