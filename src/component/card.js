// import React from "react";
import "./card.css";

// function Card(props) {
//   return (
//     <div className="card">
//       <div className="card_body">
//         <img className="img" src={props.img} alt={props.alt}></img>
//         <h2 className="card_title">{props.h2}</h2>
//         <p className="card_description">{props.p}</p>
//         <div className="twobutton">
//           <button className="card_button1">Acheter</button>
//           <button className="card_button2">En savoir plus</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="card_body">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className="photo w-75" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
