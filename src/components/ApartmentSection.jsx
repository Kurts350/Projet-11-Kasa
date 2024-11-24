import React from 'react'
import '../sass/ApartmentSection.scss'
import Apartment from './Apartment.jsx'
function ApartmentSection() {
  return (
    <div className='grid'>
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
    </div>
  )
}

export default ApartmentSection
