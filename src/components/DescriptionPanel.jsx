import React from "react";
import "../sass/components/DescriptionPanel.scss";

function DescriptionPanel() {
  return (
    <div className="description__panel">
      <h3 className="description__header">
        <span>Description</span>
        <i class="fa-solid fa-chevron-down"></i>
      </h3>
      <p className="description__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum
        error eum harum cupiditate iure asperiores molestiae! Laboriosam modi
        est at quasi voluptatum magnam fugit optio animi culpa explicabo iusto
        temporibus numquam repellat nostrum eaque tenetur et accusamus inventore
        impedit, aspernatur eveniet sequi! Consectetur vitae deserunt incidunt
        inventore vel culpa.
      </p>
    </div>
  );
}

export {DescriptionPanel};
