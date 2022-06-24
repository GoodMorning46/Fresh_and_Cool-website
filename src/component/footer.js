import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer flexer">
      <div className="w40 flexer">
        <div className="block2">
          <div className="marque">
            <img src={require("../assets/logo.png")} alt="Vêtement cool"></img>
          </div>

          <div className="links flexer w80 marg">
            <a href="/">
              <img
                className="instagram"
                src={require("../assets/insta.png")}
                alt="Instagram"
              ></img>
            </a>

            <a href="/">
              <img
                className="tiktok"
                src={require("../assets/tiktok.png")}
                alt="TikTok"
              ></img>
            </a>
            <a href="/">
              <img
                className="fb"
                src={require("../assets/facebook.png")}
                alt="Facebook"
              ></img>
            </a>
            <a href="/">reseaux</a>
            <a href="/">reseaux</a>
          </div>
        </div>
      </div>

      <div className="w55 ">
        <div className="w80 flexer">
          <div className="block">
            <div className="line">
              <h3>Aide et info</h3>
            </div>

            <div className="links">
              <ul>
                <a href="/">
                  <li>Suivi de commande</li>
                </a>
                <a href="/">
                  <li>Livraison</li>
                </a>
                <a href="/">
                  <li>Commandes et Paiements</li>
                </a>
                <a href="/">
                  <li>Service clients</li>
                </a>
                <a href="/">
                  <li>Nous contacter</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="block">
            <div className="line">
              <h3>Liens rapides</h3>
            </div>

            <div className="links">
              <ul>
                <a href="/">
                  <li>Réduction Étudiants</li>
                </a>
                <a href="/">
                  <li>Marques</li>
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

      <div className="w100">
        <div className="cg">
          <a href="/">
            <p>Politiques de confidentialité</p>
          </a>
          <a href="/">
            <p>Conditions générales</p>
          </a>
          <a href="/">
            <p>Cookies</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
