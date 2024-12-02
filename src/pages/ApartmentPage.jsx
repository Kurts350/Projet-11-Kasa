import React from "react";
import "../sass/pages/ApartmentPage.scss";
import ApartmentDescription from "../components/ApartmentDescription";
import ApartmentBanner from "../components/ApartmentBanner";
import ApartmentHeader from "../components/ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment">
      <ApartmentBanner />
      <ApartmentHeader />
      <div className="apartment__description--area">
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  );
}

export default ApartmentPage;
