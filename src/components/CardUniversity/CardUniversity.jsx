import React from "react";
import img1 from "../../assets/uni1.png";
import "./carduniversity.scss";
function CardUniversity() {
  return (
    <div className="card-uni-container">
      <div className="first-row">
        <span className="number">10</span>
        <span>Universidad Nacional del Noroeste</span>
        <span>Estrellas</span>
      </div>
      <img src={img1}/>
      <div className="third-row">
        <span>10</span>
        <span>Universidad Nacional del Noroeste</span>
        <span>Estrellas</span>
      </div>
    </div>
  );
}

export default CardUniversity;
