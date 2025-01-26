import React from "react";
import {DescriptionPanel} from "../components/DescriptionPanel";
import "../sass/components/DescriptionPanel.scss";
import "../sass/pages/About.scss";
import {ImageBanner} from "../components/ImageBanner";
import AboutBanner from "../assets/aboutbanner.png";

function About() {
  return (
    <>
      <ImageBanner pictures={[AboutBanner]} hideControls={true} />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité">
          <div>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
        </DescriptionPanel>
        
        <DescriptionPanel title="Respect">
          <div>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </DescriptionPanel>
        
        <DescriptionPanel title="Service">
          <div>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </DescriptionPanel>
        
        <DescriptionPanel title="Sécurité">
          <div>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous         organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
        </DescriptionPanel>
      </div>
    </>
  );
}

export {About};
        