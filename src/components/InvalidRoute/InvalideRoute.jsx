import React from "react";
import "../InvalidRoute/InvalidRoute.css"

const InvalidRoute = () => {
  return (
    <div className="errorDiv">
      <div>
      <h1 className="errorText">404</h1>
      </div>
      <p className='errorDescription'>Oups! La page que vous demandez n'existe pas.</p>
      <a href='/accueil' className="returnButton">Retourner sur la page d’accueil</a>
    </div>
  )
}

export default InvalidRoute;