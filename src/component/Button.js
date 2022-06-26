import React from "react";
import Data from "../Data";
import "./Button.css";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          Tout
        </button>

        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Vetement")}
        >
          Vetement
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("Boisson")}
        >
          Boisson
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Voiture")}
        >
          Voiture
        </button> */}
      </div>
    </>
  );
};

export default Buttons;
