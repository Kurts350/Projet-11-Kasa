import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "../sass/pages/ApartmentPage.scss";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { ImageBanner } from "../components/ImageBanner";
import { useState } from "react";

function ApartmentPage() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(fetchApartmentData, [id]);

  function fetchApartmentData() {
    fetch("/db.json")
      .then((res) => res.json())
      .then((apartments) => {
        const apartment = apartments.find(
          (apartment) => apartment.id === id
        );
        setApartment(apartment);
        setLoading(false);
      })
      .catch(console.error);
  }

  if (loading) return <div>Loading...</div>;
  if (!apartment) return <Navigate to="/404" />;

  return (
    <div className="apartment">
      <ImageBanner pictures={apartment.pictures} hideControls={false} />
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
