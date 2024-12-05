import React from "react";
import "../sass/components/ApartmentSection.scss";
import {ApartmentCard} from "./ApartmentCard.jsx";

function ApartmentSection() {
  return (
    <div className="grid">
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
    </div>
  );
}

export { ApartmentSection };
