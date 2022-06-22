import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container flexer">
          <ul className="flexer menu1">
            <li>
              <a href="/" title="acceuil">
                Accueil<div className="test"></div>
              </a>
            </li>
            <li>
              <a href="event" title="Event">
                Event<div className="test"></div>
              </a>
            </li>
            <li>
              <a href="faq" title="FAQ">
                FAQ<div className="test"></div>
              </a>
            </li>
          </ul>

          <div className="menu2">
            <a href="connexion">Connexion</a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
