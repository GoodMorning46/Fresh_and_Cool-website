import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer flexer">
      <div className="w40 flexer">
        <div className="block2">
          <div className="marque">
            <img className="logo" src={require("../assets/Logo_final.png")} alt="Fresh and Cool"></img>
          </div>

          <div className="links flexer w80 marg">
            <a href="/">
              <img className="instagram" src={require("../assets/insta.png")} alt="Instagram"></img>
            </a>

            <a href="/">
              <img className="tiktok" src={require("../assets/tiktok.png")} alt="TikTok"></img>
            </a> 
          </div>
          
        </div>
      </div>

      <div className="w55 ">
        <div className="w80 flexer">
          <div className="block">
            <div className="line">
              <h3 className="titre_aide"> Aide et info</h3>
            </div>

            <div className="links">
              <ul>
                <a href="/">
                  <li>Commandes et Paiements</li>
                </a>
                
                <a href="/">
                  <li>Suivi de commande</li>
                </a>
                <a href="/">
                  <li>Nous contacter</li>
                </a>
                <a href="/">
                  <li>Service clients</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="block">
            <div className="line">
              <h3 className="titre_aide">Liens rapides</h3>
            </div>

            <div className="links">
              <ul>
                <a href="/">
                  <li>Réduction Étudiants</li>
                </a>
                
                <a href="/">
                  <li>Cartes Cadeaux</li>
                </a>
                <a href="/">
                  <li>Magasins</li>
                </a>
                <a href="/">
                  <li>Avis</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
