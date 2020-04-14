import React from 'react';
// import MusicalIndex from '../musical_index/musical_index';

const MusicalDetail =({musical})=>{
  // const arr = ["yes", "no"];
  // if (musical.lottery)
  //   let yn = arr[0];
  // else
  //   yn = arr[1];

  return(
    
    
   <>
    <section className ="musical_detail2">
      <nav className = "otherDetails">
        <ul className = "rightsideTabs">
          {/* <li>
            Lottery: 
          <div className="musicalInfo">
            {  musical.lottery
            }
          </div>
          </li> */}
          <li>
            <label>Genre:</label> 
          <div className="musicalInfo">
            {musical.category}
          </div>
          </li>
          <li>
          <label> Website </label>
            <div className="musicalInfo">
            {musical.website}
            </div>
          </li>
          <li>
          <label>Phone number</label>  
            <div className="musicalInfo">
            {musical.phone_n}
            </div>
          </li>
        </ul>
        </nav>
      </section>
    </>
  )
}

export default MusicalDetail;