import React from "react";

import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import "./carduniversity.scss";
function CardUniversity({
  place,
  name,
  img,
  faculties,
  careers,
  students,
  starts,
}) {
  return (
    <div className="card-uni-container">
      <div className="first-row">
        <span className="number">{place}</span>
        <span>{name}</span>
        <div className="starts">
          {[...Array(starts)].map((start) => {
            return (
              <span>
                <FaStar />
              </span>
            );
          })}
        </div>
      </div>
      <img src={img} />
      <div className="third-row">
        <div className="data">
          <span>{place}</span>
          <span>place</span>
        </div>
        <div className="data">
          <span>{faculties}</span>
          <span>Faculties</span>
        </div>
        <div className="data">
          <span>{careers}</span>
          <span>Careers</span>
        </div>
        <div className="data">
          <span>{students}</span>
          <span>Students</span>
        </div>
      </div>
    </div>
  );
}

export default CardUniversity;
