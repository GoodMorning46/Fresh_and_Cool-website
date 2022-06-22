import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import "./CSS/event.css";

const Event = () => {
  return (
    <div>
      <Header />
      <div className="event">
        <p>Test event</p>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
