import React from "react";

import Carousel from "./Carousel/Carousel";
import Header from "./Header/Header";
import "./home.scss";
function Home() {
  return (
    <div className="home-container">
      <Header />

      <Carousel/>
    </div>
  );
}

export default Home;
