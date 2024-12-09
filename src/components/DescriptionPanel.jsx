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
        <i className="fa-solid fa-chevron-down" onClick={showContent}></i>
      </h3>
      {isOpen && <div className="description__content">{children}</div>}
    </div>
  );
}

export { DescriptionPanel };
