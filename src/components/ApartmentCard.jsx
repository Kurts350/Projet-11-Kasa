import React from "react";
import "../sass/components/ApartmentCard.scss";
import { NavLink } from "react-router-dom";

function ApartmentCard(props) {
  console.log("props dans la card : ", props);
  return (
    <NavLink to="/apartment">
      <div className="apartment-card">
        <img src={props.imageUrl} alt="" />
        <div className="apartment-card__title">{props.title}</div>
      </div>
    </NavLink>
  );
}

export { ApartmentCard };
