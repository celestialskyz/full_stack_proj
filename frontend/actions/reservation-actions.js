import * as APIres from '../util/reservation_api_util';

export const RECEIVE_RESVS = 'RECEIVE_RESVS';
export const RECEIVE_RES = 'RECEIVE_RES';
export const REMOVE_RES = 'REMOVE_RES';
export const RECEIVE_PENDING_RES ='RECEIVE_PENDING_RES';
export const CLEAR_PENDING_RES = "CLEAR_PENDING_RES";
export const RECEIVE_INDEX_LIMIT = "RECEIVE_INDEX_LIMIT";
const receiveResvs =({resvs, musicals})=>{
  
  return({
    type: RECEIVE_RESVS,
    resvs, musicals
  });
}
;
const receiveRes =(res)=>{
  return({
    type: RECEIVE_RES,
    // reservationdetails
    res
  });
};

const removeRes =(resId)=>{
  return({
    type: REMOVE_RES,
    resId
  });
};
export const receivePendingRes=(res)=>{
  return({
    type: RECEIVE_PENDING_RES,
    res
  });
};

// export const receiveIndexLimit=(limit)=>{
//   return({
//     type: RECEIVE_INDEX_LIMIT,
//     limit
//   });
// };

export const clearPendingRes =()=>{
  return({
    type:CLEAR_PENDING_RES
  })
}

export const requestResvs=(userId)=>dispatch =>{
  return(
    APIres.fetchReservations(userId).then(resvs =>{ dispatch(receiveResvs(resvs));})
  );
};

export const requestRes=(userId, resId)=>dispatch =>{
  return(
    APIres.fetchReservation(userId, resId).then(res =>{ dispatch(receiveRes(res));})
  );
};

export const createRes = (res) => dispatch =>{
  return(
    APIres.createReservation(res).then(res => {dispatch(receiveRes(res));}
    )
  );
};

export const updateRes = (userId, res) => dispatch =>{
  return(
    APIres.updateReservation(userId, res).then(res => {dispatch(receiveRes(res));})
  );
};

export const deleteRes = (userId, resId) =>dispatch=>{
  debugger
  return(
    APIres.deleteReservation(userId, resId).then(()=>{dispatch(removeRes(resId));})
  );
};