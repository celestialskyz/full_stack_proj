import React from 'react';
import { Link } from 'react-router-dom';

const MusicalItem =({musical})=>{

  const mban = musical.photoUrls[musical.photoUrls.length-1];

  return(
    <li className = "row">
        <div className = "profile"> 
        <img className = "profilep"
          src = {mban}
        ></img>
      </div>
      <Link to ={`/musicals/${musical.id}`} >{musical.name}</Link>
        
    </li>
  )
}

export default MusicalItem;