import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img className="img" src={props.img}></img>
        <h2 className="card_title">{props.h2}</h2>
        <p className="card_description">{props.p}</p>
      </div>
      <button className="card_button">Acheter</button>
    </div>
  );
}

export default Card;
