import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container-flexer">
          <div className="menu_gauche">
            <ul className="flexer menu1">
              <li>
                <a href="/" title="acceuil">
                  Accueil<div className="test"></div>
                </a>
              </li>
              <li>
                <a href="event" title="Vetement">
                  Vêtements<div className="test"></div>
                </a>
              </li>
              <li>
                <a href="Accessoires" title="Accessoires">
                  Accessoires<div className="test"></div>
                </a>
              </li>
              <li>
                <a href="faq" title="FAQ">
                  FAQ<div className="test"></div>
                </a>
              </li>
            </ul>
          </div>

          <div className="menu2">
            <a href="connexion">Connexion</a>
            <button className="button1" href="enregistrer">
              S'enregistrer
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
