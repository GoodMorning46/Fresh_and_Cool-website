import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import "./CSS/faq.css";

const FAQ = () => {
  return (
    <div>
        <Header />
        <div className="FAQ">
        
          <div className="FAQQuestion">
            <h2>Comment pouvons-nous vous aider ?</h2>
            <p>Vous trouverez ici une assistance sur tous les aspects des achats en ligne et les réponses aux questions les plus fréquemment posées.</p>
          </div>
        </div>

        <div className="flexer sections">
          <div className="section flexer">
            <h1>FAQ</h1>
            
            <div className="part">
            <a href="livraison" title="Livraison">
              <h2>Livraison</h2>
              <p>Avez-vous des questions relatives à la livraison ?</p>
            </a>
            </div>

            <div className="part">
            <a href="Bons" title="Livraison">
              <h2>Bons d’achat</h2>
              <p>Acheter et échanger des bons d'achat !</p>
            </a>
            </div>

            <div className="part">
            <a href="Retours" title="Livraison">
              <h2>Retours</h2>
              <p>Toutes les informations sur les retours !</p>
            </a>
            </div>

            <h1>Rubriques d'aide</h1>

            <div className="part2">
            <a href="commandes" title="Livraison">
              <h2>Choix des articles et commande</h2>
            </a>
            </div>

            <div className="part2">
            <a href="Compte" title="Livraison">
              <h2>Compte client</h2>
            </a>
            </div>

            <div className="part2">
            <a href="Paiement" title="Livraison">
              <h2>Paiement et bons d’achat</h2>
            </a>
            </div>

            <div className="part2">
            <a href="expedition" title="Livraison">
              <h2>Expédition et livraison</h2>
            </a>
            </div>

            <div className="part2">
            <a href="Newsletter" title="Livraison">
              <h2>Newsletter</h2>
            </a>
            </div>
            
          </div>
        </div>

      
      <Footer />
    </div>
  );
};

export default FAQ;
