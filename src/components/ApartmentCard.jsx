import React from "react";
import "../sass/components/ApartmentCard.scss";
import { NavLink } from "react-router-dom";

function ApartmentCard(props) {
  return (
    <NavLink to={`/apartment/${props.id}`} state={{ apartmentId: props.id }}>
      <div className="apartment-card">
        <img src={props.imageUrl} alt="" />
        <div className="apartment-card__title">{props.title}</div>
      </div>
    </NavLink>
  );
}

export { ApartmentCard };
