import React from 'react'
import '../sass/components/ApartmentHeader.scss'

function ApartmentHeader() {
  return (
    <div className="apartment__header">
    <div className="apartment__title">
      <h1>Cozy loft on the Canal Saint-Martin</h1>
      <h2>Paris, Île-de-France</h2>
      <div className="apartment__tags">
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
    </div>
    <div className="apartment__owner">
      <div className="apartment__owner--details">
        <h3>
          Alexandre <br /> Dumas
        </h3>
        <div className="apartment__owner--badge"></div>
      </div>
      <div className="apartment__owner--stars">
        <i className="fa-solid fa-star full"></i>
        <i className="fa-solid fa-star full"></i>
        <i className="fa-solid fa-star full"></i>
        <i className="fa-solid fa-star empty"></i>
        <i className="fa-solid fa-star empty"></i>
      </div>
    </div>
  </div>
  )
}

export {ApartmentHeader}
