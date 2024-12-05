import React from "react";
import "../sass/components/ApartmentCard.scss";
import { NavLink } from "react-router-dom";

function ApartmentCard() {
  return (
    <NavLink to="/apartment">
      <div className="apartment-card">
        <div className="apartment-card__title">
          Titre de la <br /> location
        </div>
      </div>
    </NavLink>
  );
}

export {ApartmentCard};
