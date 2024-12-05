import React from "react";
import "../sass/pages/ApartmentPage.scss";
import {DescriptionPanel} from "../components/DescriptionPanel";
import {ApartmentHeader} from "../components/ApartmentHeader";
import {ImageBanner} from "../components/ImageBanner";
import apartmentpage from "../assets/apartment-page.png";

function ApartmentPage() {
  return (
    <div className="apartment">
      <ImageBanner src={apartmentpage} />
      <ApartmentHeader />
      <div className="apartment__description--area">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export {ApartmentPage};
