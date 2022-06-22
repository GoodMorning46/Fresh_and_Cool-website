import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div class="container flexer">
          <ul class="flexer menu1">
            <li>
              <a href="/" title="acceuil">
                Accueil<div class="test"></div>
              </a>
            </li>
            <li>
              <a href="event" title="Event">
                Event<div class="test"></div>
              </a>
            </li>
            <li>
              <a href="faq" title="FAQ">
                FAQ<div class="test"></div>
              </a>
            </li>
          </ul>

          <div class="menu2">
            <a href="connexion">Connexion</a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
