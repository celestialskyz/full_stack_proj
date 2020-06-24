import React from 'react';
// import MusicalIndex from '../musical_index/musical_index';


const MusicalDetail =({musical})=>{
  return(
   
    <section id = "about" className ="musical_detail">
      <h1>{musical.name}</h1>
      <div className="horz">
        <ul className = "review_stats">
          <li>
            Rating Number
          </li>
          <li>
          <i className="far fa-comment-alt">
            300 Reviews
          </i>
          </li>
          <li>
          ${musical.cost}
          </li>
          <li>
              {musical.category}
          </li>
        </ul>
      </div>
      <div className='description'>
        {musical.description}
      </div>
    </section>
  )
}
export default MusicalDetail;