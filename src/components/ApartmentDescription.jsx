import React from 'react'
import '../sass/components/ApartmentDescription.scss'
function ApartmentDescription() {
  return (
    <div className="apartment__description">
    <h3 className="description__header">
      <span>Description</span>
      <i class="fa-solid fa-chevron-down"></i>
    </h3>
    <p className="description__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum
      error eum harum cupiditate iure asperiores molestiae! Laboriosam modi
      est at quasi voluptatum magnam fugit optio animi culpa explicabo iusto
      temporibus numquam repellat nostrum eaque tenetur et accusamus
      inventore impedit, aspernatur eveniet sequi! Consectetur vitae
      deserunt incidunt inventore vel culpa.
    </p>
  </div>
  )
}

export default ApartmentDescription
