import React from 'react';
import {fetchUser} from '../../actions/user_actions';

const ReservationsItem = ({reservation, currentUser, mName, updateRes, deleteRes}) =>{
 
  const {party_size, date, time} = reservation;
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
