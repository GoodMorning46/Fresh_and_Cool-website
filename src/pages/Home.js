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
      <div className="section2"></div>
      <Footer />
    </>
  );
};

export default App;
