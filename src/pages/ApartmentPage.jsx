import React, { useEffect } from "react";
import "../sass/pages/ApartmentPage.scss";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { ImageBanner } from "../components/ImageBanner";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ApartmentPage() {
  const location = useLocation();
  console.log(location);
  console.log(location.state.apartmentId);
  const [apartment, setApartment] = useState(null);
  useEffect(fetchApartmentData, [location.state.apartmentId]);

  function fetchApartmentData() {
    fetch("db.json")
      .then((res) => res.json())
      .then((apartments) => {
        const apartment = apartments.find(
          (apartment) => apartment.id === location.state.apartmentId
        );
        setApartment(apartment);
      })
      .catch(console.error);
  }

  if (apartment === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment">
      <ImageBanner imageUrl={apartment.cover} />
      <ApartmentHeader apartment={apartment} />
      <div className="apartment__description--area">
        <DescriptionPanel title="Description">
          <div>{apartment.description}</div>
        </DescriptionPanel>
        <DescriptionPanel title="Equipements">
          <div>{apartment.equipments.map((eq, index) => <li key={index}>{eq}</li>)}</div>
        </DescriptionPanel>
      </div>
    </div>
  );
}

export { ApartmentPage };
