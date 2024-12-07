import React, { useEffect } from "react";
import "../sass/components/ApartmentSection.scss";
import { ApartmentCard } from "./ApartmentCard.jsx";
import { useState } from "react";

function ApartmentSection() {
  const [apartments, setApartments] = useState([]);
  useEffect(fetchApartments, []);
  function fetchApartments() {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard 
        title={apartment.title}
        imageUrl={apartment.cover}/>
      ))}
    </div>
  );
}

export { ApartmentSection };
