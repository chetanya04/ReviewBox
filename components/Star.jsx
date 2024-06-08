"use client"
import React, { useState } from 'react'
export default function Star(){
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="review-container">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= (hover || rating) ? 'selected' : ''}`}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(value)}
          >
             &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};


