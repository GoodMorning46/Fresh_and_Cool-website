import React from "react";
import "./CSS/NotFound.css";

function NotFound() {
  return (
    <div className="NotFoundContainer">
      <span className="NFText">
        <p className="NotFoundText">Oopsie</p>
        <p>The page you are looking for is not available</p>
      </span>
      <img alt="Not Found" src={require("../assets/NotFound.png")}></img>
    </div>
  );
}

export default NotFound;
