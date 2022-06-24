import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Card from "../component/card";

//import Navigation from "../component/Navigation";
// <Navigation/>

function Home() {
  return (
    <div className="Home" id="Home">
      <Header />
      <div>
        <p> test5</p>
      </div>
      <div className="wrapper">
        <Card //Le tee-shirt blanc
          img="http://assets.stickpng.com/images/580b57fbd9996e24bc43bf7b.png"
          h2="Le tee-shirt"
          p="Ce tee-shirt vous procure une sensation de fraicheur tout au long de votre journée."
        />
        <Card  // Le pare-soleil
        img="https://pullfr-4c63.kxcdn.com/pare-soleil-de-voiture-127-6-26654.png?cultureCode=fr-FR&UseBlobStorage=False&version=9eeaf768280ade624315f0908b59657d"
        h2="Le pare-soleil" 
        p="Ce pare-soleil conçu avec une nouvelle technologie permettra à votre habitacle de rester frais peut importe la température extérieur."
        />
        <Card // La gourde
        img="https://cdn3.sans-bpa.com/16350-large_default/qwetch-bouteille-inox-750-turquoise.jpg"
        h2="La gourde"
        p="Terminer avec l'eau chaude au fond du sac après une rando, la fraicheur n'a pas de prix" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;