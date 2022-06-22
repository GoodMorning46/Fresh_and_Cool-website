import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer flexer">
      <div className="w40 flexer">
        <div className="block2">
          <div className="marque">
            <span>Nom de marque</span>
          </div>

          <div className="links flexer w80 marg">
            <a href="/">reseaux</a>
            <a href="/">reseaux</a>
            <a href="/">reseaux</a>
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
                  <li>Retours, échanges et annulations</li>
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
