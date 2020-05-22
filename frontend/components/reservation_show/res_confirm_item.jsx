import React from 'react';


const ReservationsItem = ({reservation, fetchMusical, updateRes, deleteRes, requestUser }) =>{
  debugger
  const {show_id, reserver_id, party_size, date, time} = reservation;
  let currentUser = requestUser(reserver_id);
  
  if (!reservation.mName || reservation.mName === undefined){
    let mName = fetchMusical(show_id);
  }
 return(
   <>
     <div className="greenConfirm">
       <h2 className="done"> Thanks, {currentUser}! Your reservation is confirmed.</h2>
     </div>
     <div className="InfoDone">
       <h2 className="mNameDone">{mName}</h2>
       <div>{date}</div> <div>{time}</div>
       <div>{party_size}</div>
       {/* <Link to='/musicals/deleted'>
         Cancel
       </Link> */}
     {/* button here to render buttons again but this time its a classname switch not DOM */}
     </div>
   </>
 )
}

export default ReservationsItem;
