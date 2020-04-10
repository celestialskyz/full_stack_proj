import React from 'react';
// import MusicalIndex from '../musical_index/musical_index';


const MusicalDetail =({musical})=>{
  return(
   
    <section className ="musical_detail">
      <nav className = "detailNav">
        <ul className = "little_tabs">
          <li>Overview</li>
          <li>Specials</li>
          <li>Photos</li>
          <li>Reviews</li>
        </ul>
      </nav> 
      <h1>{musical.name}</h1>
      <ul className = "review_stats">
        <li>
          Rating Number
        </li>
        <li>
          300 Reviews
        </li>
        <li>
         {musical.cost}
        </li>
        <li>
            {musical.category}
        </li>
      </ul>
      <div className='description'>
        {musical.description}
      </div>
      <div className="photos">
        <h2>Photos</h2>
      </div>
    </section>
  )
}
export default MusicalDetail;