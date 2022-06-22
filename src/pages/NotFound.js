import React from "react";
import "./CSS/NotFound.css";

function NotFound() {
  return (
    <div className="NotFoundContainer">
      <span className="NFText">
        <p className="NotFoundText">Oopsie</p>
        <p>
          La page que vous avez à laquelle vous tentez d'accéder n'existe pas
        </p>
      </span>
      <img alt="Not Found" src={require("../assets/NotFound.png")}></img>
    </div>
  );
}

export default NotFound;
