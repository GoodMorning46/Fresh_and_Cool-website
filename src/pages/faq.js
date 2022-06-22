import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import "./CSS/faq.css";

const FAQ = () => {
  return (
    <div>
      <Header />
      <div className="FAQ">
        <h1>FAQ</h1>
        <div className="FAQQuestion">
          <h2>Pourquoi vos produits sont-ils aussi chers ?</h2>
          <p>T'as cru on allait du H&M ?</p>
        </div>
        <div className="FAQQuestion">
          <h2>Du coup vous vendez des contrefaçons ?</h2>
          <p>
            Mais bien sûr ! Quand tu vas chez Rolex tu demandes si ils vendent
            des contrefaçons ?
          </p>
        </div>
        <div className="FAQQuestion">
          <h2>Y'a moyen d'avoir une réduction ?</h2>
          <img alt="Nope" src={require("../assets/Nope.jpg")}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
