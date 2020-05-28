import React from 'react';
var dateFormat = require('dateformat');

const ReservationsItem = ({reservation, currentUser, mName, updateRes, deleteRes}) =>{
 
  const {party_size, date, time} = reservation;
  const tranlatedtime = time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" :
                (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";


  
 return(
   <>
   <div className = "confirmed">
     <div className="greenConfirm">
       <h2 className="done"> Thanks, {currentUser}! Your reservation is confirmed.</h2>
     </div>
     <div className="InfoDone">
       <h2 className="mNameDone">{mName}</h2>
       <div>{dateFormat(date, "mediumDate")}</div>{tranlatedtime}<div></div>
       <div>{party_size}</div>
       {/* <Link to='/musicals/deleted'>
         Cancel
       </Link> */}
     {/* button here to render buttons again but this time its a classname switch not DOM */}
     </div>
    </div>
   </>
 )
}

export default ReservationsItem;
