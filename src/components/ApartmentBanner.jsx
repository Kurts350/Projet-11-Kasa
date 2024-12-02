import React from 'react'
import apartmentpage from "../assets/apartment-page.png";
import '../sass/components/ApartmentBanner.scss'

function ApartmentBanner() {
  return (
    <div>
    <img src={apartmentpage} alt="" className="apartment__img" />
  </div>
  )
}

export default ApartmentBanner
