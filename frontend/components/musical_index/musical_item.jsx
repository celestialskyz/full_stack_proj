import React from 'react';
import { Link } from 'react-router-dom';

const MusicalItem =({musical})=>{
  return(
    <li >
      <Link to ={`/musicals/${musical.id}`} >{musical.name}</Link>
     {/* {musical.name}  */}
    </li>
  )
}

export default MusicalItem;