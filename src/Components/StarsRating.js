import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarsRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const stars = i + 1;
        return (
          <label>
            <input type="radio" name="stars" value={rating} />
            <FaStar
              id="rating"
              color={stars <= (rating) ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarsRating;
