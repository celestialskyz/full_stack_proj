import React from 'react';
import { Link } from 'react-router-dom';

const MusicalItem =({musical})=>{

  const mban = musical.photoUrls[musical.photoUrls.length-1];

  return(
    <li className = "row">
      <Link to ={`/musicals/${musical.id}`}>
        <div className = "profile"> 
        <img className = "profilep"
          src = {mban}
        ></img>
      </div>
      <div className="underplz">
        <h1 className = "title">{musical.name}</h1>
        
        <div className = "extraExtra">
          <p> {musical.city}</p>
          <p> {musical.category}</p>
        </div>
      </div>
      </Link>
    </li>
  )
}

export default MusicalItem;