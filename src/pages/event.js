import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import "./CSS/event.css";

import Data from "../Data";
import Card from "../component/card";

const Event = () => {
  const [item, setItem] = useState(Data);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
          <Card item={item} /> // UI Component
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
