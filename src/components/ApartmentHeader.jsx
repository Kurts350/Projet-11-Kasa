import React from "react";
import "../sass/components/ApartmentHeader.scss";

function ApartmentHeader({apartment}) {
  const {name} = apartment.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>{apartment.title}</h1>
        <h2>{apartment.location}</h2>
        <div className="apartment__tags">
          {apartment.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        <div className="apartment__owner--details">
          <h3>
            {firstName} <br />
            {lastName}
          </h3>
          <div className="apartment__owner--badge">
            <img src={apartment.host.picture} alt="" />
          </div>
        </div>
        <div className="apartment__owner--stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <i
              key={num}
              className={
                "fa-solid fa-star " + (apartment.rating >= num ? "full" : "")
              }
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ApartmentHeader };
