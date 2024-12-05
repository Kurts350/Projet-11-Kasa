import React from "react";
import "../sass/components/ImageBanner.scss";

function ImageBanner({ src }) {
  return (
    <div className="image__banner">
      <img src={src} alt="" />
    </div>
  );
}

export {ImageBanner};
