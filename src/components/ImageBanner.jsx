import React from "react";
import "../sass/components/ImageBanner.scss";
import { useState } from "react";

function ImageBanner({ pictures, hideControls = false }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const getClassName = (index) => {
    if (index === currentPictureIndex) return "active";
    return "";
  };     

  const nextPicture = () => {
    setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length);
  }

  const previousPicture = () => {
    setCurrentPictureIndex((currentPictureIndex - 1 + pictures.length) % pictures.length);
  
  }

  return (
    <div className="image__banner">
      {!hideControls && pictures.length > 1 && (
        <>
          <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>
          <div className="curent-count">{currentPictureIndex + 1} / {pictures.length}</div>
          <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
        </>
      )}
      {pictures.map((pic, index) => (
        <img key={index} src={pic} alt="" className={getClassName(index)}/>
      ))}
    </div>
  );
}

export { ImageBanner };
