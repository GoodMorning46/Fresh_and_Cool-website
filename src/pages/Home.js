import React from "react";
import "./CSS/home.css";
import Header from "../component/header";
import Footer from "../component/footer";
import Product from "../component/product";

//import Navigation from "../component/Navigation";
// <Navigation/>

function Home() {
  return (
    <div className="Home" id="Home">
      <Header />
      <div>
        <div className="products flexer">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
        <p> test5</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
