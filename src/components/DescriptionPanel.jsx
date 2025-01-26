import React from "react";
import "../sass/components/DescriptionPanel.scss";
import { useState } from "react";

function DescriptionPanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const showContent = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="description__panel">
      <h3 className="description__header">
        <span>{title}</span>
        <i 
          className={`fa-solid fa-chevron-down ${isOpen ? "rotate" : ""}`} 
          onClick={showContent}
        ></i>
      </h3>
      <div className={`description__content ${isOpen ? "show" : "hide"}`}>
        {children}
      </div>
    </div>
  );
}

export { DescriptionPanel };
