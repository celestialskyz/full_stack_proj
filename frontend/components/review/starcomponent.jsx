import React from 'react';

const StarShow = ({rating}) => {
  
  const starCount = rating;  
  return (
      <ul className="stars">
          <li>{starCount >= 1 ? "★" : "☆"}</li>
          <li>{starCount >= 2 ? "★" : "☆"}</li>
          <li>{starCount >= 3 ? "★" : "☆"}</li>
          <li>{starCount >= 4 ? "★" : "☆"}</li>
          <li> {starCount >= 5 ? "★" : "☆"}</li>
      </ul>
  )
}
export default StarShow;