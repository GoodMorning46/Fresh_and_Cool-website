import React from 'react';
import './header.css';


const Header = () => {
    return (
      <header>
         <nav>
            <div class="container flexer">
                <ul class="flexer menu1">
                    <li><a title="acceuil">Acceuil<div class="test"></div></a></li>

                    <li><a  title="Event">Event<div class="test"></div></a></li>
                    <li><a  title="Contact">Contact<div class="test"></div></a></li>
                </ul>


                <div class="menu2">
                     <a>Connexion</a>
                 </div>
            </div>
        </nav>
      </header>
    )
  }
export default Header;