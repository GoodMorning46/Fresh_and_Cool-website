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
        <Card
          img="http://assets.stickpng.com/images/580b57fbd9996e24bc43bf7b.png"
          h2="Tee-shirt"
          p="Ce tee-shirt vous procuère une sensation de fraicheur tout au long de votre journée."
        />
        <Card h2="Pare-soleil" />
        <Card h2="Gourde" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
