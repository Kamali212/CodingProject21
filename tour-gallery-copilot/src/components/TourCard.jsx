import React from 'react';

// TourCard component to display details of a single tour
// Props:
// - tour: Object containing details of the tour (id, name, info, image, price)
// - onRemove: Function to handle the removal of this tour
function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name */}
        <h2>{name}</h2>
        {/* Display the tour info */}
        <p>{info}</p>
        {/* Display the tour price */}
        <p className="tour-price">Price: ${price}</p>
        {/* Button to remove the tour */}
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;