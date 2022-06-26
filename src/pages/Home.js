import Header from "../component/header";
import Footer from "../component/footer";
import "./CSS/home.css";

// //import Navigation from "../component/Navigation";
// // <Navigation/>
// const Home = () => {
//   const [item, setItem] = useState(Data);
//   return (
//     <>
//       <div className="Home" id="Home">
//       <div className="body">
//         <Header />
//         <div className="Texte1">
//           <h1 className="titre">Fresh and Cool</h1>
//           <p className="sous-titre">
//             Bienvenue chez vous, vous trouverez ici des vêtements et accessoires
//             contre la chaleur. Merci aux personnes n'ayant aucune conscience
//             climatique...{" "}
//           </p>
//         </div>

// <div className="wrapper">
//   <Card //Le tee-shirt blanc
//     img="https://www.bclconcept.fr/uploads/media/product_catalog/0001/14/thumb_13328_product_catalog_large.png"
//     h2="Le tee-shirt"
//     alt="tee-shirt"
//     p="Ce tee-shirt vous procure une sensation de fraicheur tout au long de votre journée."
//   />
//   <Card // Le pare-soleil
//     img="https://pullfr-4c63.kxcdn.com/pare-soleil-de-voiture-127-6-26654.png?cultureCode=fr-FR&UseBlobStorage=False&version=9eeaf768280ade624315f0908b59657d"
//     h2="Le pare-soleil"
//     alt="Pare-soleil"
//     p="Ce pare-soleil conçu avec une nouvelle technologie permettra à votre habitacle de rester frais peut importe la température extérieur."
//   />
//   <Card // La gourde
//     img="https://cdn3.sans-bpa.com/16350-large_default/qwetch-bouteille-inox-750-turquoise.jpg"
//     h2="La gourde"
//     alt="Gourde"
//     p="testTerminer avec l'eau chaude au fond du sac après une rando, la fraicheur n'a pas de prix"
//   />
// </div>
//         <div className="section2"></div>

//       </div>

//       </div>
//       <Footer />
//     </>
//   );
// };
// export default Home;

import React, { useState } from "react";
import Data from "../Data";
import Card from "../component/card";
import Button from "../component/Button";

const App = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <Header />
      <div className="body">
        <div className="container-fluid">
          <div className="row">
            <div className="Texte1">
              <h1 className="titre">Fresh and Cool</h1>
              <p className="sous-titre">
                Bienvenue chez vous, vous trouverez ici des vêtements et
                accessoires contre la chaleur. Merci aux personnes n'ayant
                aucune conscience climatique...{" "}
              </p>
            </div>
            <Button
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <Card item={item} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
