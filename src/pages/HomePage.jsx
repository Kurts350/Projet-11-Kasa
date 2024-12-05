import React from "react";
import {Banner} from "../components/Banner.jsx";
import {ApartmentSection} from "../components/ApartmentSection.jsx";
import "../sass/pages/HomePage.scss";

function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentSection />
    </>
  );
}

export {HomePage};
