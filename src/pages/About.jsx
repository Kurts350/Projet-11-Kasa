import React from "react";
import {DescriptionPanel} from "../components/DescriptionPanel";
import "../sass/components/DescriptionPanel.scss";
import "../sass/pages/About.scss";
import {ImageBanner} from "../components/ImageBanner";
import AboutBanner from "../assets/aboutbanner.png";
function About() {
  return (
    <>
      <ImageBanner src={AboutBanner} />
      <div className="about__container">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  );
}

export {About};
