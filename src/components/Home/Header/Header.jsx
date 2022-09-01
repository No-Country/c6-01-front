import React from "react";
import "./header.scss";
import img1 from "../../../assets/ilustracion.png";
import img2 from "../../../assets/top10.png";
import img3 from "../../../assets/QuoteMark.png";
function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-image-container">
          <img src={img1}></img>
          <img src={img2}></img>
          <img className="quote"src={img3}></img>
        </div>
        <p className="header-text-container">Las 10 mejores universidades según tu voto</p>
      </div>
    </>
  );
}

export default Header;
