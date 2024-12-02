import React from "react";
import "../sass/components/Apartment.scss";
import { NavLink } from "react-router-dom";
function Apartment() {
  return (
    <div className="apartment-card">
      <NavLink to="/apartment">
        <div className="apartment-card__title">Titre de la <br /> location </div>
      </NavLink>
    </div>
  );
}

export default Apartment;
