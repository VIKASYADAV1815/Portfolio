import React, { forwardRef } from 'react';
import './card.css'; // Your CSS for the card

const Card = forwardRef(({ title, image, desc }, ref) => {
  return (
    <div className="card" ref={ref}>
      <div className="hoverc">
        <img src={image} alt={title} className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <h5 className='description'>{desc}</h5>
    </div>
  );
});

export default Card;
