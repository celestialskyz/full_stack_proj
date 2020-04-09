import React from 'react';

const MusicalItem =({musical})=>{
  return(
    <li key = {musical.id}>
      /* <Link to ={`/musicals/${musical.id}`} >{musical.name}</Link> */
      {/* {musical.name} */}
    </li>
  )
}

export default MusicalItem;